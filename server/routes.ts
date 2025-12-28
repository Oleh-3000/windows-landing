import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);
      
      // Save to storage
      const submission = await storage.createContactSubmission(data);
      
      // Send email
      try {
        await sendContactEmail(data);
      } catch (emailError) {
        console.error("Failed to send email:", emailError);
        // Continue execution even if email fails
      }

      res.json({ success: true, id: submission.id });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid form data", details: error.errors });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// Константы по умолчанию для email (fallback если не заданы в env)
const DEFAULT_EMAIL_TO = "urijarsenal@gmail.com";
const DEFAULT_EMAIL_FROM = "noreply@viknomikolayiv.com";

async function sendContactEmail(data: any) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_FROM,
    EMAIL_TO
  } = process.env;

  // Используем значения из env или константы по умолчанию
  const emailTo = EMAIL_TO || DEFAULT_EMAIL_TO;
  const emailFrom = EMAIL_FROM || DEFAULT_EMAIL_FROM;

  // Проверяем обязательные параметры SMTP
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    console.warn(
      `Email configuration incomplete. Missing: ${
        !SMTP_HOST ? "SMTP_HOST " : ""
      }${!SMTP_USER ? "SMTP_USER " : ""}${!SMTP_PASS ? "SMTP_PASS" : ""
      }`
    );
    console.log(`Email would be sent to: ${emailTo}`);
    console.log("Skipping email send. Please configure SMTP settings in .env file");
    return;
  }

  try {
    const transporter = nodemailer.createTransporter({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT || "587"),
      secure: SMTP_PORT === "465",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
      // Дополнительные опции для надежности
      tls: {
        rejectUnauthorized: false, // Для самоподписанных сертификатов
      },
    });

    // Проверяем соединение
    await transporter.verify();

    const serviceNames: Record<string, string> = {
      windows: "Металопластикові вікна",
      doors: "Балконні двері", 
      balcony: "Остекління балконів",
      repair: "Ремонт вікон",
      blinds: "Жалюзі та ролети",
      shutters: "Захисні ролети",
    };

    // Экранируем HTML для безопасности
    const escapeHtml = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const emailHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { background-color: #f9fafb; padding: 20px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { color: #4b5563; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Нова заявка з сайту Вікна Миколаїв</h2>
          </div>
          <div class="content">
            <div class="field">
              <span class="label">Дата:</span>
              <span class="value">${new Date().toLocaleString('uk-UA')}</span>
            </div>
            <div class="field">
              <span class="label">Ім'я:</span>
              <span class="value">${escapeHtml(data.name)}</span>
            </div>
            <div class="field">
              <span class="label">Телефон:</span>
              <span class="value">${escapeHtml(data.phone)}</span>
            </div>
            ${data.email ? `
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${escapeHtml(data.email)}</span>
            </div>
            ` : ''}
            ${data.service ? `
            <div class="field">
              <span class="label">Послуга:</span>
              <span class="value">${serviceNames[data.service] || escapeHtml(data.service)}</span>
            </div>
            ` : ''}
            ${data.message ? `
            <div class="field">
              <span class="label">Повідомлення:</span>
              <div class="value" style="white-space: pre-wrap;">${escapeHtml(data.message)}</div>
            </div>
            ` : ''}
          </div>
        </div>
      </body>
      </html>
    `;

    const info = await transporter.sendMail({
      from: emailFrom,
      to: emailTo,
      subject: `Нова заявка від ${data.name} - Вікна Миколаїв`,
      html: emailHtml,
      // Текстовая версия для совместимости
      text: `
Нова заявка з сайту Вікна Миколаїв

Дата: ${new Date().toLocaleString('uk-UA')}
Ім'я: ${data.name}
Телефон: ${data.phone}
${data.email ? `Email: ${data.email}` : ''}
${data.service ? `Послуга: ${serviceNames[data.service] || data.service}` : ''}
${data.message ? `Повідомлення:\n${data.message}` : ''}
      `.trim(),
    });

    console.log(`Email sent successfully to ${emailTo}. MessageId: ${info.messageId}`);
  } catch (error: any) {
    console.error("Failed to send email:", error);
    throw error; // Пробрасываем ошибку для обработки выше
  }
}

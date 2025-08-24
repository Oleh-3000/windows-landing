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

async function sendContactEmail(data: any) {
  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    EMAIL_FROM,
    EMAIL_TO
  } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !EMAIL_FROM || !EMAIL_TO) {
    console.log("Email configuration missing, skipping email send");
    return;
  }

  const transporter = nodemailer.createTransporter({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || "587"),
    secure: SMTP_PORT === "465",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const serviceNames: Record<string, string> = {
    windows: "Металопластикові вікна",
    doors: "Балконні двері", 
    balcony: "Остекління балконів",
    repair: "Ремонт вікон",
    blinds: "Жалюзі та ролети",
    shutters: "Захисні ролети",
  };

  const emailHtml = `
    <h2>Нова заявка з сайту ВікнаПлюс</h2>
    <p><strong>Дата:</strong> ${new Date().toLocaleString('uk-UA')}</p>
    <p><strong>Ім'я:</strong> ${data.name}</p>
    <p><strong>Телефон:</strong> ${data.phone}</p>
    ${data.email ? `<p><strong>Email:</strong> ${data.email}</p>` : ''}
    ${data.service ? `<p><strong>Послуга:</strong> ${serviceNames[data.service] || data.service}</p>` : ''}
    ${data.message ? `<p><strong>Повідомлення:</strong><br>${data.message.replace(/\n/g, '<br>')}</p>` : ''}
  `;

  await transporter.sendMail({
    from: EMAIL_FROM,
    to: EMAIL_TO,
    subject: `Нова заявка від ${data.name}`,
    html: emailHtml,
  });
}

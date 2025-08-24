import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiFacebook, SiInstagram, SiTelegram, SiViber } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const contactFormSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити принаймні 2 символи"),
  phone: z.string().min(10, "Введіть коректний номер телефону"),
  email: z.string().email("Введіть коректний email").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Дякуємо!",
        description: "Ваша заявка надіслана. Ми зв'яжемося з вами найближчим часом.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Помилка",
        description: "Не вдалося надіслати заявку. Спробуйте ще раз.",
        variant: "destructive",
      });
      console.error("Contact form error:", error);
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || "+38 (050) 123-45-67";
  const phoneNumber2 = import.meta.env.VITE_PHONE_NUMBER_2 || "+38 (063) 123-45-67";
  const email = import.meta.env.VITE_EMAIL || "info@viknaplus.com";
  const address = import.meta.env.VITE_ADDRESS || "м. Миколаїв, вул. Центральна, 123";
  const facebookUrl = import.meta.env.VITE_FACEBOOK_URL || "https://facebook.com/viknaplus";
  const instagramUrl = import.meta.env.VITE_INSTAGRAM_URL || "https://instagram.com/viknaplus";
  const telegramUrl = import.meta.env.VITE_TELEGRAM_URL || "https://t.me/viknaplus";
  const viberUrl = import.meta.env.VITE_VIBER_URL || "viber://chat?number=%2B380501234567";

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="contact-title">
            Зв'яжіться з нами
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="contact-subtitle">
            Залиште заявку і наш фахівець зв'яжеться з вами для безкоштовного заміру
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6" data-testid="form-title">
              Форма зворотного зв'язку
            </h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Ім'я *</FormLabel>
                      <FormControl>
                        <Input placeholder="Введіть ваше ім'я" {...field} data-testid="input-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Телефон *</FormLabel>
                      <FormControl>
                        <Input placeholder="+38 (0XX) XXX-XX-XX" {...field} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Тип послуги</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-service">
                            <SelectValue placeholder="Оберіть послугу" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="windows">Металопластикові вікна</SelectItem>
                          <SelectItem value="doors">Балконні двері</SelectItem>
                          <SelectItem value="balcony">Остекління балконів</SelectItem>
                          <SelectItem value="repair">Ремонт вікон</SelectItem>
                          <SelectItem value="blinds">Жалюзі та ролети</SelectItem>
                          <SelectItem value="shutters">Захисні ролети</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Повідомлення</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Додаткова інформація..." 
                          className="min-h-[100px]" 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-accent text-white py-4 text-lg font-semibold"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    "Надсилання..."
                  ) : (
                    <>
                      Надіслати заявку
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-slate-600 text-center">
                  * Обов'язкові поля. Натискаючи кнопку, ви погоджуєтесь з обробкою персональних даних
                </p>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 mb-6" data-testid="contact-info-title">
                Контактна інформація
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-address">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Адреса</h4>
                    <p className="text-slate-600">{address}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-phones">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Телефони</h4>
                    <p className="text-slate-600">
                      <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                        {phoneNumber}
                      </a><br/>
                      <a href={`tel:${phoneNumber2.replace(/\s/g, '')}`} className="hover:text-primary transition-colors">
                        {phoneNumber2}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Email</h4>
                    <p className="text-slate-600">
                      <a href={`mailto:${email}`} className="hover:text-primary transition-colors">
                        {email}
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4" data-testid="contact-hours">
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Графік роботи</h4>
                    <p className="text-slate-600">
                      Пн-Пт: 9:00 - 18:00<br/>
                      Сб: 10:00 - 16:00<br/>
                      Нд: вихідний
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-slate-800 mb-4" data-testid="social-media-title">
                Ми в соціальних мережах
              </h4>
              <div className="flex space-x-4">
                <a 
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                  data-testid="social-facebook"
                >
                  <SiFacebook className="h-6 w-6" />
                </a>
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:opacity-90 transition-opacity"
                  data-testid="social-instagram"
                >
                  <SiInstagram className="h-6 w-6" />
                </a>
                <a 
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                  data-testid="social-telegram"
                >
                  <SiTelegram className="h-6 w-6" />
                </a>
                <a 
                  href={viberUrl}
                  className="bg-purple-600 text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-purple-700 transition-colors"
                  data-testid="social-viber"
                >
                  <SiViber className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

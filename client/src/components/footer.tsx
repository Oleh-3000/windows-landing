import { Home, MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiTelegram } from "react-icons/si";
import Logo from "./logo";
import { PHONE_NUMBER, EMAIL, ADDRESS, FACEBOOK_URL, INSTAGRAM_URL, TELEGRAM_URL } from "@/constants";

export default function Footer() {
  const phoneNumber = PHONE_NUMBER;
  const email = EMAIL;
  const address = ADDRESS;
  const facebookUrl = FACEBOOK_URL;
  const instagramUrl = INSTAGRAM_URL;
  const telegramUrl = TELEGRAM_URL;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo />
            </div>
            <p className="text-slate-300 mb-4" data-testid="footer-description">
              Професійне встановлення металопластикових вікон у Миколаєві з 2008 року.
            </p>
            <div className="flex space-x-4">
              {facebookUrl && (
                <a 
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-facebook"
                >
                  <SiFacebook className="h-6 w-6" />
                </a>
              )}
              {instagramUrl && (
                <a 
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-instagram"
                >
                  <SiInstagram className="h-6 w-6" />
                </a>
              )}
              {telegramUrl && (
                <a 
                  href={telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  data-testid="footer-telegram"
                >
                  <SiTelegram className="h-6 w-6" />
                </a>
              )}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-links-title">Швидкі посилання</h3>
            <ul className="space-y-2 text-slate-300">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-about"
                >
                  Про нас
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-services"
                >
                  Послуги
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-gallery"
                >
                  Галерея
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Контакти
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4" data-testid="footer-contact-title">Контакти</h3>
            <div className="space-y-2 text-slate-300">
              <p className="flex items-center" data-testid="footer-address">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                {address}
              </p>
              <p data-testid="footer-phone">
                <Phone className="h-4 w-4 mr-2 inline flex-shrink-0" />
                <a href={`tel:${phoneNumber.replace(/\s/g, '')}`} className="hover:text-white transition-colors">
                  {phoneNumber}
                </a>
              </p>
              <p data-testid="footer-email">
                <Mail className="h-4 w-4 mr-2 inline flex-shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors">
                  {email}
                </a>
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p data-testid="footer-copyright">&copy; 2024 ВікнаПлюс. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}

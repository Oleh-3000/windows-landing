import { useState, useEffect } from "react";
import { Menu, X, Phone, Home } from "lucide-react";
import Logo from "./logo";
import { PHONE_NUMBER } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const phoneNumber = PHONE_NUMBER;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Logo />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-home"
            >
              Головна
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-about"
            >
              Про нас
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-services"
            >
              Послуги
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-gallery"
            >
              Галерея
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-reviews"
            >
              Відгуки
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-slate-700 hover:text-primary transition-colors font-medium"
              data-testid="nav-contact"
            >
              Контакти
            </button>
          </div>
          
          {/* Phone Number */}
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="hidden lg:flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-accent transition-colors"
            data-testid="header-phone"
          >
            <Phone className="h-4 w-4" />
            <span>{phoneNumber}</span>
          </a>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-700 hover:text-primary transition-colors"
            data-testid="mobile-menu-toggle"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 py-4 mt-3">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-home"
              >
                Головна
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-about"
              >
                Про нас
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-services"
              >
                Послуги
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-gallery"
              >
                Галерея
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-reviews"
              >
                Відгуки
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-slate-700 hover:text-primary transition-colors font-medium px-2 py-1 text-left"
                data-testid="mobile-nav-contact"
              >
                Контакти
              </button>
              <a
                href={`tel:${phoneNumber.replace(/\s/g, '')}`}
                className="bg-primary text-white px-4 py-2 rounded-lg text-center mt-2"
                data-testid="mobile-phone"
              >
                <Phone className="inline h-4 w-4 mr-2" />
                {phoneNumber}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Сучасні металопластикові вікна"
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Професійний монтаж вікон"
  },
  {
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    alt: "Якісні вікна в інтер'єрі"
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const phoneNumber = import.meta.env.VITE_PHONE_NUMBER || "+38 (050) 123-45-67";

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="relative pt-16 min-h-screen flex items-center overflow-hidden">
      {/* Slider Container */}
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full flex-shrink-0 relative">
              <img 
                src={slide.image} 
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-testid="hero-title">
          Якісні вікна для<br/>
          <span className="text-yellow-400">вашого дому</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto" data-testid="hero-subtitle">
          Встановлення металопластикових вікон у Миколаєві з гарантією якості та доступними цінами
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-yellow-400 text-slate-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
            data-testid="button-free-measurement"
          >
            Безкоштовний замір
          </button>
          <a
            href={`tel:${phoneNumber.replace(/\s/g, '')}`}
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors flex items-center gap-2"
            data-testid="button-call"
          >
            <Phone className="h-5 w-5" />
            {phoneNumber}
          </a>
        </div>
      </div>
      
      {/* Slider Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white' : 'bg-white/60 hover:bg-white/80'
            }`}
            data-testid={`slider-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}

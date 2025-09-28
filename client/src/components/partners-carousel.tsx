import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import vekaLogo from "@assets/images/partners/veka-logo.svg";
import rehauLogo from "@assets/images/partners/rehau-logo.svg";
import kbeLogo from "@assets/images/partners/kbe-logo.svg";
import schucoLogo from "@assets/images/partners/schuco-logo.svg";
import salamanderLogo from "@assets/images/partners/salamander-logo.svg";
import aluplastLogo from "@assets/images/partners/aluplast-logo.svg";
import trocalLogo from "@assets/images/partners/trocal-logo.svg";
import deceuninckLogo from "@assets/images/partners/deceuninck-logo.svg";

const partners = [
  {
    id: 1,
    name: "Rehau",
    logo: rehauLogo,
    description: "Німецький виробник профілів для вікон"
  },
  {
    id: 2,
    name: "Veka",
    logo: vekaLogo,
    description: "Світовий лідер у виробництві ПВХ-профілів"
  },
  {
    id: 3,
    name: "KBE",
    logo: kbeLogo,
    description: "Якісні віконні системи з Німеччини"
  },
  {
    id: 4,
    name: "Schüco",
    logo: schucoLogo,
    description: "Інноваційні рішення для вікон та дверей"
  },
  {
    id: 5,
    name: "Salamander",
    logo: salamanderLogo,
    description: "Преміум віконні системи з Німеччини"
  },
  {
    id: 6,
    name: "Aluplast",
    logo: aluplastLogo,
    description: "Інноваційні рішення для алюмінієвих профілів"
  },
  {
    id: 7,
    name: "Trocal",
    logo: trocalLogo,
    description: "Якісні віконні системи з Європи"
  },
  {
    id: 8,
    name: "Deceuninck",
    logo: deceuninckLogo,
    description: "Сучасні рішення для вікон та дверей"
  }
];

export default function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(2);

  // Calculate slides to show based on screen size
  const updateSlidesToShow = () => {
    if (window.innerWidth >= 1024) {
      setSlidesToShow(4); // lg and above - max 4 slides
    } else if (window.innerWidth >= 768) {
      setSlidesToShow(3); // md and above
    } else {
      setSlidesToShow(2); // mobile - min 2 slides
    }
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const nextSlide = () => {
    const maxIndex = Math.max(0, partners.length - slidesToShow);
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) {
        return 0; // Возвращаемся к началу
      }
      return prev + 1;
    });
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, partners.length - slidesToShow);
    setCurrentIndex((prev) => {
      if (prev <= 0) {
        return maxIndex; // Переходим к концу
      }
      return prev - 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const maxIndex = Math.max(0, partners.length - slidesToShow);

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-slate-100 to-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="partners-title">
            Наші партнери
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="partners-subtitle">
            Ми співпрацюємо з провідними виробниками якісних віконних систем
          </p>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
              }}
            >
              {partners.map((partner, index) => (
                <div 
                  key={partner.id} 
                  className="px-3 flex-shrink-0"
                  style={{ 
                    width: slidesToShow === 2 ? '50%' : 
                           slidesToShow === 3 ? '33.333%' : '25%'
                  }}
                >
                  <div className="bg-white rounded-xl p-6 text-center shadow-lg h-full hover:shadow-xl transition-shadow duration-300 border border-slate-200" data-testid={`partner-card-${index}`}>
                    <div className="mb-4">
                      <img 
                        src={partner.logo} 
                        alt={`Логотип ${partner.name}`}
                        className="w-24 h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 object-contain mx-auto"
                        data-testid={`partner-logo-${index}`}
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2" data-testid={`partner-name-${index}`}>
                      {partner.name}
                    </h3>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed" data-testid={`partner-description-${index}`}>
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          {partners.length > slidesToShow && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
                data-testid="partners-prev"
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors z-10"
                data-testid="partners-next"
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-primary' : 'bg-slate-300 hover:bg-primary'
                }`}
                data-testid={`partner-dot-${index}`}
                title={`Слайд ${index + 1} з ${maxIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

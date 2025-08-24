import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Марія Петренко",
    text: "Дуже задоволена якістю роботи! Швидко та професійно встановили вікна.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Олександр Іваненко",
    text: "Рекомендую! Доступні ціни та високий рівень сервісу.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Тетяна Коваленко",
    text: "Вікна встановили якісно, тепло тримають відмінно. Дякую!",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Ігор Семенов",
    text: "Чудова команда! Все зробили швидко та акуратно.",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Ліна Волошенко",
    text: "Дуже гарні вікна за розумну ціну. Буду рекомендувати друзям!",
    rating: 5
  },
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
    name: "Дмитро Кузнецов",
    text: "Професіонали своєї справи! Результат перевершив очікування.",
    rating: 5
  }
];

export default function ReviewsCarousel() {
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToReview = (index: number) => {
    setCurrentReview(index);
  };

  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="reviews-title">
            Відгуки наших клієнтів
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="reviews-subtitle">
            Що говорять наші клієнти про якість наших послуг
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="min-w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-8 text-center shadow-lg" data-testid={`review-card-${index}`}>
                    <img 
                      src={review.image} 
                      alt={`Відгук ${review.name}`}
                      className="w-80 h-96 object-cover rounded-lg mx-auto mb-6 shadow-md"
                      data-testid={`review-image-${index}`}
                    />
                    <h3 className="text-xl font-semibold text-slate-800 mb-2" data-testid={`review-name-${index}`}>
                      {review.name}
                    </h3>
                    <p className="text-slate-600 mb-4" data-testid={`review-text-${index}`}>
                      {review.text}
                    </p>
                    <div className="flex justify-center">
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, starIndex) => (
                          <Star key={starIndex} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            data-testid="reviews-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
            data-testid="reviews-next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentReview ? 'bg-primary' : 'bg-slate-300 hover:bg-primary'
                }`}
                data-testid={`review-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

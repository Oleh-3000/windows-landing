import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Вікна у квартирі",
    subtitle: "Металопластикові вікна KBE"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Панорамні вікна",
    subtitle: "Великі вікна у вітальні"
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Балконні двері",
    subtitle: "Енергоефективні балконні блоки"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Офісні вікна",
    subtitle: "Алюмінієві конструкції"
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Приватний будинок",
    subtitle: "Вікна з захисними ролетами"
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Кухонні вікна",
    subtitle: "Енергозберігаючі склопакети"
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Застеклений балкон",
    subtitle: "Тепле остекління з обшивкою"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
    thumb: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Комерційний об'єкт",
    subtitle: "Фасадне остекління"
  }
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryItems.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  // Keyboard navigation
  useState(() => {
    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="gallery-title">
            Галерея наших робіт
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="gallery-subtitle">
            Переглянути приклади наших виконаних проектів
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group cursor-pointer" 
              data-testid={`gallery-item-${index}`}
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={item.thumb} 
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  data-testid={`gallery-image-${index}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                    Переглянути
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-slate-800" data-testid={`gallery-item-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600" data-testid={`gallery-item-subtitle-${index}`}>
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" data-testid="lightbox-modal">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-slate-300 z-10"
            data-testid="lightbox-close"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 z-10"
            data-testid="lightbox-prev"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-slate-300 z-10"
            data-testid="lightbox-next"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          {/* Image */}
          <div className="max-w-7xl max-h-full flex items-center justify-center">
            <img
              src={galleryItems[currentImageIndex].image}
              alt={galleryItems[currentImageIndex].title}
              className="max-w-full max-h-full object-contain"
              data-testid={`lightbox-image-${currentImageIndex}`}
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
            <h3 className="text-xl font-semibold mb-1" data-testid="lightbox-title">
              {galleryItems[currentImageIndex].title}
            </h3>
            <p className="text-slate-300" data-testid="lightbox-subtitle">
              {galleryItems[currentImageIndex].subtitle}
            </p>
            <p className="text-slate-400 text-sm mt-2">
              {currentImageIndex + 1} з {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

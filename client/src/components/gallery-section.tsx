import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryProjects = [
  {
    id: 1,
    title: "Вікна у квартирі",
    subtitle: "Металопластикові вікна KBE",
    coverImage: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    images: [
      {
        url: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Головна кімната з новими вікнами"
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Кухонні вікна з енергозберігаючими склопакетами"
      },
      {
        url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Панорамні вікна у вітальні"
      }
    ]
  },
  {
    id: 2,
    title: "Застеклений балкон",
    subtitle: "Тепле остекління з обшивкою",
    coverImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Повністю застеклений балкон"
      },
      {
        url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Балконні двері з енергоефективним профілем"
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Внутрішня обшивка балкона"
      }
    ]
  },
  {
    id: 3,
    title: "Офісні вікна",
    subtitle: "Алюмінієві конструкції",
    coverImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    images: [
      {
        url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Офісний центр з новими вікнами"
      },
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Фасадне остекління комерційного об'єкта"
      }
    ]
  },
  {
    id: 4,
    title: "Приватний будинок",
    subtitle: "Комплексне остекління з ролетами",
    coverImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Фасад приватного будинку"
      },
      {
        url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Вікна з захисними ролетами"
      },
      {
        url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800",
        caption: "Процес встановлення"
      }
    ]
  }
];

export default function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (project: any) => {
    setCurrentProject(project);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
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
          {galleryProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="group cursor-pointer" 
              data-testid={`gallery-item-${index}`}
              onClick={() => openLightbox(project)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={project.coverImage} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  data-testid={`gallery-image-${index}`}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 text-black px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium flex items-center gap-1">
                    Переглянути ({project.images.length} фото)
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="font-semibold text-slate-800" data-testid={`gallery-item-title-${index}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600" data-testid={`gallery-item-subtitle-${index}`}>
                  {project.subtitle}
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
            {currentProject && (
              <img
                src={currentProject.images[currentImageIndex].url}
                alt={currentProject.images[currentImageIndex].caption}
                className="max-w-full max-h-full object-contain"
                data-testid={`lightbox-image-${currentImageIndex}`}
              />
            )}
          </div>

          {/* Image Info */}
          {currentProject && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white">
              <h3 className="text-xl font-semibold mb-1" data-testid="lightbox-title">
                {currentProject.title}
              </h3>
              <p className="text-slate-300 mb-2" data-testid="lightbox-subtitle">
                {currentProject.images[currentImageIndex].caption}
              </p>
              <p className="text-slate-400 text-sm">
                {currentImageIndex + 1} з {currentProject.images.length}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

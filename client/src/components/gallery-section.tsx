const galleryItems = [
  {
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Вікна у квартирі",
    subtitle: "Металопластикові вікна KBE"
  },
  {
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Панорамні вікна",
    subtitle: "Великі вікна у вітальні"
  },
  {
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Балконні двері",
    subtitle: "Енергоефективні балконні блоки"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Офісні вікна",
    subtitle: "Алюмінієві конструкції"
  },
  {
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Приватний будинок",
    subtitle: "Вікна з захисними ролетами"
  },
  {
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Кухонні вікна",
    subtitle: "Енергозберігаючі склопакети"
  },
  {
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Застеклений балкон",
    subtitle: "Тепле остекління з обшивкою"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    title: "Комерційний об'єкт",
    subtitle: "Фасадне остекління"
  }
];

export default function GallerySection() {
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
            <div key={index} className="group cursor-pointer" data-testid={`gallery-item-${index}`}>
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow"
                data-testid={`gallery-image-${index}`}
              />
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
    </section>
  );
}

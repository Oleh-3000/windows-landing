import { Square, DoorOpen, Home, Wrench, Sun, Shield } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: Square,
      title: "Металопластикові вікна",
      description: "Енергоефективні вікна з якісного профілю KBE, REHAU, WDS",
      features: [
        "3-х, 5-камерний профіль",
        "Енергозберігаючі склопакети",
        "Якісна фурнітура"
      ]
    },
    {
      icon: DoorOpen,
      title: "Балконні двері",
      description: "Надійні балконні блоки з підвищеною теплоізоляцією",
      features: [
        "Стандартні та нестандартні розміри",
        "Поворотно-відкидна фурнітура",
        "Додаткові замки безпеки"
      ]
    },
    {
      icon: Home,
      title: "Остекління балконів",
      description: "Повне остекління балконів з утепленням та обшивкою",
      features: [
        "Холодне та тепле остекління",
        "Внутрішня обшивка",
        "Утеплення підлоги"
      ]
    },
    {
      icon: Wrench,
      title: "Ремонт вікон",
      description: "Професійний ремонт та обслуговування вікон",
      features: [
        "Регулювання фурнітури",
        "Заміна скла та ущільнювачів",
        "Ремонт механізмів"
      ]
    },
    {
      icon: Sun,
      title: "Жалюзі та ролети",
      description: "Сонцезахисні системи різних типів",
      features: [
        "Горизонтальні жалюзі",
        "Вертикальні жалюзі",
        "Рулонні штори"
      ]
    },
    {
      icon: Shield,
      title: "Захисні ролети",
      description: "Надійний захист від зломщиків та погодних умов",
      features: [
        "Алюмінієві ролети",
        "Автоматичні системи",
        "Дистанційне керування"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="services-title">
            Наші послуги
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="services-subtitle">
            Повний спектр послуг з виготовлення та встановлення металопластикових конструкцій
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                data-testid={`service-card-${index}`}
              >
                <div className="text-primary text-4xl mb-4">
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3" data-testid={`service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4" data-testid={`service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="text-sm text-slate-600 space-y-1">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} data-testid={`service-feature-${index}-${featureIndex}`}>
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

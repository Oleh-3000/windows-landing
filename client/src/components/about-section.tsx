import { Award, Wrench, DollarSign, Clock } from "lucide-react";

export default function AboutSection() {
  const advantages = [
    {
      icon: Award,
      title: "Гарантія якості",
      description: "Надаємо 5-річну гарантію на всі види робіт та використовуємо тільки сертифіковані матеріали"
    },
    {
      icon: Wrench,
      title: "Професійний монтаж",
      description: "Наша команда досвідчених майстрів забезпечує якісну установку у найкоротші терміни"
    },
    {
      icon: DollarSign,
      title: "Доступні ціни",
      description: "Конкурентні ціни без прихованих доплат. Безкоштовний виїзд замірщика по місту"
    },
    {
      icon: Clock,
      title: "Швидке виконання",
      description: "Виготовлення вікон протягом 5-7 днів, встановлення за 1 день"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="about-title">
            Про нашу компанію
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto" data-testid="about-subtitle">
            Понад 15 років досвіду у встановленні якісних металопластикових вікон в Миколаєві
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Наша команда професіоналів" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="about-image"
            />
          </div>
          
          <div className="space-y-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div key={index} className="flex items-start space-x-4" data-testid={`advantage-${index}`}>
                  <div className="bg-primary text-white w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-2" data-testid={`advantage-title-${index}`}>
                      {advantage.title}
                    </h3>
                    <p className="text-slate-600" data-testid={`advantage-description-${index}`}>
                      {advantage.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

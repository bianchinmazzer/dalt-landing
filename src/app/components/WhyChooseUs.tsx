import {
  TrophyIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: TrophyIcon,
      title: "Experiencia Internacional",
      description: "Años de experiencia en importaciones desde China con resultados comprobados",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: ShieldCheckIcon,
      title: "Transparencia Total",
      description: "Seguimiento completo en cada etapa del proceso de importación",
      color: "bg-accent-100 text-accent-600",
    },
    {
      icon: UserGroupIcon,
      title: "Asesoramiento Personalizado",
      description: "Atención dedicada para entender tus necesidades específicas",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: GlobeAltIcon,
      title: "Red de Proveedores",
      description: "Conexiones directas con fabricantes y proveedores confiables",
      color: "bg-accent-100 text-accent-600",
    },
    {
      icon: CheckCircleIcon,
      title: "Servicio Integral",
      description: "Nos encargamos de todo: desde la compra hasta la entrega final",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Precios Competitivos",
      description: "Mejores precios del mercado gracias a nuestra relación directa con fabricantes",
      color: "bg-accent-100 text-accent-600",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="bg-gradient-to-b from-white to-primary-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Somos tu socio confiable en importaciones internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`${benefit.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

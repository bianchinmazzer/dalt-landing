import {
  CogIcon,
  GlobeAltIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: CogIcon,
      title: "Gestión completa del proceso",
      description:
        "Nos ocupamos de todo: proveedores, control de calidad, aduanas y entrega. Vos solo elegís el producto.",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: GlobeAltIcon,
      title: "Abiertos a cualquier rubro",
      description:
        "Mascotas, hogar, gastronomía, municipios y más. Si existe en el mercado, lo podemos importar para vos.",
      color: "bg-primary-100 text-primary-600",
    },
    {
      icon: CurrencyDollarIcon,
      title: "Precio directo del fabricante",
      description:
        "Sin intermediarios innecesarios. Acceso directo a precios de fábrica con calidad verificada en origen.",
      color: "bg-primary-100 text-primary-600",
    },
  ];

  return (
    <section id="por-que-elegirnos" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Tres razones concretas para trabajar con DALT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
              >
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-display font-bold text-primary-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

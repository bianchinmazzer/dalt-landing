import { ShoppingCartIcon, HandRaisedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ProcessSection() {
  const services = [
    {
      icon: ShoppingCartIcon,
      number: "01",
      title: "Productos que Importamos",
      description:
        "Seleccionamos productos de alta calidad desde China y los traemos directamente para nuestros clientes. Venta al por menor y mayor.",
      features: ["Stock disponible", "Envío inmediato", "Precios competitivos"],
      badge: "Para ti",
      color: "from-primary-500 to-primary-700",
    },
    {
      icon: HandRaisedIcon,
      number: "02",
      title: "Gestión de Importaciones",
      description:
        "Si tenés una empresa o negocio y querés importar tus propios productos, gestionamos todo el proceso de principio a fin.",
      features: ["Comisión transparente", "Seguimiento completo", "Asesoramiento profesional"],
      badge: "Para tu negocio",
      color: "from-accent-500 to-accent-700",
    },
  ];

  return (
    <section id="como-funciona" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dos formas de trabajar con nosotros según tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col"
            >
              {/* Number Badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                <span className="text-2xl font-display font-bold text-white">
                  {service.number}
                </span>
              </div>

              {/* Service Badge */}
              <div className="flex justify-end mb-4">
                <span className="bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold">
                  {service.badge}
                </span>
              </div>

              {/* Icon */}
              <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <ArrowRightIcon className="w-5 h-5 text-primary-600 mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={`#contacto?tipo=${service.badge === "Para ti" ? "para-ti" : "para-negocio"}`}
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.color} text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 group/btn`}
              >
                <span>Consultar</span>
                <ArrowRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

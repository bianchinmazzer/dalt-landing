import Link from "next/link";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const brands = [
  {
    id: 1,
    name: "Senye",
    description: "Productos varios para mascotas de alta calidad",
    logo: "/productos/logo-senye.jpg",
    catalogUrl: "/productos/senye.pdf",
  },
  {
    id: 2,
    name: "Lvxing",
    description: "Tachos de basura para reciclaje y uso doméstico",
    logo: "/productos/lvxing.png",
    catalogUrl: "/productos/lvxing.pdf",
  },
  {
    id: 3,
    name: "Baylor",
    description: "Camas y sillones para mascotas cómodos y duraderos",
    logo: "/productos/baylor.png",
    catalogUrl: "/productos/baylor.pdf",
  },
];

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Productos con los que trabajamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descargá los catálogos de las marcas que importamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group"
            >
              {/* Logo */}
              <div className="w-full aspect-square bg-gray-100 rounded-lg mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors overflow-hidden">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Brand Name */}
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-3 text-center">
                {brand.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center mb-6 leading-relaxed">
                {brand.description}
              </p>

              {/* Download Button */}
              <a
                href={brand.catalogUrl}
                download
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group/btn"
              >
                <ArrowDownTrayIcon className="w-5 h-5 group-hover/btn:animate-bounce" />
                <span>Descargar Catálogo</span>
              </a>
            </div>
          ))}
        </div>

        {/* CTA to Full Products Page */}
        <div className="text-center">
          <Link
            href="/productos"
            className="inline-flex items-center space-x-2 bg-accent-600 hover:bg-accent-700 text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Ver Todos los Productos</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

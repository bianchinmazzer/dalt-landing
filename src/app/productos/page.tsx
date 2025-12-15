import Link from "next/link";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

// Datos de marcas - Sistema actualizado
const brands = [
  {
    id: 1,
    name: "Senye",
    description: "Descripción completa de los productos que ofrece esta marca. Incluye características principales y tipos de productos disponibles en el catálogo.",
    logo: "/productos/logo-senye.jpg",
    catalogUrl: "/productos/senye.pdf",
  },
  {
    id: 2,
    name: "Lvxing",
    description: "Descripción completa de los productos que ofrece esta marca. Incluye características principales y tipos de productos disponibles en el catálogo.",
    logo: "/productos/lvxing.png",
    catalogUrl: "/productos/lvxing.pdf",
  },
  {
    id: 3,
    name: "Baylor",
    description: "Descripción completa de los productos que ofrece esta marca. Incluye características principales y tipos de productos disponibles en el catálogo.",
    logo: "/productos/baylor.png",
    catalogUrl: "/productos/baylor.pdf",
  },
];

export default function ProductosPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Descargá los catálogos de las marcas que importamos. Trabajamos con
            proveedores confiables para ofrecerte la mejor calidad al mejor precio.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="bg-white rounded-2xl p-8 border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group"
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
                <h3 className="text-2xl font-display font-bold text-primary-900 mb-4 text-center">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-accent-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-6">
            ¿No encontraste lo que buscás?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contáctanos y te ayudamos a importar cualquier producto que
            necesites. Trabajamos con múltiples proveedores en China.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>Contactar Ahora</span>
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
      </section>

      <Footer />
    </div>
  );
}

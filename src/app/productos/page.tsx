import type { Metadata } from "next";
import Link from "next/link";
import ProductCard from "../components/ProductCard";
import { brands } from "@/data/brands";

export const metadata: Metadata = {
  title: "Accesorios para Mascotas y Contenedores de Reciclaje Mayorista",
  description:
    "Conocé nuestras líneas de productos: accesorios premium para mascotas (camas, transportadoras, bebederos, correas) y contenedores de reciclaje (20L a 1100L). Venta mayorista y distribuidor en Argentina.",
  keywords: [
    "accesorios mascotas mayorista",
    "camas mascotas por mayor",
    "transportadoras mascotas mayorista",
    "bebederos automáticos mascotas",
    "contenedores reciclaje argentina",
    "cestos reciclaje municipal",
    "proveedor pet shop argentina",
    "accesorios mascotas importados",
  ],
  alternates: {
    canonical: "/productos",
  },
  openGraph: {
    title: "Accesorios para Mascotas y Contenedores de Reciclaje Mayorista | DALT Importaciones",
    description:
      "Líneas mayoristas de accesorios para mascotas y contenedores de reciclaje. Importación directa, stock permanente en Argentina.",
    url: "https://www.daltimportaciones.com.ar/productos",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Productos DALT Importaciones - Accesorios para Mascotas y Reciclaje",
      },
    ],
  },
};

export default function ProductosPage() {
  return (
    <div className="bg-white min-h-screen">


      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-900 mb-6">
            Nuestros Productos
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé las marcas que importamos. Trabajamos con proveedores
            confiables para ofrecerte la mejor calidad al mejor precio.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand) => (
              <ProductCard key={brand.id} brand={brand} />
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


    </div>
  );
}

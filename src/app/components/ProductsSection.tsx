import Link from "next/link";
import { brands } from "@/data/brands";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Productos con los que trabajamos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conocé las marcas que importamos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {brands.map((brand) => (
            <ProductCard key={brand.id} brand={brand} />
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

import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-primary-50 via-white to-primary-50 text-blue-900 flex flex-col items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center">
          <span className="text-gradient-blue">DALT</span> Importaciones
        </h1>

        <p className="text-xl md:text-2xl mb-4 max-w-2xl text-center text-gray-700 font-medium">
          Soluciones de Importación Profesionales
        </p>

        <p className="text-base md:text-lg mb-10 max-w-2xl text-center text-gray-600">
          Importamos productos y gestionamos tus compras internacionales con
          transparencia y eficiencia.
        </p>

        {/* CTA Button */}
        <a
          href="#contacto"
          className="group bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
        >
          <span>Contáctanos</span>
          <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

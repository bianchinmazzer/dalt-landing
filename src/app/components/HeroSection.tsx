import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-primary-50 via-white to-primary-50 text-blue-900 flex flex-col items-center justify-center pt-16 pb-20 px-4 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-center leading-tight">
          Importador directo de
          <br />
          <span className="text-primary-900">accesorios para mascotas</span>
        </h1>

        <p className="text-base md:text-lg mb-10 max-w-xl text-center text-gray-500 leading-relaxed">
          Gestionamos importaciones para distribuidoras, locales y empresas de cualquier rubro.
          Sin complicaciones, con acompañamiento de principio a fin.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="/mayoristas"
            className="group bg-primary-700 hover:bg-primary-800 text-white font-semibold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
          >
            <span>Quiero importar</span>
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contacto"
            className="text-primary-700 hover:text-primary-900 font-medium py-4 px-6 transition-colors duration-200 underline underline-offset-4"
          >
            Contactar
          </a>
        </div>
      </div>
    </section>
  );
}

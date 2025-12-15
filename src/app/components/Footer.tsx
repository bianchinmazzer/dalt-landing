import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-white border-t-4 border-accent-500">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/dalt-logo.jpg"
                alt="DALT Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <span className="text-2xl font-display font-bold">DALT</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-4">
              Soluciones profesionales de importación desde China. Transparencia y
              eficiencia en cada proyecto.
            </p>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white mb-1">+5 años en el mercado</p>
              <p>Importaciones confiables</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#inicio"
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/#por-que-elegirnos"
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  ¿Por qué elegirnos?
                </Link>
              </li>
              <li>
                <Link
                  href="/#como-funciona"
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Cómo funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contacto"
                  className="text-gray-300 hover:text-accent-400 transition-colors flex items-center group"
                >
                  <span className="mr-2 group-hover:translate-x-1 transition-transform">→</span>
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Email</p>
                  <a
                    href="mailto:dalt.importaciones@gmail.com"
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    dalt.importaciones@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <PhoneIcon className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/5492915726423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-accent-400 transition-colors"
                  >
                    +54 9 291 572 6423
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-accent-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Ubicación</p>
                  <p className="text-gray-300">Argentina</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Services */}
          <div>
            <h3 className="text-lg font-display font-bold mb-6">Servicios</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                Importación directa
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                Gestión de compras
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                Asesoramiento
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-400 rounded-full mr-3"></span>
                Logística integral
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} DALT Importaciones. Todos los derechos reservados.
            </p>
            <div className="mt-4 md:mt-0 flex items-center space-x-6">
              <Link
                href="/terminos-condiciones"
                className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
              >
                Términos y condiciones
              </Link>
              <Link
                href="/politica-privacidad"
                className="text-gray-400 hover:text-accent-400 transition-colors text-sm"
              >
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

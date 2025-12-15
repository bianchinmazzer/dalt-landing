import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TerminosCondicionesPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-8">
            Términos y Condiciones
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                1. Información General
              </h2>
              <p className="text-gray-700 mb-4">
                Bienvenido a DALT Importaciones. Al utilizar nuestros servicios, usted acepta estos términos y condiciones en su totalidad. Si no está de acuerdo con estos términos, no debe utilizar nuestros servicios.
              </p>
              <p className="text-gray-700 mb-4">
                DALT Importaciones es un servicio de importación de productos desde China, ofreciendo tanto venta directa de productos como gestión de importaciones para negocios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                2. Servicios Ofrecidos
              </h2>
              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                2.1 Venta de Productos
              </h3>
              <p className="text-gray-700 mb-4">
                Ofrecemos productos importados de marcas seleccionadas. Los productos están sujetos a disponibilidad de stock y pueden variar sin previo aviso.
              </p>

              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                2.2 Gestión de Importaciones
              </h3>
              <p className="text-gray-700 mb-4">
                Para negocios, gestionamos el proceso completo de importación desde China. Los términos específicos, comisiones y plazos se acuerdan individualmente con cada cliente comercial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                3. Precios y Pagos
              </h2>
              <p className="text-gray-700 mb-4">
                Todos los precios están expresados en pesos argentinos (ARS) salvo indicación contraria. Los precios pueden variar según el tipo de cambio, costos de importación y otros factores del mercado.
              </p>
              <p className="text-gray-700 mb-4">
                Las formas de pago aceptadas se acordarán directamente con cada cliente según el tipo de servicio contratado.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                4. Envíos y Entregas
              </h2>
              <p className="text-gray-700 mb-4">
                Realizamos envíos a todo el territorio argentino. Los plazos de entrega varían según:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Disponibilidad del producto en stock local</li>
                <li>Necesidad de importación directa</li>
                <li>Ubicación del destinatario</li>
                <li>Gestiones aduaneras y logísticas</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Los plazos estimados se informarán al momento de la cotización y pueden estar sujetos a variaciones por factores externos fuera de nuestro control.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                5. Garantías y Devoluciones
              </h2>
              <p className="text-gray-700 mb-4">
                Los productos cuentan con garantía según lo establecido por la Ley de Defensa del Consumidor (Ley 24.240) y normativas vigentes en Argentina.
              </p>
              <p className="text-gray-700 mb-4">
                En caso de productos defectuosos o que no correspondan con lo solicitado, el cliente tiene derecho a cambio o devolución según corresponda. Las condiciones específicas se evaluarán caso por caso.
              </p>
              <p className="text-gray-700 mb-4">
                Para solicitar una devolución o cambio, contactar a través de nuestros canales oficiales dentro de los 10 días corridos desde la recepción del producto.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                6. Responsabilidades
              </h2>
              <p className="text-gray-700 mb-4">
                DALT Importaciones se compromete a:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Brindar información veraz sobre productos y servicios</li>
                <li>Gestionar las importaciones de manera profesional y transparente</li>
                <li>Mantener la confidencialidad de la información del cliente</li>
                <li>Cumplir con la normativa aduanera y comercial vigente</li>
              </ul>
              <p className="text-gray-700 mb-4">
                El cliente se compromete a:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Proporcionar información veraz y completa</li>
                <li>Cumplir con los pagos acordados en tiempo y forma</li>
                <li>Recibir los productos en las condiciones acordadas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                7. Limitaciones de Responsabilidad
              </h2>
              <p className="text-gray-700 mb-4">
                DALT Importaciones no se hace responsable por:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Demoras en aduanas u organismos gubernamentales</li>
                <li>Cambios en regulaciones de importación</li>
                <li>Variaciones de precio por fluctuaciones cambiarias imprevistas</li>
                <li>Uso inadecuado de los productos por parte del cliente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                8. Propiedad Intelectual
              </h2>
              <p className="text-gray-700 mb-4">
                Todo el contenido de este sitio web, incluyendo textos, imágenes, logos y diseño, es propiedad de DALT Importaciones o sus licenciantes y está protegido por las leyes de propiedad intelectual argentinas.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                9. Modificaciones
              </h2>
              <p className="text-gray-700 mb-4">
                DALT Importaciones se reserva el derecho de modificar estos términos y condiciones en cualquier momento. Las modificaciones entrarán en vigencia desde su publicación en este sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                10. Jurisdicción y Ley Aplicable
              </h2>
              <p className="text-gray-700 mb-4">
                Estos términos y condiciones se rigen por las leyes de la República Argentina. Cualquier controversia derivada de estos términos será sometida a los tribunales competentes de Argentina.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                11. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Para consultas sobre estos términos y condiciones, puede contactarnos a través de:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Email: <a href="mailto:dalt.importaciones@gmail.com" className="text-primary-600 hover:text-primary-700">dalt.importaciones@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/5492915726423" className="text-primary-600 hover:text-primary-700">+54 9 291 572 6423</a></li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Nota importante:</strong> Este documento es una plantilla básica y debe ser revisado por un profesional legal para asegurar su adecuación a las leyes argentinas vigentes y a las necesidades específicas de su negocio.
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                <span>Volver al Inicio</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

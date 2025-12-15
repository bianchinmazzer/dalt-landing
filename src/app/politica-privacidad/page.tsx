import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <div className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                1. Introducción
              </h2>
              <p className="text-gray-700 mb-4">
                En DALT Importaciones respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta política de privacidad explica cómo recopilamos, usamos y protegemos su información personal de acuerdo con la Ley 25.326 de Protección de Datos Personales de Argentina.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                2. Información que Recopilamos
              </h2>
              <p className="text-gray-700 mb-4">
                Recopilamos la siguiente información personal cuando usted utiliza nuestros servicios:
              </p>

              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                2.1 Información de Contacto
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Dirección postal (para envíos)</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                2.2 Información Comercial
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Tipo de cliente (consumidor final o negocio)</li>
                <li>Productos de interés</li>
                <li>Historial de consultas y pedidos</li>
                <li>Preferencias de comunicación</li>
              </ul>

              <h3 className="text-xl font-semibold text-primary-800 mb-3">
                2.3 Información Técnica
              </h3>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Dirección IP</li>
                <li>Tipo de navegador</li>
                <li>Páginas visitadas en nuestro sitio web</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                3. Cómo Utilizamos su Información
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizamos su información personal para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Procesar sus consultas y solicitudes de cotización</li>
                <li>Gestionar sus pedidos y entregas</li>
                <li>Enviarle información sobre productos y servicios (solo con su consentimiento)</li>
                <li>Mejorar nuestros servicios y experiencia de usuario</li>
                <li>Cumplir con obligaciones legales y fiscales</li>
                <li>Comunicarnos con usted sobre su pedido o consulta</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                4. Base Legal para el Tratamiento
              </h2>
              <p className="text-gray-700 mb-4">
                Procesamos sus datos personales bajo las siguientes bases legales:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Consentimiento:</strong> Cuando usted nos proporciona voluntariamente su información</li>
                <li><strong>Ejecución de contrato:</strong> Para procesar sus pedidos y brindar nuestros servicios</li>
                <li><strong>Obligación legal:</strong> Para cumplir con requisitos legales y fiscales</li>
                <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios y comunicación comercial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                5. Compartir Información con Terceros
              </h2>
              <p className="text-gray-700 mb-4">
                DALT Importaciones NO vende ni alquila su información personal a terceros.
              </p>
              <p className="text-gray-700 mb-4">
                Podemos compartir su información únicamente con:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Proveedores de servicios:</strong> Empresas de logística y envío necesarias para entregar productos</li>
                <li><strong>Procesadores de pago:</strong> Para procesar transacciones de manera segura</li>
                <li><strong>Autoridades:</strong> Cuando sea requerido por ley o para cumplir con procesos legales</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Todos los terceros con quienes compartimos información están obligados a proteger sus datos según estándares similares a los nuestros.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                6. Seguridad de los Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Acceso no autorizado</li>
                <li>Pérdida o destrucción</li>
                <li>Uso indebido o alteración</li>
                <li>Divulgación no autorizada</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Sin embargo, ningún método de transmisión por internet es 100% seguro. Hacemos nuestro mejor esfuerzo para proteger sus datos, pero no podemos garantizar su seguridad absoluta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                7. Retención de Datos
              </h2>
              <p className="text-gray-700 mb-4">
                Conservamos su información personal solo durante el tiempo necesario para:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>Cumplir con los propósitos descritos en esta política</li>
                <li>Satisfacer requisitos legales, fiscales y contables</li>
                <li>Resolver disputas y hacer cumplir nuestros acuerdos</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Cuando ya no sea necesario conservar sus datos, los eliminaremos o anonimizaremos de manera segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                8. Sus Derechos
              </h2>
              <p className="text-gray-700 mb-4">
                De acuerdo con la Ley 25.326, usted tiene los siguientes derechos sobre sus datos personales:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Acceso:</strong> Solicitar información sobre los datos personales que tenemos sobre usted</li>
                <li><strong>Rectificación:</strong> Corregir datos inexactos o incompletos</li>
                <li><strong>Actualización:</strong> Actualizar sus datos personales</li>
                <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos (sujeto a obligaciones legales)</li>
                <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos para ciertos fines</li>
                <li><strong>Revocación del consentimiento:</strong> Retirar su consentimiento en cualquier momento</li>
              </ul>
              <p className="text-gray-700 mb-4">
                Para ejercer cualquiera de estos derechos, contáctenos a través de:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Email: <a href="mailto:dalt.importaciones@gmail.com" className="text-primary-600 hover:text-primary-700">dalt.importaciones@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/5492915726423" className="text-primary-600 hover:text-primary-700">+54 9 291 572 6423</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                9. Cookies y Tecnologías Similares
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio web puede utilizar cookies y tecnologías similares para mejorar su experiencia de navegación. Las cookies son pequeños archivos de texto almacenados en su dispositivo.
              </p>
              <p className="text-gray-700 mb-4">
                Puede configurar su navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                10. Enlaces a Otros Sitios
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestro sitio web puede contener enlaces a sitios de terceros. No somos responsables de las prácticas de privacidad de estos sitios. Le recomendamos leer sus políticas de privacidad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                11. Menores de Edad
              </h2>
              <p className="text-gray-700 mb-4">
                Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores sin el consentimiento de sus padres o tutores.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                12. Cambios a esta Política
              </h2>
              <p className="text-gray-700 mb-4">
                Podemos actualizar esta política de privacidad periódicamente. Le notificaremos sobre cambios significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de &ldquo;última actualización&rdquo;.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                13. Autoridad de Control
              </h2>
              <p className="text-gray-700 mb-4">
                La Agencia de Acceso a la Información Pública es la autoridad de control en materia de protección de datos personales en Argentina. Si considera que sus derechos han sido vulnerados, puede presentar una denuncia ante este organismo.
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Sitio web: <a href="https://www.argentina.gob.ar/aaip" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">www.argentina.gob.ar/aaip</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-4">
                14. Contacto
              </h2>
              <p className="text-gray-700 mb-4">
                Si tiene preguntas o inquietudes sobre esta política de privacidad o sobre cómo manejamos sus datos personales, puede contactarnos:
              </p>
              <ul className="list-none text-gray-700 space-y-2">
                <li>Email: <a href="mailto:dalt.importaciones@gmail.com" className="text-primary-600 hover:text-primary-700">dalt.importaciones@gmail.com</a></li>
                <li>WhatsApp: <a href="https://wa.me/5492915726423" className="text-primary-600 hover:text-primary-700">+54 9 291 572 6423</a></li>
              </ul>
            </section>

            <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm text-yellow-800">
                <strong>Nota importante:</strong> Esta política de privacidad es una plantilla básica y debe ser revisada por un profesional legal especializado en protección de datos para asegurar su cumplimiento total con la Ley 25.326 y normativas argentinas vigentes.
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

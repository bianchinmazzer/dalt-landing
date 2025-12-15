"use client";

import { useState, useEffect } from "react";
import {
  UserIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  MapPinIcon,
  UserGroupIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

export default function ContactForm() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    tipoCliente: "",
    marca: "",
    mensaje: ""
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState({
    nombre: false,
    email: false,
    tipoCliente: false,
    marca: false,
    mensaje: false
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo');

    if (tipo === 'para-ti' || tipo === 'para-negocio') {
      setForm(prev => ({ ...prev, tipoCliente: tipo }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tipoClienteText = form.tipoCliente
      ? form.tipoCliente === 'para-ti'
        ? 'Consumidor Final'
        : 'Negocio'
      : 'No especificado';

    const marcaText = form.marca || 'No especificada';

    window.location.href = `mailto:dalt.importaciones@gmail.com?subject=Consulta desde landing&body=Nombre: ${form.nombre}%0AEmail: ${form.email}%0ATipo de Cliente: ${tipoClienteText}%0AMarca de Interés: ${marcaText}%0A%0AMensaje: ${form.mensaje}`;

    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      id="contacto"
      className="bg-gradient-to-b from-white to-primary-50 py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-primary-900 mb-4">
            Contactanos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos para ayudarte con tus importaciones
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Nombre Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <UserIcon className="w-5 h-5" />
                </div>
                <input
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, nombre: true })}
                  onBlur={() => setFocused({ ...focused, nombre: false })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 outline-none ${
                    focused.nombre
                      ? "border-primary-500 ring-4 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <EnvelopeIcon className="w-5 h-5" />
                </div>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, email: true })}
                  onBlur={() => setFocused({ ...focused, email: false })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 outline-none ${
                    focused.email
                      ? "border-primary-500 ring-4 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Tu email"
                />
              </div>

              {/* Tipo de Cliente Dropdown */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <UserGroupIcon className="w-5 h-5" />
                </div>
                <select
                  name="tipoCliente"
                  value={form.tipoCliente}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, tipoCliente: true })}
                  onBlur={() => setFocused({ ...focused, tipoCliente: false })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 outline-none ${
                    focused.tipoCliente
                      ? "border-primary-500 ring-4 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <option value="">Tipo de cliente (opcional)</option>
                  <option value="para-ti">Para mí (consumidor final)</option>
                  <option value="para-negocio">Para mi negocio</option>
                </select>
              </div>

              {/* Marca Dropdown */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                  <TagIcon className="w-5 h-5" />
                </div>
                <select
                  name="marca"
                  value={form.marca}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, marca: true })}
                  onBlur={() => setFocused({ ...focused, marca: false })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg transition-all duration-300 outline-none ${
                    focused.marca
                      ? "border-primary-500 ring-4 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <option value="">Marca de interés (opcional)</option>
                  <option value="senye">Senye</option>
                  <option value="lvxing">Lvxing</option>
                  <option value="baylor">Baylor</option>
                </select>
              </div>

              {/* Mensaje Field */}
              <div className="relative">
                <div className="absolute left-4 top-6 text-gray-400">
                  <ChatBubbleLeftRightIcon className="w-5 h-5" />
                </div>
                <textarea
                  name="mensaje"
                  required
                  value={form.mensaje}
                  onChange={handleChange}
                  onFocus={() => setFocused({ ...focused, mensaje: true })}
                  onBlur={() => setFocused({ ...focused, mensaje: false })}
                  className={`w-full pl-12 pr-4 py-4 border-2 rounded-lg h-32 transition-all duration-300 outline-none resize-none ${
                    focused.mensaje
                      ? "border-primary-500 ring-4 ring-primary-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  placeholder="Tu mensaje"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-2 group"
              >
                <span>Enviar Mensaje</span>
                <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            {/* Success Message */}
            {sent && (
              <div className="mt-6 bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg animate-slide-up text-center font-semibold">
                ✓ ¡Gracias por tu mensaje! Te responderemos pronto.
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 p-4 rounded-full flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-900 mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:dalt.importaciones@gmail.com"
                    className="text-gray-600 hover:text-primary-600 transition-colors"
                  >
                    dalt.importaciones@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-4 rounded-full flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-900 mb-2">
                    WhatsApp
                  </h3>
                  <a
                    href="https://wa.me/5492915726423"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-green-600 transition-colors"
                  >
                    +54 9 291 572 6423
                  </a>
                  <p className="text-sm text-gray-500 mt-1">
                    Respuesta en menos de 24hs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-start space-x-4">
                <div className="bg-accent-100 p-4 rounded-full flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-accent-600" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-primary-900 mb-2">
                    Ubicación
                  </h3>
                  <p className="text-gray-600">
                    Argentina
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Envíos a todo el país
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

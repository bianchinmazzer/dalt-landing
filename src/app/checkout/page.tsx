'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/store/cart'
import PriceDisplay from '@/app/components/PriceDisplay'

const PROVINCIAS = [
  'Buenos Aires', 'CABA', 'Catamarca', 'Chaco', 'Chubut', 'Córdoba',
  'Corrientes', 'Entre Ríos', 'Formosa', 'Jujuy', 'La Pampa', 'La Rioja',
  'Mendoza', 'Misiones', 'Neuquén', 'Río Negro', 'Salta', 'San Juan',
  'San Luis', 'Santa Cruz', 'Santa Fe', 'Santiago del Estero',
  'Tierra del Fuego', 'Tucumán',
]

export default function CheckoutPage() {
  const router = useRouter()
  const { items } = useCart()
  const subtotal = items.reduce((sum, i) => sum + i.price_ars * i.quantity, 0)

  const [form, setForm] = useState({
    nombre: '',
    email: '',
    telefono: '',
    calle: '',
    numero: '',
    piso_dpto: '',
    ciudad: '',
    provincia: 'Buenos Aires',
    codigo_postal: '',
  })

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  useEffect(() => {
    if (items.length === 0) {
      router.replace('/carrito')
    }
  }, [items, router])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {}
    if (!form.nombre.trim()) newErrors.nombre = 'Requerido'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) newErrors.email = 'Email inválido'
    if (!form.telefono.trim()) newErrors.telefono = 'Requerido'
    if (!form.calle.trim()) newErrors.calle = 'Requerido'
    if (!form.numero.trim()) newErrors.numero = 'Requerido'
    if (!form.ciudad.trim()) newErrors.ciudad = 'Requerido'
    if (!form.codigo_postal.trim()) newErrors.codigo_postal = 'Requerido'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          customer: {
            nombre: form.nombre,
            email: form.email,
            telefono: form.telefono,
          },
          shipping_address: {
            calle: form.calle,
            numero: form.numero,
            piso_dpto: form.piso_dpto,
            ciudad: form.ciudad,
            provincia: form.provincia,
            codigo_postal: form.codigo_postal,
          },
          shipping_cost_ars: 0,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error ?? 'Ocurrió un error, intentá de nuevo.')
        return
      }

      window.location.href = data.init_point
    } catch {
      setError('Error de conexión, intentá de nuevo.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputClass = (name: string) =>
    `w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-400 transition ${
      errors[name] ? 'border-red-400' : 'border-gray-300'
    }`

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 pt-24 pb-8">
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-8">Finalizar compra</h1>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Formulario */}
            <div className="lg:col-span-2 space-y-6">
              {/* Datos personales */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-4">Datos de contacto</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre completo *</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} className={inputClass('nombre')} placeholder="Juan Pérez" />
                    {errors.nombre && <p className="text-red-500 text-xs mt-1">{errors.nombre}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} className={inputClass('email')} placeholder="juan@ejemplo.com" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono *</label>
                    <input name="telefono" value={form.telefono} onChange={handleChange} className={inputClass('telefono')} placeholder="2914123456" />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1">{errors.telefono}</p>}
                  </div>
                </div>
              </div>

              {/* Dirección de envío */}
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-gray-900 mb-4">Dirección de envío</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Calle *</label>
                    <input name="calle" value={form.calle} onChange={handleChange} className={inputClass('calle')} placeholder="Av. Colón" />
                    {errors.calle && <p className="text-red-500 text-xs mt-1">{errors.calle}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Número *</label>
                    <input name="numero" value={form.numero} onChange={handleChange} className={inputClass('numero')} placeholder="123" />
                    {errors.numero && <p className="text-red-500 text-xs mt-1">{errors.numero}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Piso / Dpto</label>
                    <input name="piso_dpto" value={form.piso_dpto} onChange={handleChange} className={inputClass('piso_dpto')} placeholder="2B (opcional)" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Ciudad *</label>
                    <input name="ciudad" value={form.ciudad} onChange={handleChange} className={inputClass('ciudad')} placeholder="Bahía Blanca" />
                    {errors.ciudad && <p className="text-red-500 text-xs mt-1">{errors.ciudad}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Código postal *</label>
                    <input name="codigo_postal" value={form.codigo_postal} onChange={handleChange} className={inputClass('codigo_postal')} placeholder="8000" maxLength={8} />
                    {errors.codigo_postal && <p className="text-red-500 text-xs mt-1">{errors.codigo_postal}</p>}
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Provincia</label>
                    <select name="provincia" value={form.provincia} onChange={handleChange} className={inputClass('provincia')}>
                      {PROVINCIAS.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Aviso envío */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 flex gap-3">
                <span className="text-2xl">🚚</span>
                <div>
                  <p className="text-sm font-semibold text-green-800">Envío por Andreani a todo el país</p>
                  <p className="text-sm text-green-700 mt-0.5">
                    El costo de envío se coordina por WhatsApp luego de realizada la compra. Te contactamos a la brevedad con el presupuesto según tu ubicación.
                  </p>
                </div>
              </div>
            </div>

            {/* Resumen */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
                <h2 className="font-semibold text-gray-900 text-lg mb-4">Tu pedido</h2>

                <div className="space-y-2 mb-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-600">
                      <span className="truncate mr-2">
                        {item.name} {item.variant_label ? `(${item.variant_label})` : ''} ×{item.quantity}
                      </span>
                      <PriceDisplay centavos={item.price_ars * item.quantity} className="flex-shrink-0" />
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3 space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Subtotal</span>
                    <PriceDisplay centavos={subtotal} />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Envío</span>
                    <span className="text-xs text-gray-400">Se coordina por WhatsApp</span>
                  </div>
                </div>

                <div className="border-t mt-3 pt-3">
                  <div className="flex justify-between font-bold text-gray-900 text-lg">
                    <span>Total</span>
                    <PriceDisplay centavos={subtotal} />
                  </div>
                </div>

                {error && (
                  <p className="mt-3 text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Procesando...' : 'Pagar con MercadoPago'}
                </button>

                <p className="text-xs text-gray-400 text-center mt-3">
                  Serás redirigido a MercadoPago de forma segura
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  )
}

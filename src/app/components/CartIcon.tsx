'use client'

import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useCart } from '@/store/cart'

export default function CartIcon() {
  const items = useCart((s) => s.items)
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0)


  return (
    <Link href="/carrito" className="relative flex items-center text-white hover:text-accent-400 transition-colors">
      <ShoppingCartIcon className="w-6 h-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  )
}

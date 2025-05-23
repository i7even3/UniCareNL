import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex w-60 bg-white border-r shadow-sm p-4 flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Startpagina</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">Over Ons</Link>
          <Link href="/demo" className="text-gray-700 hover:text-blue-600">Demo Aanvragen</Link>
          <Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacybeleid</Link>
          <Link href="/terms" className="text-gray-700 hover:text-blue-600">Algemene Voorwaarden</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contactinformatie</Link>
        </nav>
      </aside>

      {/* Mobile Toggle Button */}
      <div className="md:hidden absolute top-4 left-4 z-50">
        <button onClick={() => setOpen(!open)} className="p-2 bg-white rounded shadow">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <aside className="fixed top-0 left-0 w-64 h-full bg-white z-40 shadow-lg p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
          <nav className="flex flex-col gap-2 mt-4">
            <Link href="/" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Startpagina</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Over Ons</Link>
            <Link href="/demo" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Demo Aanvragen</Link>
            <Link href="/privacy" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Privacybeleid</Link>
            <Link href="/terms" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Algemene Voorwaarden</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="text-gray-700 hover:text-blue-600">Contactinformatie</Link>
          </nav>
        </aside>
      )}

      {/* Main content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}

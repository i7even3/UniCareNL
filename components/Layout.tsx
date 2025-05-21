import Link from 'next/link';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Zijbalk */}
      <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col gap-4">
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

      {/* Pagina inhoud */}
      <main className="flex-1 p-10">
        {children}
      </main>

      {/* Chatbox Footer (placeholder) */}
      <footer className="fixed bottom-0 right-0 m-4 p-4 bg-blue-100 rounded-2xl shadow-lg text-sm text-gray-800">
        <p className="font-medium">Virtuele webassistent (chatbox placeholder)</p>
        <p className="text-xs text-gray-600">Chatfunctie binnenkort beschikbaar...</p>
      </footer>
    </div>
  );
}

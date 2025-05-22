import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) root.classList.add('dark');
    else root.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-black'}` }>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="w-60 bg-white dark:bg-gray-800 border-r shadow p-4 flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">UniCareNL</h1>
          <nav className="flex flex-col space-y-2 mt-4">
            <Link href="/">Startpagina</Link>
            <Link href="/about">Over Ons</Link>
            <Link href="/demo">Demo Aanvragen</Link>
            <Link href="/privacy">Privacybeleid</Link>
            <Link href="/terms">Algemene Voorwaarden</Link>
            <Link href="/contact">Contactinformatie</Link>
            <Link href="/issues">Problemen & Oplossingen</Link>
          </nav>

          {/* Light/Dark Toggle */}
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="mt-auto flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            <span className="text-lg">{darkMode ? '🌙' : '🌞'}</span>
            <span>{darkMode ? 'Donkere modus' : 'Lichte modus'}</span>
          </button>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-10">
          <Component {...pageProps} />
        </main>
      </div>

      {/* Footer Chatbox Placeholder */}
      <footer className="fixed bottom-4 right-4 bg-blue-100 dark:bg-blue-900 rounded-2xl shadow p-4 text-sm dark:text-gray-100 text-gray-800">
        <p className="font-medium">Virtuele webassistent (chatbox placeholder)</p>
        <p className="text-xs">Chatfunctie binnenkort beschikbaar...</p>
      </footer>
    </div>
  );
}

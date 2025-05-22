import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Sun, Moon } from 'lucide-react';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-black'}>
      <div className="flex min-h-screen">
        {/* Zijbalk */}
        <aside className="w-60 bg-white dark:bg-gray-800 border-r shadow-sm p-4 flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">UniCareNL</h1>
          <nav className="flex flex-col gap-2 mt-4">
            <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Startpagina</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Over Ons</Link>
            <Link href="/demo" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Demo Aanvragen</Link>
            <Link href="/privacy" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Privacybeleid</Link>
            <Link href="/terms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Algemene Voorwaarden</Link>
            <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Contactinformatie</Link>
            <Link href="/issues" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Problemen & Oplossingen</Link>
          </nav>

          {/* Licht/donker toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-auto flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            {darkMode ? <Moon size={18} /> : <Sun size={18} />}
            {darkMode ? 'Donkere modus' : 'Lichte modus'}
          </button>
        </aside>

        {/* Hoofdinhoud */}
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
      </div>

      {/* Chatbox Footer */}
      <footer className="fixed bottom-0 right-0 m-4 p-4 bg-blue-100 dark:bg-blue-900 rounded-2xl shadow-lg text-sm text-gray-800 dark:text-gray-100">
        <p className="font-medium">Virtuele webassistent (chatbox placeholder)</p>
        <p className="text-xs">Chatfunctie binnenkort beschikbaar...</p>
      </footer>
    </div>
  );
}

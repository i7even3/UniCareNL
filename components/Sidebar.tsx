import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between p-4 border-b">
        <h2 className="text-lg font-bold">UniCareNL</h2>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      <nav className="flex flex-col space-y-4 p-4 text-gray-800">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          Over ons
        </Link>
        <Link href="/demo" className="hover:text-blue-600">
          Demo aanvragen
        </Link>
        <Link href="/privacy" className="hover:text-blue-600">
          Privacybeleid
        </Link>
        <Link href="/terms" className="hover:text-blue-600">
          Gebruiksvoorwaarden
        </Link>
        <Link href="/contact" className="hover:text-blue-600">
          Contact
        </Link>
      </nav>
    </div>
  );
}

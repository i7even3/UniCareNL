import Link from 'next/link';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  // Disable background scroll when sidebar is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-40 transition-opacity duration-300 ${
          isOpen ? 'block' : 'hidden'
        } md:hidden`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <aside
        className={`fixed z-50 top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close button (mobile only) */}
        <div className="flex items-center justify-between px-4 py-3 md:hidden">
          <h2 className="text-xl font-bold text-blue-800">UniCareNL</h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close sidebar">
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <nav className="mt-4 px-4 space-y-4">
          <Link href="/" className="block text-blue-700 hover:underline">
            Home
          </Link>
          <Link href="/demo" className="block text-blue-700 hover:underline">
            Demo Aanvragen
          </Link>
          <Link href="/problemen" className="block text-blue-700 hover:underline">
            Problemen
          </Link>
          <Link href="/about" className="block text-blue-700 hover:underline">
            Over ons
          </Link>
          <Link href="/contact" className="block text-blue-700 hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="block text-blue-700 hover:underline">
            Privacybeleid
          </Link>
        </nav>
      </aside>
    </>
  );
}

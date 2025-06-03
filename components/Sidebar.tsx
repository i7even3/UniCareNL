import React from 'react';
import Link from 'next/link';
import { Home, Info, Mail, Lock, HelpCircle } from 'lucide-react';

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-white shadow-md w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition duration-200 ease-in-out md:relative md:translate-x-0`}
    >
      <nav className="flex flex-col space-y-2">
        <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/demo" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <HelpCircle size={20} />
          <span>Demo Aanvragen</span>
        </Link>
        <Link href="/privacy" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <Lock size={20} />
          <span>Privacybeleid</span>
        </Link>
        <Link href="/contact" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <Mail size={20} />
          <span>Contact</span>
        </Link>
        <Link href="/about" className="flex items-center space-x-2 text-gray-700 hover:bg-gray-100 p-2 rounded">
          <Info size={20} />
          <span>Over</span>
        </Link>
      </nav>
    </aside>
  );
}

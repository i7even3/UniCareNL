import React from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <aside
      className={`bg-white w-64 h-screen shadow-md fixed top-0 left-0 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="p-4 font-bold text-xl">UniCareNL</div>
      <nav className="mt-4 space-y-2 px-4">
        <a href="/" className="block text-blue-600 hover:underline">Home</a>
        <a href="/about" className="block text-blue-600 hover:underline">About</a>
        <a href="/contact" className="block text-blue-600 hover:underline">Contact</a>
        <a href="/demo" className="block text-blue-600 hover:underline">Demo Aanvragen</a>
        <a href="/privacy" className="block text-blue-600 hover:underline">Privacy</a>
        <a href="/problemen" className="block text-blue-600 hover:underline">Problemen</a>
      </nav>
    </aside>
  );
}

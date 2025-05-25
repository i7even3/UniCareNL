import Link from 'next/link';
import { Dispatch, SetStateAction } from 'react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 bg-white shadow-md transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-200 ease-in-out z-50 md:static md:translate-x-0 md:shadow-none`}
    >
      <nav className="flex flex-col p-4 space-y-2">
        <Link href="/">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Home</a>
        </Link>
        <Link href="/about">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Over</a>
        </Link>
        <Link href="/problemen">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Problemen</a>
        </Link>
        <Link href="/demo">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Demo</a>
        </Link>
        <Link href="/contact">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Contact</a>
        </Link>
        <Link href="/privacy">
          <a className="text-blue-800 hover:underline" onClick={() => setIsOpen(false)}>Privacy</a>
        </Link>
      </nav>
    </div>
  );
}

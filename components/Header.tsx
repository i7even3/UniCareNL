import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface HeaderProps {
  setSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-blue-800 text-white flex items-center justify-between px-4 py-3 shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/logo.png" alt="UniCareNL Logo" width={40} height={40} />
        <span className="text-xl font-bold">UniCareNL</span>
      </div>
      <button
        onClick={() => setSidebarOpen((prev) => !prev)}
        className="md:hidden focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </header>
  );
}

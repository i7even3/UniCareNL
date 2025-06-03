import { Menu } from 'lucide-react';

interface HeaderProps {
  setSidebarOpen: (open: boolean) => void;
}

export default function Header({ setSidebarOpen }: HeaderProps) {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-gray-600 focus:outline-none md:hidden"
        >
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-semibold text-blue-800 ml-4">UniCareNL</h1>
      </div>
    </header>
  );
}

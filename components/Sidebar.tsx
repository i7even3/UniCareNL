import React from "react";
import Link from "next/link";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } md:block bg-white w-64 h-full border-r`}
    >
      <div className="p-4 text-xl font-bold text-blue-600">UniCareNL</div>
      <nav className="flex flex-col gap-2 p-4">
        <Link href="/">Home</Link>
        <Link href="/demo">Demo Aanvragen</Link>
        <Link href="/problemen">Problemen</Link>
        <Link href="/about">Over Ons</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacybeleid</Link>
      </nav>
    </div>
  );
};

export default Sidebar;

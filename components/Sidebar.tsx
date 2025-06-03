import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4 shadow">
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="text-gray-800 hover:text-blue-600">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">
            Over ons
          </Link>
        </li>
        <li>
          <Link href="/demo" className="text-gray-800 hover:text-blue-600">
            Demo
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

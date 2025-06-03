import { useEffect, useState } from 'react';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';

export default function App({ Component, pageProps }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 flex-1 min-h-screen bg-gray-50 p-6">
        <Component {...pageProps} />
        {isClient && <Footer />}
      </main>
    </div>
  );
}

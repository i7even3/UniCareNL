// pages/problemen.tsx
import Link from 'next/link';

export default function Problemen() {
  const problems = [
    { id: 1, text: '1 op de 4 patiënten spreekt geen Nederlands (ongeveer 2,5 miljoen per jaar)' },
    { id: 2, text: 'Taalbarrières leiden tot medische miscommunicatie' },
    { id: 3, text: 'Gebrek aan tolken vertraagt zorgprocessen' },
    { id: 4, text: 'Hoge werkdruk voor zorgpersoneel door extra uitleg' },
  ];

  const solutions = [
    { id: 1, text: 'AI-gestuurde realtime vertaling, direct op het scherm' },
    { id: 2, text: 'Voorgedefinieerde medische vragen en ticketgenerator in het Nederlands' },
    { id: 3, text: 'Privacyvriendelijk zonder tolken, sneller inzicht' },
    { id: 4, text: '3D-touch model om pijnlocaties eenvoudig aan te geven' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white dark:bg-gray-800 border-r shadow p-4 flex flex-col space-y-4">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">UniCareNL</h1>
        <nav className="flex flex-col space-y-2 mt-4">
          <Link href="/">Startpagina</Link>
          <Link href="/about">Over Ons</Link>
          <Link href="/demo">Demo Aanvragen</Link>
          <Link href="/privacy">Privacybeleid</Link>
          <Link href="/terms">Algemene Voorwaarden</Link>
          <Link href="/contact">Contactinformatie</Link>
          <Link href="/problemen" className="font-medium">Problemen & Oplossingen</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Problemen & Oplossingen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Problemen</h3>
            <ul className="list-decimal list-inside space-y-2">
              {problems.map(p => (
                <li key={p.id} className="text-gray-700">{p.text}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Oplossingen</h3>
            <ul className="list-disc list-inside space-y-2">
              {solutions.map(s => (
                <li key={s.id} className="text-gray-700">{s.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

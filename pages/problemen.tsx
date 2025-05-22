import Link from 'next/link';

export default function Problemen() {
  const problems = [
    { id: 1, text: '1 op de 5 patiënten in Nederland spreekt geen Nederlands' },
    { id: 2, text: 'Taalbarrières leiden tot gevaarlijke miscommunicatie in de zorg' },
    { id: 3, text: 'Wachttijden worden langer door gebrek aan tolken' },
    { id: 4, text: 'Zorgpersoneel ervaart extra werkdruk door communicatieproblemen' },
  ];

  const solutions = [
    { id: 1, text: 'Onze AI-vertaler werkt realtime zonder vertraging' },
    { id: 2, text: 'Automatische generatie van Nederlandstalige medische tickets' },
    { id: 3, text: 'Geen wachttijden meer voor tolken - directe vertaling' },
    { id: 4, text: 'Vermindering werkdruk door efficiëntere communicatie' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Zijbalk */}
      <aside className="w-60 bg-white dark:bg-gray-800 border-r shadow-sm p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-300">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Startpagina</Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Over Ons</Link>
          <Link href="/demo" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Demo Aanvragen</Link>
          <Link href="/privacy" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Privacybeleid</Link>
          <Link href="/terms" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Algemene Voorwaarden</Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600">Contactinformatie</Link>
          <Link href="/problemen" className="text-blue-600 dark:text-blue-400 font-medium">Problemen & Oplossingen</Link>
        </nav>
      </aside>

      {/* Hoofdinhoud */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">Problemen & Oplossingen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problemen */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Problemen</h3>
            <ul className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {problems.map((p) => (
                <li key={p.id}>{p.text}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Onderzoek toont aan dat ongeveer een derde van migranten taalproblemen noemt als belangrijke barrière in de zorg.
            </p>
          </div>

          {/* Oplossingen */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Onze Oplossingen</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {solutions.map((s) => (
                <li key={s.id}>{s.text}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              In Nederland heeft meer dan 25% van de bevolking een migratieachtergrond - onze oplossing reduceert de behoefte aan menselijke tolken.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import Link from 'next/link';

export default function Issues() {
  const problems = [
    { id: 1, text: '1 op de 4 patiënten spreekt geen Nederlands' },
    { id: 2, text: 'Taalbarrières leiden tot medische miscommunicatie' },
    { id: 3, text: 'Gebrek aan tolken vertraagt zorgprocessen' },
    { id: 4, text: 'Verhoogde werkdruk voor zorgpersoneel door extra uitleg' },
  ];

  const solutions = [
    { id: 1, text: 'AI-gestuurde realtime vertaling, direct op het scherm' },
    { id: 2, text: 'Voorgedefinieerde medische vragen en antwoordticket in het Nederlands' },
    { id: 3, text: 'Interactie zonder tolken — volledige privacy en snelheid' },
    { id: 4, text: '3D-touch-model om pijnlocatie snel aan te geven' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Startpagina</Link>
          <Link href="/issues" className="text-blue-600 font-medium">Problemen & Oplossingen</Link>
          {/* andere links... */}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Problemen & Oplossingen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problemen */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Problemen</h3>
            <ul className="list-decimal list-inside space-y-2">
              {problems.map((p) => (
                <li key={p.id} className="text-gray-700">{p.text}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              Ongeveer een derde van migranten noemt taalproblematiek als belangrijke barrière in de zorg :contentReference[oaicite:0]{index=0}. 
            </p>
          </div>

          {/* Oplossingen */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Oplossingen</h3>
            <ul className="list-disc list-inside space-y-2">
              {solutions.map((s) => (
                <li key={s.id} className="text-gray-700">{s.text}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              In Nederland heeft >26% van de bevolking een migratieachtergrond — onze AI-tool reduceert direct tolkenbehoefte :contentReference[oaicite:1]{index=1}.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

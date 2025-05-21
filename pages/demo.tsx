import Link from 'next/link';

export default function Demo() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Zijbalk */}
      <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Startpagina</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">Over Ons</Link>
          <Link href="/demo" className="text-gray-700 hover:text-blue-600">Demo Aanvragen</Link>
          <Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacybeleid</Link>
          <Link href="/terms" className="text-gray-700 hover:text-blue-600">Algemene Voorwaarden</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contactinformatie</Link>
        </nav>
      </aside>

      {/* Hoofdinhoud */}
      <main className="flex-1 p-10">
        <section className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Demo Aanvragen</h2>
          <p className="text-gray-700 text-lg mb-6">
            Vul onderstaand formulier in om toegang te krijgen tot een demo van UniCareNL. Binnen 1 werkdag nemen wij contact met je op.
          </p>
          <form className="bg-white shadow-md rounded-lg p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="naam">Naam</label>
              <input type="text" id="naam" className="w-full border rounded px-3 py-2" placeholder="Jouw naam" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">E-mailadres</label>
              <input type="email" id="email" className="w-full border rounded px-3 py-2" placeholder="voorbeeld@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="organisatie">Organisatie (optioneel)</label>
              <input type="text" id="organisatie" className="w-full border rounded px-3 py-2" placeholder="Naam van organisatie" />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Verstuur aanvraag
            </button>
          </form>
        </section>
      </main>

      {/* Chatbox Footer (placeholder) */}
      <footer className="fixed bottom-0 right-0 m-4 p-4 bg-blue-100 rounded-2xl shadow-lg text-sm text-gray-800">
        <p className="font-medium">Virtuele webassistent (chatbox placeholder)</p>
        <p className="text-xs text-gray-600">Chatfunctie binnenkort beschikbaar...</p>
      </footer>
    </div>
  );
}

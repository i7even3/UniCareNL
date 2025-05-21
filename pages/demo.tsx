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
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">Demo Aanvragen</h2>
          <p className="text-gray-600 text-lg mb-6">
            Vraag eenvoudig een demo aan van UniCareNL. Vul onderstaand formulier in en wij nemen zo snel mogelijk contact met u op.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Naam"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="E-mailadres"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Bericht of specifieke wensen"
              className="w-full p-2 border border-gray-300 rounded-md"
              rows={4}
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Verzenden
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

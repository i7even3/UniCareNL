import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="bg-blue-100 p-8 text-center rounded-lg shadow">
        <h1 className="text-4xl font-bold text-blue-900">Welkom bij UniCareNL</h1>
        <p className="mt-4 text-lg text-gray-700">
          Dé AI-vertalingstool voor medische professionals. Snel, veilig en accuraat.
        </p>
        <Link href="/demo">
          <a className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition">
            Probeer demo
          </a>
        </Link>
      </section>

      <section className="grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-blue-800">Razendsnel</h3>
          <p className="mt-2 text-gray-600">
            Onmiddellijke vertalingen tussen patiënt en zorgverlener.
          </p>
        </div>
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-blue-800">Medisch nauwkeurig</h3>
          <p className="mt-2 text-gray-600">
            Gebaseerd op terminologie en context in de zorgsector.
          </p>
        </div>
        <div className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl font-bold text-blue-800">Gebruiksvriendelijk</h3>
          <p className="mt-2 text-gray-600">
            Een simpele interface voor iedereen in het ziekenhuis.
          </p>
        </div>
      </section>

      <section className="bg-blue-50 py-16 text-center rounded-lg shadow">
        <h2 className="text-3xl font-semibold text-blue-900">Ervaar het verschil vandaag nog</h2>
        <p className="mt-2 text-gray-600">
          Verkort wachttijden, verbeter communicatie, en verminder fouten.
        </p>
        <Link href="/demo">
          <a className="mt-6 inline-block px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition">
            Vraag een demo aan
          </a>
        </Link>
      </section>
    </div>
  );
}

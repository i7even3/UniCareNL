import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>UniCareNL</title>
        <meta name="description" content="UniCareNL - Zorg voor iedereen" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white text-gray-900">
        <header className="flex items-center justify-between p-6 shadow-md">
          <h1 className="text-2xl font-bold">UniCareNL</h1>
          <nav className="space-x-4">
            <Link href="/about" className="text-blue-600 hover:underline">
              Over ons
            </Link>
            <Link href="/demo" className="text-blue-600 hover:underline">
              Demo aanvragen
            </Link>
            <Link href="/contact" className="text-blue-600 hover:underline">
              Contact
            </Link>
          </nav>
        </header>

        <section className="p-8">
          <h2 className="text-3xl font-semibold mb-4">Welkom bij UniCareNL</h2>
          <p className="mb-6">
            Wij streven naar toegankelijke en inclusieve zorg voor iedereen in Nederland.
          </p>
          <Link href="/demo" className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Vraag een demo aan
          </Link>
        </section>
      </main>
    </>
  );
}

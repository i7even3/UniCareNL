import Link from 'next/link';

export default function About() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-blue-600 font-medium">About</Link>
          <Link href="/demo" className="text-gray-700 hover:text-blue-600">Request Demo</Link>
          <Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
          <Link href="/terms" className="text-gray-700 hover:text-blue-600">Terms & Conditions</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Info</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <section className="max-w-3xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-4">About UniCareNL</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            UniCareNL is an innovative healthcare platform that bridges the gap in communication between providers and patients. 
            With AI-powered real-time translations, we eliminate language barriers and ensure that everyone receives the care and clarity they deserve.
            <br /><br />
            Our mission is to empower healthcare professionals and improve patient experiences through seamless, accessible, and accurate multilingual support.
          </p>
        </section>
      </main>

      {/* Chatbox Footer */}
      <footer className="fixed bottom-0 right-0 m-4 p-4 bg-blue-100 rounded-2xl shadow-lg text-sm text-gray-800">
        <p className="font-medium">Virtueel web assistant (chatbox placeholder)</p>
        <p className="text-xs text-gray-600">Chat feature coming soon...</p>
      </footer>
    </div>
  );
}

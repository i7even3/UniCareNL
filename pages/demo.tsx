import Link from 'next/link';

export default function Demo() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r shadow-sm p-4 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-blue-700">UniCareNL</h1>
        <nav className="flex flex-col gap-2 mt-4">
          <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/demo" className="text-blue-600 font-medium">Request Demo</Link>
          <Link href="/privacy" className="text-gray-700 hover:text-blue-600">Privacy</Link>
          <Link href="/terms" className="text-gray-700 hover:text-blue-600">Terms & Conditions</Link>
          <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact Info</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <section className="max-w-xl">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">Request a Demo</h2>
          <p className="text-gray-600 text-lg mb-6">
            Fill in your details below to request early access to our AI-powered healthcare translation tool.
          </p>
          <form className="space-y-4 bg-white p-6 rounded-xl shadow-lg">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-blue-300 focus:outline-none"
                placeholder="e.g. John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-blue-300 focus:outline-none"
                placeholder="e.g. john@example.com"
              />
            </div>
            <div>
              <label htmlFor="organization" className="block font-medium text-gray-700 mb-1">Organization</label>
              <input
                type="text"
                id="organization"
                className="w-full p-3 border rounded-md shadow-sm focus:ring-blue-300 focus:outline-none"
                placeholder="e.g. Amsterdam Medical Center"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md"
            >
              Submit Demo Request
            </button>
          </form>
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

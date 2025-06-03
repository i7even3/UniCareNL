export default function Contact() {
  return (
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900">Contact</h1>
      <form
        action="https://formsubmit.co/your-email@example.com"
        method="POST"
        className="space-y-4"
      >
        <input type="hidden" name="_captcha" value="false" />

        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Naam
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-medium text-gray-700">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Versturen
        </button>
      </form>
    </div>
  );
}

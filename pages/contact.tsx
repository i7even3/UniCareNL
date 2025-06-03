export default function Contact() {
  return (
    <div className="space-y-6 max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-900">Contact</h1>
      <form action="https://formsubmit.co/your-email@example.com" method="POST" className="space-y-4">
        <input type="hidden" name="_captcha" value="false" />
        <div>
          <label className="block mb-1 font-medium text-gray-700">Naam</label>
          <input type="text" name="name" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">E-mail</label>
          <input type="email" name="email" required className="w-full border rounded p-2" />
        </div>
        <div>
          <label className="block mb-1 font-medium text-gray-700">Bericht</label>
          <textarea name="message" rows={4} required className="w-full border rounded p-2" />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Verstuur
        </button>
      </form>
    </div>
  );
}
 

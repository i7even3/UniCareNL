export default function Demo() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-blue-800">Vraag een demo aan</h1>
      <p className="mt-4 text-lg max-w-2xl">
        Vul onderstaand formulier in om een gratis demo van UniCareNL aan te vragen. We nemen zo snel mogelijk contact met u op.
      </p>
      <form className="mt-6 grid grid-cols-1 gap-4 max-w-xl">
        <input type="text" placeholder="Naam" className="p-2 border rounded" required />
        <input type="email" placeholder="E-mailadres" className="p-2 border rounded" required />
        <textarea placeholder="Bericht (optioneel)" className="p-2 border rounded" rows={4} />
        <button type="submit" className="bg-blue-700 text-white p-2 rounded hover:bg-blue-800">
          Verstuur aanvraag
        </button>
      </form>
    </div>
  );
}

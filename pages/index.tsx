import Image from 'next/image';

export default function Home() {
  return (
    <section className="max-w-3xl mx-auto p-10">
      <h2 className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Welkom bij UniCareNL
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
        Wij verbeteren communicatie in de gezondheidszorg met realtime AI-vertalingen — elke interactie eenvoudig en toegankelijk maken. Via een reeks vooraf ingestelde vragen en antwoorden genereren wij automatisch een Nederlandstalig ticket dat aan de receptie kan worden getoond, zodat de patiënt direct de juiste zorg ontvangt.
      </p>
      <div className="flex justify-center mb-6">
        <Image
          src="/images.jpg"
          alt="AI vertaling voorbeeld"
          width={600}
          height={360}
          className="rounded-lg shadow-md"
        />
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-300 mb-2">
          3D Touch Human Model
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Ons interactieve 3D-model stelt patiënten in staat om aan te geven waar ze pijn ervaren. Door simpelweg het pijnlijke lichaamsdeel aan te raken, wordt de informatie digitaal verwerkt en kan zorgpersoneel snel en accuraat hulp bieden.
        </p>
      </div>
    </section>
  );
}

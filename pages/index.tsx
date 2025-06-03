import Head from 'next/head';
import Link from 'next/link';
import '@/styles/hero-section.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>UniCareNL - Home</title>
        <meta name="description" content="AI-gedreven vertaalsysteem voor zorginstellingen" />
      </Head>
      <div className="hero">
        <h1 className="hero-title">Welkom bij UniCareNL</h1>
        <p className="hero-description">
          Dé AI-vertalingstool voor zorginstellingen. Sneller, veiliger en begrijpelijker communiceren met anderstalige patiënten.
        </p>
        <div className="hero-buttons">
          <Link href="/demo">
            <button className="hero-button">Probeer Demo</button>
          </Link>
          <Link href="/problemen">
            <button className="hero-button">Bekijk Problemen</button>
          </Link>
        </div>
      </div>
    </>
  );
}

'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-background.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Elabzone
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-300">
            Siti Web Professionali per la Tua Attività
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            Specialisti nella creazione di siti web per B&B, case vacanze, ristoranti e portfolio. 
            Design moderno, facile da gestire e ottimizzato per i motori di ricerca.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Richiedi Preventivo
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors">
              Vedi Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

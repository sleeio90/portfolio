'use client';

import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Immagine */}
          <div className="relative h-[500px]">
            <Image
              src="/about-image.jpg"
              alt="Chi Sono"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Contenuto */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Chi Sono</h2>
            <p className="text-gray-600 mb-6">
              Mi specializzo nella creazione di siti web per attività ricettive, ristoranti e professionisti.
              Con anni di esperienza nel settore, so esattamente come realizzare un sito che attiri clienti
              e converta le visite in prenotazioni.
            </p>
            <p className="text-gray-600 mb-6">
              Il mio obiettivo è rendere il tuo business più visibile online con un sito web
              professionale, facile da gestire e ottimizzato per i motori di ricerca. Ogni progetto
              è personalizzato per soddisfare le esigenze specifiche della tua attività.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Siti web responsive e ottimizzati per mobile
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Integrazione con sistemi di prenotazione
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Ottimizzazione SEO per maggiore visibilità
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Assistenza tecnica continua
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

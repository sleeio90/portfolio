'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('tutti');

  const categories = [
    { id: 'tutti', name: 'Tutti' },
    { id: 'bnb', name: 'B&B' },
    { id: 'ristoranti', name: 'Ristoranti' },
    { id: 'portfolio', name: 'Portfolio' },
    { id: 'casevacanze', name: 'Case Vacanze' },
  ];

  const projects = [
    {
      title: 'B&B Vista Mare',
      category: 'bnb',
      image: '/images/portfolio/bnb1.jpg',
      description: 'Sito web per un B&B con vista mare, completo di sistema di prenotazione',
    },
    {
      title: 'Ristorante La Cucina',
      category: 'ristoranti',
      image: '/images/portfolio/restaurant1.jpg',
      description: 'Sito web per ristorante con menu digitale e prenotazione tavoli',
    },
    {
      title: 'Portfolio Fotografo',
      category: 'portfolio',
      image: '/images/portfolio/portfolio1.jpg',
      description: 'Portfolio professionale per un fotografo di eventi',
    },
    {
      title: 'Villa Toscana',
      category: 'casevacanze',
      image: '/images/portfolio/villa1.jpg',
      description: 'Sito web per casa vacanze in Toscana con tour virtuale',
    },
    {
      title: 'Trattoria del Porto',
      category: 'ristoranti',
      image: '/images/portfolio/restaurant2.jpg',
      description: 'Sito vetrina per trattoria tradizionale con delivery',
    },
    {
      title: 'Appartamenti Centro',
      category: 'casevacanze',
      image: '/images/portfolio/apartments1.jpg',
      description: 'Sito per complesso di appartamenti turistici nel centro città',
    },
  ];

  const filteredProjects =
    activeFilter === 'tutti'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Esplora alcuni dei miei lavori più recenti e scopri come posso aiutarti
            a realizzare i tuoi progetti.
          </p>
        </div>

        {/* Filtri */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-2 rounded-full ${
                  activeFilter === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                } transition-colors`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Griglia Portfolio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm">{project.description}</p>
                  <button className="mt-4 px-6 py-2 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors">
                    Vedi Dettagli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

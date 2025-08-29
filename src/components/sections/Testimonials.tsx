'use client';

import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Marco Rossi',
      role: 'Cliente Soddisfatto',
      image: '/images/testimonials/testimonial1.jpg',
      text: 'Ho avuto un\'esperienza eccezionale. Il lavoro è stato consegnato in tempo e con una qualità superiore alle aspettative.',
    },
    {
      name: 'Laura Bianchi',
      role: 'Cliente Affezionata',
      image: '/images/testimonials/testimonial2.jpg',
      text: 'Professionalità e creatività si fondono perfettamente. Consigliatissimo per chiunque cerchi un servizio di qualità.',
    },
    {
      name: 'Giuseppe Verdi',
      role: 'Cliente Business',
      image: '/images/testimonials/testimonial3.jpg',
      text: 'Un partner affidabile e competente. Ha saputo interpretare perfettamente le nostre esigenze aziendali.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Cosa Dicono i Clienti</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Le opinioni di chi ha già lavorato con me e ha apprezzato la qualità
            del mio lavoro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

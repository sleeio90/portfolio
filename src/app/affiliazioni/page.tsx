'use client';

export default function Affiliations() {
  const tiers = [
    {
      name: 'Base',
      commission: '10%',
      earnings: 'Fino a 50€',
      requirements: [
        'Promuovi Elabzone sui social',
        'Condividi il tuo link di affiliazione',
        'Minimo 1 cliente referenziato al mese'
      ],
      features: [
        'Link di affiliazione personalizzato',
        'Dashboard per tracciare le conversioni',
        'Materiali promozionali pronti all\'uso'
      ]
    },
    {
      name: 'Pro',
      commission: '15%',
      earnings: 'Fino a 100€',
      requirements: [
        'Almeno 3 clienti referenziati al mese',
        'Creazione di contenuti originali',
        'Presenza attiva sui social media'
      ],
      features: [
        'Tutto il piano Base',
        'Materiali promozionali personalizzabili',
        'Supporto prioritario',
        'Pagamenti anticipati'
      ]
    },
    {
      name: 'Expert',
      commission: '20%',
      earnings: '100€+',
      requirements: [
        '5+ clienti referenziati al mese',
        'Contenuti video dedicati',
        'Partnership esclusiva'
      ],
      features: [
        'Tutto il piano Pro',
        'Commissioni extra su clienti ricorrenti',
        'Co-marketing opportunities',
        'Formazione esclusiva',
        'Account manager dedicato'
      ]
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Registrati',
      description: 'Compila il form di registrazione per diventare un affiliato Elabzone'
    },
    {
      number: '02',
      title: 'Ricevi il Tuo Link',
      description: 'Ottieni il tuo link di affiliazione personalizzato'
    },
    {
      number: '03',
      title: 'Promuovi',
      description: 'Condividi il link sui tuoi canali social e con i tuoi contatti'
    },
    {
      number: '04',
      title: 'Guadagna',
      description: 'Ricevi commissioni per ogni cliente che si registra tramite il tuo link'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Programma di Affiliazione Elabzone
            </h1>
            <p className="text-xl mb-8">
              Guadagna promuovendo i nostri servizi di creazione siti web.
              Offriamo commissioni competitive e supporto completo per il tuo successo.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Diventa Affiliato
            </button>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Come Funziona</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Piani di Affiliazione */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Piani di Affiliazione</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tiers.map((tier) => (
              <div key={tier.name} className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold mb-4">{tier.name}</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {tier.commission}
                </div>
                <p className="text-gray-600 mb-6">Guadagni mensili: {tier.earnings}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Requisiti:</h4>
                  <ul className="space-y-2">
                    {tier.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Caratteristiche:</h4>
                  <ul className="space-y-2">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Domande Frequenti</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Come vengono pagate le commissioni?</h3>
              <p className="text-gray-600">
                Le commissioni vengono pagate mensilmente tramite bonifico bancario o PayPal,
                una volta raggiunta la soglia minima di 50€.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Quanto dura il cookie di tracciamento?</h3>
              <p className="text-gray-600">
                Il cookie di tracciamento ha una durata di 30 giorni. Se un utente clicca sul tuo
                link e completa l&aposacquisto entro questo periodo, riceverai la commissione.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Posso promuovere i servizi sui social media?</h3>
              <p className="text-gray-600">
                Sì, incoraggiamo la promozione sui social media. Ti forniremo materiali
                promozionali e linee guida per aiutarti a massimizzare le tue conversioni.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Inizia a Guadagnare con Elabzone
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Unisciti al nostro programma di affiliazione e inizia a guadagnare
            promuovendo servizi di qualità per la creazione di siti web.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Registrati Ora
          </button>
        </div>
      </section>
    </div>
  );
}

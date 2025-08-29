'use client';

import { useState } from 'react';

interface Resource {
  name: string;
  link: string;
  description: string;
  coupon: string;
  discount: string;
}

interface Resources {
  [key: string]: Resource[];
}

export default function Resources() {
  const [activeTab, setActiveTab] = useState<'hosting' | 'domini' | 'tools'>('hosting');

  const resources: Resources = {
    hosting: [
      {
        name: 'Hosting Economy',
        link: 'https://tuolink.com/hosting1',
        description: 'Piano hosting economico per siti personali e piccoli business',
        coupon: 'ELABZONE10',
        discount: '10% di sconto'
      },
      {
        name: 'Hosting Performance',
        link: 'https://tuolink.com/hosting2',
        description: 'Piano hosting ottimizzato per WordPress e eCommerce',
        coupon: 'ELABZONE20',
        discount: '20% di sconto sul primo anno'
      }
    ],
    domini: [
      {
        name: 'Registrazione Domini',
        link: 'https://tuolink.com/domini',
        description: 'Registra il tuo dominio con uno sconto',
        coupon: 'ELABZONE5',
        discount: '5€ di sconto'
      }
    ],
    tools: [
      {
        name: 'Theme Premium WordPress',
        link: 'https://tuolink.com/theme1',
        description: 'Theme professionale per siti business',
        coupon: 'ELABZONE15',
        discount: '15% di sconto'
      },
      {
        name: 'Plugin SEO',
        link: 'https://tuolink.com/seo',
        description: 'Plugin SEO premium per WordPress',
        coupon: 'ELABZONESEO',
        discount: '10% di sconto'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Risorse e Link Utili</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-4">
          <button
            onClick={() => setActiveTab('hosting')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'hosting'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Hosting
          </button>
          <button
            onClick={() => setActiveTab('domini')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'domini'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Domini
          </button>
          <button
            onClick={() => setActiveTab('tools')}
            className={`px-6 py-2 rounded-lg ${
              activeTab === 'tools'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
          >
            Tools
          </button>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources[activeTab].map((resource, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{resource.name}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium">Coupon: <span className="text-blue-600">{resource.coupon}</span></p>
                <p className="text-sm text-gray-600">{resource.discount}</p>
              </div>
              <div className="flex justify-between items-center">
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  Vai all&aposofferta →
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(resource.link);
                    alert('Link copiato negli appunti!');
                  }}
                  className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 text-sm"
                >
                  Copia Link
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Note informative */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Note per i Video</h2>
          <ul className="space-y-2 text-gray-600">
            <li>• Ricordati di menzionare sempre il codice sconto nei video</li>
            <li>• I link sono tracciati automaticamente</li>
            <li>• Le commissioni vengono aggiornate mensilmente</li>
            <li>• Controlla periodicamente questa pagina per nuove offerte</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

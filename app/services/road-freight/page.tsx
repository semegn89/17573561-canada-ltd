import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Road Freight Services | EU Pickup & Transport',
  description: 'European road freight and pickup services. Integrated with ocean and air freight for complete door-to-door solutions.',
}

export default function RoadFreight() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white" data-singularity="hero">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Road Freight</h1>
          <p className="text-xl text-primary-100">
            European pickup and road transport services. Integrated with ocean and air freight for complete door-to-door solutions.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Handle</h2>
              <ul className="space-y-3">
                {[
                  'EU pickup and collection services',
                  'Road transport to European ports',
                  'Full truckload (FTL) and less than truckload (LTL)',
                  'Palletized and loose cargo',
                  'Temperature-controlled transport',
                  'Express road freight',
                  'Cross-border EU transport',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">service_road.webp</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Road freight is essential for the first and last mile of your shipment:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Pickup from European suppliers and manufacturers</li>
              <li>Transport to European ports for ocean freight</li>
              <li>Transport to European airports for air freight</li>
              <li>Complete door-to-door solutions within Europe</li>
              <li>Flexible scheduling and multiple pickup points</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Scheduling', desc: 'We coordinate pickup date and time with supplier' },
                { step: '2', title: 'Pickup', desc: 'Cargo collected from origin location' },
                { step: '3', title: 'Transport', desc: 'Road transport to port, airport, or warehouse' },
                { step: '4', title: 'Handover', desc: 'Cargo transferred to ocean/air freight or delivered' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary-600">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Which European countries do you cover?',
                  a: 'We provide pickup services across major European countries. Coverage areas depend on specific routes and partner network. Contact us to confirm coverage for your location.',
                },
                {
                  q: 'How is road freight integrated with ocean/air?',
                  a: 'Road freight is typically the first leg of your shipment. We collect cargo from your European supplier and transport it to the port or airport, where it connects with ocean or air freight to Canada.',
                },
                {
                  q: 'What types of vehicles do you use?',
                  a: 'We work with a network of carriers offering various vehicle types including standard trucks, refrigerated vehicles, and specialized equipment based on cargo requirements.',
                },
                {
                  q: 'Can you handle multiple pickup points?',
                  a: 'Yes, we can coordinate multiple pickups and consolidate cargo before transport to port or airport, optimizing costs and schedules.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need EU Pickup?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for your road freight and pickup services
          </p>
          <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50" data-hover="button">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}


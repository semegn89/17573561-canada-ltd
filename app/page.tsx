import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Europe → Canada Freight for Businesses
              </h1>
              <p className="text-xl mb-8 text-primary-100">
                Professional door-to-door freight and logistics services connecting European suppliers with Canadian markets. 
                Reliable ocean, air, and road freight solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 text-center">
                  Request a Quote
                </Link>
                <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10 text-center">
                  Talk to an Expert
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">hero_home.webp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { step: '1', title: 'Request', desc: 'Submit your quote request' },
              { step: '2', title: 'Booking', desc: 'We confirm and book' },
              { step: '3', title: 'Pickup', desc: 'EU pickup arranged' },
              { step: '4', title: 'Transit', desc: 'Cargo in transit' },
              { step: '5', title: 'Import', desc: 'Canadian customs' },
              { step: '6', title: 'Delivery', desc: 'Final delivery' },
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
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Ocean Freight',
                desc: 'FCL and LCL container shipping from European ports to Canada. Cost-effective for large volumes.',
                link: '/services/ocean-freight',
                image: 'service_ocean.webp',
              },
              {
                title: 'Air Freight',
                desc: 'Fast and reliable air cargo services for time-sensitive shipments. Express delivery options available.',
                link: '/services/air-freight',
                image: 'service_air.webp',
              },
              {
                title: 'Customs Support',
                desc: 'Expert customs clearance coordination. We work with licensed partners to ensure smooth import processes.',
                link: '/services/customs-support',
                image: 'service_customs.webp',
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">{service.image}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <span className="text-primary-600 font-semibold">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Real-time shipment tracking and visibility',
              'Comprehensive documentation and compliance support',
              'Established partner network across Europe and Canada',
              'Transparent pricing with no hidden fees',
              'Dedicated account management for B2B clients',
              'Flexible solutions: FCL, LCL, and mixed cargo',
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade Lane Highlight */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Europe → Canada Trade Lane</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our specialized route connecting European suppliers with Canadian markets. 
                We handle the entire logistics chain from pickup to final delivery.
              </p>
              <Link href="/europe-to-canada" className="btn-primary">
                Explore Europe→Canada
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                <span className="text-gray-400">hero_lane.webp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What are typical transit times from Europe to Canada?',
                a: 'Ocean freight typically takes 15-25 days depending on the port pair. Air freight can be 3-7 days. Exact times depend on origin, destination, and service level selected.',
              },
              {
                q: 'What documents are required for shipping?',
                a: 'Common documents include commercial invoice, packing list, bill of lading, certificate of origin, and any required permits. We provide a complete checklist upon booking.',
              },
              {
                q: 'Do you handle both FCL and LCL shipments?',
                a: 'Yes, we offer both Full Container Load (FCL) and Less than Container Load (LCL) options. We can help you choose the most cost-effective solution for your cargo volume.',
              },
              {
                q: 'How do you handle customs clearance?',
                a: 'We coordinate customs clearance through our network of licensed customs brokers in Canada. We ensure all documentation is prepared correctly and submitted on time.',
              },
              {
                q: 'Is cargo insurance available?',
                a: 'Yes, we can arrange cargo insurance for your shipments. We recommend discussing coverage options during the quote process.',
              },
              {
                q: 'What payment terms do you offer?',
                a: 'We offer flexible payment terms for B2B clients. Payment options and terms are discussed during the booking process.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="border-b border-gray-200 pb-6" data-faq-item>
                <h3 className="text-lg font-semibold mb-2" data-faq-trigger style={{ cursor: 'pointer' }}>{faq.q}</h3>
                <div data-faq-content style={{ overflow: 'hidden', height: 0 }}>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for your Europe to Canada shipment today
          </p>
          <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}


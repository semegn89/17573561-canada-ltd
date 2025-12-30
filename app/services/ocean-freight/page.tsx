import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ocean Freight Services | FCL & LCL Container Shipping',
  description: 'Professional ocean freight services from Europe to Canada. FCL and LCL container shipping solutions.',
}

export default function OceanFreight() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white" data-singularity="hero">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Ocean Freight</h1>
          <p className="text-xl text-primary-100">
            Cost-effective container shipping from European ports to Canada. FCL and LCL solutions for businesses of all sizes.
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
                  'Full Container Load (FCL) shipments',
                  'Less than Container Load (LCL) consolidation',
                  'Dry containers (20ft, 40ft, 40ft HC)',
                  'Refrigerated containers (reefer)',
                  'Open-top and flat-rack containers',
                  'Breakbulk and project cargo',
                  'Hazardous materials (with proper documentation)',
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
                <span className="text-gray-400">service_ocean.webp</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Ocean freight is ideal when you need to balance cost and transit time. Perfect for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Large volume shipments (multiple pallets or full containers)</li>
              <li>Non-urgent deliveries (15-25 day transit times)</li>
              <li>Cost-sensitive shipments where air freight would be too expensive</li>
              <li>Heavy or oversized cargo that fits container specifications</li>
              <li>Regular scheduled shipments with predictable volumes</li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Booking', desc: 'We confirm space and provide booking confirmation' },
                { step: '2', title: 'Pickup', desc: 'EU pickup arranged and cargo delivered to port' },
                { step: '3', title: 'Transit', desc: 'Container loaded and shipped via ocean carrier' },
                { step: '4', title: 'Delivery', desc: 'Customs cleared and delivered to final destination' },
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
                  q: 'What is the difference between FCL and LCL?',
                  a: 'FCL (Full Container Load) means you book an entire container. LCL (Less than Container Load) means your cargo shares a container with other shipments. FCL is faster and more secure, while LCL is more cost-effective for smaller volumes.',
                },
                {
                  q: 'What container sizes are available?',
                  a: 'We offer standard 20ft, 40ft, and 40ft High Cube containers. Specialized containers (reefer, open-top, flat-rack) are available based on cargo requirements.',
                },
                {
                  q: 'How long does ocean freight take?',
                  a: 'Typical transit times range from 15-25 days depending on the port pair. Factors include origin port, destination port, vessel schedule, and weather conditions.',
                },
                {
                  q: 'Can you handle temperature-controlled cargo?',
                  a: 'Yes, we offer refrigerated (reefer) container services for temperature-sensitive cargo. Temperature monitoring and control are available throughout transit.',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for your ocean freight shipment
          </p>
          <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50" data-hover="button" data-hover="button">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}


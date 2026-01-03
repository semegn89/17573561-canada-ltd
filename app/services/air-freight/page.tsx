'use client'

import TransitionLink from '@/components/TransitionLink'
import Reveal from '@/components/motion/Reveal'
import { motion } from 'framer-motion'

export default function AirFreight() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Air Freight</h1>
          <p className="text-xl text-primary-100">
            Fast and reliable air cargo services for time-sensitive shipments. Express delivery options available.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Handle</h2>
              <ul className="space-y-3">
                {[
                  'Express air freight (next flight out)',
                  'Standard air freight (consolidated)',
                  'Perishable goods and temperature-controlled cargo',
                  'High-value shipments',
                  'Urgent documents and samples',
                  'Pharmaceuticals and medical supplies',
                  'Electronics and sensitive equipment',
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
                <span className="text-gray-400">service_air.webp</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Air freight is the best choice when speed is critical:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Time-sensitive shipments requiring fast delivery (3-7 days)</li>
              <li>High-value goods where security and speed are priorities</li>
              <li>Perishable products requiring temperature control</li>
              <li>Small to medium-sized shipments where air cost is acceptable</li>
              <li>Urgent replacement parts or production-critical materials</li>
            </ul>
          </Reveal>

          <Reveal className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Booking', desc: 'We secure space on the next available flight' },
                { step: '2', title: 'Pickup', desc: 'EU pickup arranged and cargo delivered to airport' },
                { step: '3', title: 'Transit', desc: 'Cargo flown to Canadian destination airport' },
                { step: '4', title: 'Delivery', desc: 'Customs cleared and express delivery arranged' },
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
          </Reveal>

          <Reveal className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'How fast is air freight compared to ocean?',
                  a: 'Air freight typically takes 3-7 days door-to-door, compared to 15-25 days for ocean freight. Express options can be even faster.',
                },
                {
                  q: 'What is the maximum weight/size for air freight?',
                  a: 'Air freight can handle shipments from small parcels to large pallets. Maximum dimensions and weights depend on aircraft capacity and routing. We can advise on specific requirements.',
                },
                {
                  q: 'Can you handle temperature-controlled air freight?',
                  a: 'Yes, we offer temperature-controlled air freight services for perishable goods, pharmaceuticals, and other temperature-sensitive cargo.',
                },
                {
                  q: 'Is air freight more expensive than ocean?',
                  a: 'Yes, air freight is typically more expensive per kilogram than ocean freight, but it offers significant time savings. For urgent shipments, the cost may be justified by business needs.',
                },
              ].map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-4">
                  <h3 className="font-semibold mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Fast Shipping?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for your air freight shipment
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <TransitionLink href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Request a Quote
            </TransitionLink>
          </motion.div>
        </div>
      </Reveal>
    </>
  )
}

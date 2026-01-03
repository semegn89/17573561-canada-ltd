'use client'

import TransitionLink from '@/components/TransitionLink'
import Reveal from '@/components/motion/Reveal'
import SmartImage from '@/components/SmartImage'
import { motion } from 'framer-motion'

export default function CustomsSupport() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Customs Support</h1>
          <p className="text-xl text-primary-100">
            Expert customs clearance coordination through our network of licensed partners. 
            We ensure smooth import processes and compliance with Canadian regulations.
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
                  'Customs declaration preparation and submission',
                  'Duty and tax calculation and payment coordination',
                  'CBSA (Canada Border Services Agency) coordination',
                  'Document verification and compliance checks',
                  'Release coordination and delivery scheduling',
                  'Tariff classification assistance',
                  'Import permit and license coordination',
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
              <SmartImage
                src="/images/service_customs.webp"
                alt="Customs support services"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Customs support is essential for all imports to Canada:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>First-time importers who need guidance through the process</li>
              <li>Complex shipments requiring specialized documentation</li>
              <li>Regulated goods (food, pharmaceuticals, chemicals, etc.)</li>
              <li>High-value shipments where accuracy is critical</li>
              <li>Businesses wanting to outsource customs complexity</li>
            </ul>
          </Reveal>

          <Reveal className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Documentation', desc: 'We review and prepare all required customs documents' },
                { step: '2', title: 'Submission', desc: 'Customs declaration submitted to CBSA through licensed broker' },
                { step: '3', title: 'Clearance', desc: 'We coordinate with CBSA to resolve any issues and obtain release' },
                { step: '4', title: 'Delivery', desc: 'Once cleared, cargo is released for final delivery' },
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

          <Reveal className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-16">
            <p className="text-gray-700">
              <strong>Note:</strong> Customs clearance is coordinated through our network of licensed customs brokers 
              and partners to ensure professional handling of all import requirements and compliance with Canadian regulations.
            </p>
          </Reveal>

          <Reveal className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Do you handle customs clearance directly?',
                  a: 'We coordinate customs clearance through our network of licensed customs brokers. This ensures professional handling and compliance with all Canadian import regulations.',
                },
                {
                  q: 'What documents are needed for customs clearance?',
                  a: 'Common documents include commercial invoice, packing list, bill of lading, certificate of origin, and any required permits or licenses. We provide a complete checklist based on your specific shipment.',
                },
                {
                  q: 'How long does customs clearance take?',
                  a: 'Most shipments clear within 1-3 business days if all documentation is correct. Complex shipments or those requiring additional permits may take longer. We keep you informed throughout the process.',
                },
                {
                  q: 'Who pays duties and taxes?',
                  a: 'Duties and taxes are typically paid by the importer. We calculate estimated costs upfront and coordinate payment through our customs partners. Payment terms can be discussed during booking.',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Customs Support?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to discuss your customs clearance needs
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

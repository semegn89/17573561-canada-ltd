'use client'

import TransitionLink from '@/components/TransitionLink'
import Reveal from '@/components/motion/Reveal'
import SmartImage from '@/components/SmartImage'
import { motion } from 'framer-motion'

export default function CargoInsurance() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Cargo Insurance</h1>
          <p className="text-xl text-primary-100">
            Comprehensive cargo insurance options to protect your shipments throughout the transit process.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Coverage Options</h2>
              <ul className="space-y-3">
                {[
                  'All-risk coverage for comprehensive protection',
                  'Named perils coverage for specific risks',
                  'FCL and LCL shipment coverage',
                  'Door-to-door insurance protection',
                  'High-value cargo specialized coverage',
                  'Temperature-controlled cargo insurance',
                  'Flexible coverage limits and deductibles',
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
                src="/images/service_insurance.webp"
                alt="Cargo insurance services"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Cargo insurance is recommended for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>High-value shipments requiring protection</li>
              <li>International shipments with multiple transit points</li>
              <li>Fragile or sensitive cargo</li>
              <li>Businesses wanting comprehensive risk mitigation</li>
              <li>Shipments where loss or damage would have significant impact</li>
            </ul>
          </Reveal>

          <Reveal className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-16">
            <p className="text-gray-700">
              <strong>Note:</strong> Cargo insurance is arranged through our network of insurance partners. 
              Coverage terms, limits, and premiums are discussed during the quote process based on your specific cargo and transit requirements.
            </p>
          </Reveal>

          <Reveal className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Is cargo insurance mandatory?',
                  a: 'Cargo insurance is not mandatory, but it is highly recommended to protect your shipment against loss, damage, or theft during transit.',
                },
                {
                  q: 'What does all-risk coverage include?',
                  a: 'All-risk coverage typically protects against all physical loss or damage except for excluded perils such as war, nuclear risks, and inherent vice. Specific exclusions are outlined in the policy.',
                },
                {
                  q: 'How is the insured value determined?',
                  a: 'The insured value is typically based on the commercial invoice value plus shipping costs and insurance premium. We can help determine the appropriate coverage amount.',
                },
                {
                  q: 'What is the claims process?',
                  a: 'In case of loss or damage, you should notify us immediately. We coordinate with the insurance provider to initiate the claims process. Documentation and evidence are important for claim resolution.',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Cargo Insurance?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for cargo insurance coverage
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


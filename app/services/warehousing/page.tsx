'use client'

import TransitionLink from '@/components/TransitionLink'
import Reveal from '@/components/motion/Reveal'
import SmartImage from '@/components/SmartImage'
import { motion } from 'framer-motion'

export default function Warehousing() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Warehousing</h1>
          <p className="text-xl text-primary-100">
            Storage and distribution services in key locations. Cross-docking and consolidation available.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <Reveal className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <ul className="space-y-3">
                {[
                  'Secure storage facilities in strategic locations',
                  'Cross-docking services for faster turnaround',
                  'Consolidation and deconsolidation',
                  'Inventory management and tracking',
                  'Pick and pack services',
                  'Distribution and fulfillment',
                  'Flexible storage terms',
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
                src="/images/service_warehousing.webp"
                alt="Warehousing services"
                fill
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Best For</h2>
            <p className="text-gray-700 mb-4">
              Warehousing services are ideal for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Businesses needing temporary storage during transit</li>
              <li>Consolidation of multiple shipments before final delivery</li>
              <li>Inventory management for regular shipments</li>
              <li>Cross-docking to reduce storage time and costs</li>
              <li>Distribution hubs for multi-destination deliveries</li>
            </ul>
          </Reveal>

          <Reveal className="bg-white border-2 border-gray-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: 'Where are your warehouses located?',
                  a: 'We work with partner warehouses in key logistics hubs. Specific locations depend on your routing and requirements. Contact us for details on available locations.',
                },
                {
                  q: 'What is cross-docking?',
                  a: 'Cross-docking is a logistics practice where incoming goods are transferred directly to outbound transportation with minimal or no storage time, reducing handling costs and transit times.',
                },
                {
                  q: 'Can you handle temperature-controlled storage?',
                  a: 'Yes, we can arrange temperature-controlled warehousing for perishable goods and other temperature-sensitive cargo.',
                },
                {
                  q: 'What are typical storage fees?',
                  a: 'Storage fees vary based on volume, duration, and specific requirements. We provide detailed pricing during the quote process.',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Warehousing Services?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to discuss your storage and distribution needs
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


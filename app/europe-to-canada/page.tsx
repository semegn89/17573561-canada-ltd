'use client'

import TransitionLink from '@/components/TransitionLink'
import Reveal from '@/components/motion/Reveal'
import { motion } from 'framer-motion'

export default function EuropeToCanada() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white" data-singularity="hero">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Europe to Canada: Door-to-Door Freight</h1>
          <p className="text-xl mb-8 text-primary-100">
            Complete logistics solutions connecting European suppliers with Canadian markets. 
            From pickup to delivery, we manage your entire shipment.
          </p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
            <TransitionLink href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Request a Quote
            </TransitionLink>
          </motion.div>
        </div>
      </section>

      <Reveal className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Lane Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Transport Modes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Ocean Freight</li>
                <li>• Air Freight</li>
                <li>• Road Freight (EU pickup)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Shipment Types</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• FCL (Full Container Load)</li>
                <li>• LCL (Less than Container Load)</li>
                <li>• Mixed cargo</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Coverage</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• EU pickup service</li>
                <li>• Canadian delivery</li>
                <li>• Door-to-door</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-bold text-lg mb-3">Incoterms Support</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• EXW, FOB, CIF</li>
                <li>• DDP, DAP</li>
                <li>• Custom arrangements</li>
              </ul>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Service Overview</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">End-to-End Logistics</h3>
              <p className="text-gray-700 mb-4">
                Our door-to-door service handles everything from initial pickup in Europe to final delivery in Canada. 
                We coordinate with local partners for pickup, manage ocean or air transport, handle customs clearance, 
                and arrange final delivery to your destination.
              </p>
              <p className="text-gray-700">
                This comprehensive approach reduces complexity for you and ensures seamless coordination across 
                the entire supply chain.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Customs Coordination</h3>
              <p className="text-gray-700 mb-4">
                We work with licensed customs brokers in Canada to handle all import procedures. 
                Our team ensures documentation is prepared correctly and submitted on time, minimizing delays.
              </p>
              <p className="text-gray-700">
                We can assist with various documentation requirements including commercial invoices, 
                certificates of origin, and any special permits or licenses needed for your cargo.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Typical Process</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-600">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Quote & Booking</h3>
                <p className="text-gray-700">
                  Submit your shipment details for a quote. Once confirmed, we book the transport and coordinate 
                  pickup arrangements with our European partners.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-600">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">EU Pickup</h3>
                <p className="text-gray-700">
                  Our partners collect your cargo from the origin location and transport it to the departure port or airport.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-600">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Transport</h3>
                <p className="text-gray-700">
                  Cargo travels by ocean or air to Canada. You receive tracking updates throughout the journey.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-600">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Customs Clearance</h3>
                <p className="text-gray-700">
                  Upon arrival, our customs partners handle clearance procedures. We ensure all documentation is in order.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold text-primary-600">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Final Delivery</h3>
                <p className="text-gray-700">
                  Once cleared, cargo is delivered to your specified destination in Canada. We coordinate the final 
                  leg of the journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Ship?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get a quote for your Europe to Canada shipment
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

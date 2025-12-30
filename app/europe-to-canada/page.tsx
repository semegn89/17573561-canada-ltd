import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Europe to Canada Freight | Door-to-Door Shipping',
  description: 'Professional door-to-door freight services from Europe to Canada. Ocean and air freight solutions with customs support.',
}

export default function EuropeToCanada() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white" data-singularity="hero">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Europe to Canada: Door-to-Door Freight</h1>
          <p className="text-xl mb-8 text-primary-100">
            Complete logistics solutions connecting European suppliers with Canadian markets. 
            From pickup to delivery, we manage your entire shipment.
          </p>
          <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Request a Quote
          </Link>
        </div>
      </section>

      {/* Lane Capabilities */}
      <section className="section-padding bg-white" data-animate="reveal">
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
      </section>

      {/* Transit Times */}
      <section className="section-padding bg-gray-50" data-animate="reveal">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Typical Transit Times</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Ocean Freight</h3>
              <p className="text-gray-700 mb-4">
                Typical ranges: <strong>15-25 days</strong> depending on port pairs and service level.
              </p>
              <p className="text-sm text-gray-600">
                Factors affecting transit time include origin port, destination port, 
                vessel schedule, and weather conditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4">Air Freight</h3>
              <p className="text-gray-700 mb-4">
                Typical ranges: <strong>3-7 days</strong> depending on service level and routing.
              </p>
              <p className="text-sm text-gray-600">
                Express options available for urgent shipments. 
                Includes pickup, air transport, customs clearance, and delivery.
              </p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 mt-6">
            <em>Note: Transit times are estimates and may vary based on specific circumstances. 
            Exact schedules are confirmed at booking.</em>
          </p>
        </div>
      </section>

      {/* Required Documents */}
      <section className="section-padding bg-white" data-animate="reveal">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Required Documents</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <ul className="space-y-4">
                {[
                  'Commercial Invoice (original and copies)',
                  'Packing List (detailed itemization)',
                  'Bill of Lading (B/L) or Air Waybill',
                  'Certificate of Origin (if applicable)',
                  'Export/Import permits (if required for specific goods)',
                  'Insurance certificate (if arranged)',
                  'Customs declaration forms',
                  'Any product-specific certificates or licenses',
                ].map((doc, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-5 h-5 text-primary-600 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  We provide a complete document checklist upon booking confirmation. 
                  Our team ensures all documentation is prepared correctly and submitted on time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customs & Compliance */}
      <section className="section-padding bg-gray-50" data-animate="reveal">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Customs & Compliance</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 mb-6">
                We coordinate customs clearance through our network of licensed customs brokers and partners. 
                Our team ensures compliance with Canadian import regulations and handles all necessary documentation.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What We Handle:</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Customs declaration preparation and submission</li>
                    <li>Duty and tax calculation</li>
                    <li>Coordination with CBSA (Canada Border Services Agency)</li>
                    <li>Document verification and compliance checks</li>
                    <li>Release coordination and delivery scheduling</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> Customs clearance is coordinated through our licensed partner network 
                    to ensure professional handling of all import requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form CTA */}
      <section className="section-padding bg-primary-600 text-white" data-animate="reveal">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Quote</h2>
          <p className="text-xl mb-8 text-primary-100">
            Ready to ship from Europe to Canada? Fill out our quote form and we&apos;ll get back to you within 24 hours.
          </p>
          <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50" data-hover="button">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}


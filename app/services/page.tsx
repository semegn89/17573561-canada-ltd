import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Freight Services | Ocean, Air, Road & Customs',
  description: 'Comprehensive freight and logistics services: ocean freight, air freight, road freight, and customs support.',
}

const services = [
  {
    title: 'Ocean Freight',
    description: 'FCL and LCL container shipping services from European ports to Canada. Cost-effective solutions for large volume shipments.',
    link: '/services/ocean-freight',
    icon: '🚢',
  },
  {
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for time-sensitive shipments. Express delivery options available.',
    link: '/services/air-freight',
    icon: '✈️',
  },
  {
    title: 'Road Freight',
    description: 'European pickup and road transport services. Integrated with ocean and air freight for complete door-to-door solutions.',
    link: '/services/road-freight',
    icon: '🚛',
  },
  {
    title: 'Customs Support',
    description: 'Expert customs clearance coordination through licensed partners. We ensure smooth import processes and compliance.',
    link: '/services/customs-support',
    icon: '📋',
  },
  {
    title: 'Warehousing',
    description: 'Storage and distribution services in key locations. Cross-docking and consolidation available.',
    link: '/services/warehousing',
    icon: '🏭',
  },
  {
    title: 'Cargo Insurance',
    description: 'Comprehensive cargo insurance options to protect your shipments throughout the transit process.',
    link: '/services/cargo-insurance',
    icon: '🛡️',
  },
]

export default function Services() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive freight and logistics solutions tailored to your business needs. 
            From ocean and air freight to customs support, we handle every step of your supply chain.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary-600 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <span className="text-primary-600 font-semibold">Learn more →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link href="/request-a-quote" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  )
}



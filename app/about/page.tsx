import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | 17573561 Canada Ltd',
  description: 'Learn about 17573561 Canada Ltd - professional freight and logistics services from Europe to Canada.',
}

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom section-padding">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-100">
            Professional freight and logistics services connecting European suppliers with Canadian markets.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-4">
                We provide reliable, transparent, and cost-effective freight solutions for businesses shipping 
                from Europe to Canada. Our goal is to simplify international logistics so you can focus on your core business.
              </p>
              <p className="text-gray-700 mb-4">
                We understand that every shipment is important, and we treat your cargo with the care and attention 
                it deserves. From initial quote to final delivery, we keep you informed every step of the way.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden bg-gray-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-400">about_team.webp</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Reliability',
                  desc: 'We deliver on our promises and maintain consistent service quality.',
                },
                {
                  title: 'Transparency',
                  desc: 'Clear communication, no hidden fees, and honest timelines.',
                },
                {
                  title: 'Expertise',
                  desc: 'Deep knowledge of Europe-Canada trade routes and regulations.',
                },
                {
                  title: 'Partnership',
                  desc: 'We work with you as a partner, not just a service provider.',
                },
              ].map((value, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-700">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Operating Model</h2>
            <div className="bg-white border-2 border-gray-200 rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                We operate through a combination of our own team and an established network of trusted partners 
                across Europe and Canada. This model allows us to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                <li>Provide comprehensive coverage across major European and Canadian locations</li>
                <li>Offer competitive pricing through established relationships</li>
                <li>Maintain high service standards through carefully selected partners</li>
                <li>Scale quickly to meet your growing needs</li>
              </ul>
              <p className="text-gray-700">
                Our team coordinates all aspects of your shipment, ensuring seamless handoffs between partners 
                and maintaining visibility throughout the entire logistics chain.
              </p>
            </div>
          </div>

          <div className="bg-primary-50 border-l-4 border-primary-600 p-6 rounded">
            <h3 className="font-bold text-lg mb-2">Legal Information</h3>
            <p className="text-gray-700">
              <strong>17573561 Canada Ltd</strong> is incorporated under the Canada Business Corporations Act (CBCA). 
              Incorporation date: December 25, 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us to discuss your freight needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Contact Us
            </Link>
            <Link href="/request-a-quote" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}



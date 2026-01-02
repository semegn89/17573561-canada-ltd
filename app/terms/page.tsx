import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions | 17573561 Canada Ltd',
  description: 'Terms and conditions for 17573561 Canada Ltd.',
}

export default function Terms() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website of 17573561 Canada Ltd, you accept and agree to be 
              bound by the terms and provision of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p>
              17573561 Canada Ltd provides freight and logistics services from Europe to Canada. 
              Services include ocean freight, air freight, road freight, and customs support.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Quotes and Bookings</h2>
            <p>
              All quotes are estimates and subject to change based on final cargo details, market 
              conditions, and other factors. Bookings are confirmed upon written acceptance and 
              payment of required deposits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Liability</h2>
            <p>
              Our liability is limited in accordance with applicable international conventions and 
              Canadian law. We recommend that clients obtain appropriate cargo insurance for their shipments.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
            <p>
              Payment terms are agreed upon at the time of booking. Late payments may result in 
              additional charges or suspension of services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Force Majeure</h2>
            <p>
              We are not liable for delays or failures in performance resulting from circumstances 
              beyond our reasonable control, including but not limited to natural disasters, war, 
              strikes, or government actions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Governing Law</h2>
            <p>
              These terms are governed by the laws of Canada and the province in which 17573561 Canada Ltd 
              operates. Any disputes shall be subject to the exclusive jurisdiction of Canadian courts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p>
              For questions about these terms, please contact us at:{' '}
              <a href="mailto:info@17573561canada.ca" className="text-primary-600 hover:underline">
                info@17573561canada.ca
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}



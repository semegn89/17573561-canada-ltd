import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | 17573561 Canada Ltd',
  description: 'Privacy policy for 17573561 Canada Ltd.',
}

export default function PrivacyPolicy() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <div className="prose max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              17573561 Canada Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Personal information (name, email, phone, company name)</li>
              <li>Shipping and logistics information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide and improve our freight and logistics services</li>
              <li>Process quote requests and bookings</li>
              <li>Communicate with you about your shipments</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Information Sharing</h2>
            <p>
              We may share your information with trusted partners who assist us in operating our business 
              and providing services to you, such as carriers, customs brokers, and service providers. 
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:{' '}
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


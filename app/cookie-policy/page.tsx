import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy | 17573561 Canada Ltd',
  description: 'Cookie policy for 17573561 Canada Ltd.',
}

export default function CookiePolicy() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        <div className="prose max-w-none space-y-6 text-gray-700">
          <p className="text-sm text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section>
            <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function properly. They enable core 
                  functionality such as security, network management, and accessibility.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously. We use Google Analytics for this purpose.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Preference Cookies</h3>
                <p>
                  These cookies remember your choices (such as language preferences) to provide a more 
                  personalized experience.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Managing Cookies</h2>
            <p>
              You can control and manage cookies through your browser settings. Most browsers allow you 
              to refuse or accept cookies, and to delete cookies that have already been set.
            </p>
            <p className="mt-4">
              You can also manage your cookie preferences using our cookie consent banner when you first 
              visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
            <p>
              Some cookies are placed by third-party services that appear on our pages. We use Google 
              Analytics to analyze website traffic. These third parties may use cookies to collect 
              information about your online activities across different websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at:{' '}
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


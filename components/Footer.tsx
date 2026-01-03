'use client'

import TransitionLink from './TransitionLink'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-bold mb-4">17573561 Canada Ltd</h3>
            <p className="text-sm mb-4">
              Professional freight and logistics services from Europe to Canada.
            </p>
            <p className="text-xs text-gray-500">
              Incorporated under CBCA as 17573561 Canada Ltd
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <TransitionLink href="/services" className="hover:text-white transition-colors">
                  Services
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/europe-to-canada" className="hover:text-white transition-colors">
                  Europe→Canada
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/about" className="hover:text-white transition-colors">
                  About Us
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/contact" className="hover:text-white transition-colors">
                  Contact
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/request-a-quote" className="hover:text-white transition-colors">
                  Request a Quote
                </TransitionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <TransitionLink href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </TransitionLink>
              </li>
              <li>
                <TransitionLink href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </TransitionLink>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              For inquiries and quotes, please use our contact form or request a quote form.
            </p>
            <TransitionLink href="/contact" className="text-sm text-primary-400 hover:text-primary-300 transition-colors">
              Get in Touch →
            </TransitionLink>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} 17573561 Canada Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

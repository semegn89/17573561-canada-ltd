import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">17573561 Canada Ltd</h3>
            <p className="text-sm mb-4">
              Professional freight and logistics services from Europe to Canada.
            </p>
            <p className="text-xs text-gray-500">
              Incorporated under CBCA as 17573561 Canada Ltd
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/europe-to-canada" className="hover:text-white transition-colors">
                  Europe→Canada
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/request-a-quote" className="hover:text-white transition-colors">
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/ocean-freight" className="hover:text-white transition-colors">
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link href="/services/air-freight" className="hover:text-white transition-colors">
                  Air Freight
                </Link>
              </li>
              <li>
                <Link href="/services/road-freight" className="hover:text-white transition-colors">
                  Road Freight
                </Link>
              </li>
              <li>
                <Link href="/services/customs-support" className="hover:text-white transition-colors">
                  Customs Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} 17573561 Canada Ltd. All rights reserved.</p>
          <p className="mt-2">Incorporated under CBCA (Canada Business Corporations Act)</p>
        </div>
      </div>
    </footer>
  )
}


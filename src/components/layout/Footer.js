import Link from "next/link"
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-sky-400">3xGrowth</span>
              <span className="text-2xl font-bold text-white ml-1">Consulting</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              We transform B2B marketing with strategic clarity, accountability, and measurable growth. Building
              marketing engines that deliver predictable sales outcomes.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <FiMail className="h-5 w-5 mr-3 text-sky-400" />
                <span>info@3xgrowthconsulting.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiPhone className="h-5 w-5 mr-3 text-sky-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <FiMapPin className="h-5 w-5 mr-3 text-sky-400" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-sky-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/resources/blogs" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources/faqs" className="text-gray-300 hover:text-sky-400 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/resources/case-studies" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2025 3xGrowth Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

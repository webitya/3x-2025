import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi"

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Contact Details */}
      <div className="bg-sky-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <FiMail className="h-6 w-6 text-sky-600 mr-4" />
            <div>
              <p className="font-medium text-black">Email</p>
              <p className="text-gray-600">info@3xgrowthconsulting.com</p>
            </div>
          </div>

          <div className="flex items-center">
            <FiPhone className="h-6 w-6 text-sky-600 mr-4" />
            <div>
              <p className="font-medium text-black">Phone</p>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center">
            <FiMapPin className="h-6 w-6 text-sky-600 mr-4" />
            <div>
              <p className="font-medium text-black">Location</p>
              <p className="text-gray-600">New York, NY</p>
            </div>
          </div>

          <div className="flex items-center">
            <FiClock className="h-6 w-6 text-sky-600 mr-4" />
            <div>
              <p className="font-medium text-black">Business Hours</p>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM EST</p>
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-black mb-4">What to Expect</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <FiCheckCircle className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Response within 24 hours</span>
          </li>
          <li className="flex items-start">
            <FiCheckCircle className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Free 30-minute strategy consultation</span>
          </li>
          <li className="flex items-start">
            <FiCheckCircle className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">Custom marketing plan overview</span>
          </li>
          <li className="flex items-start">
            <FiCheckCircle className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-600">No obligation or pressure</span>
          </li>
        </ul>
      </div>

      {/* Quick Stats */}
      <div className="bg-gray-900 text-white p-8 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Why Choose 3xGrowth?</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-1">3x</div>
            <div className="text-sm text-gray-300">Average Growth</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-1">100%</div>
            <div className="text-sm text-gray-300">Transparency</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-1">0</div>
            <div className="text-sm text-gray-300">Risk Planning</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-sky-400 mb-1">24hr</div>
            <div className="text-sm text-gray-300">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"
import { FiMail, FiPhone, FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {/* Contact Details */}
      <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-5 rounded-xl shadow-sm border border-sky-100">
        <h2 className="text-xl font-bold text-sky-900 mb-4">Get in Touch</h2>
        <div className="space-y-3 text-sm">
          {[
            { icon: <FiMail className="h-5 w-5 text-sky-600" />, label: "Email", value: "info@3xgrowthconsulting.com" },
            { icon: <FiPhone className="h-5 w-5 text-sky-600" />, label: "Phone", value: "+1 (555) 123-4567" },
            { icon: <FiMapPin className="h-5 w-5 text-sky-600" />, label: "Location", value: "New York, NY" },
            { icon: <FiClock className="h-5 w-5 text-sky-600" />, label: "Hours", value: "Mon-Fri: 9AM - 6PM EST" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              {item.icon}
              <div>
                <p className="font-medium text-sky-900">{item.label}</p>
                <p className="text-gray-600">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What to Expect */}
      <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
        <h3 className="text-lg font-bold text-sky-900 mb-3">What to Expect</h3>
        <ul className="space-y-2 text-sm">
          {[
            "Response within 24 hours",
            "Free 30-min consultation",
            "Custom marketing plan",
            "No obligation",
          ].map((text, idx) => (
            <li key={idx} className="flex items-start">
              <FiCheckCircle className="h-4 w-4 text-sky-600 mr-2 mt-0.5" />
              <span className="text-gray-700">{text}</span>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}

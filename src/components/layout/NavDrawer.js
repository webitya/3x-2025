"use client"
import { useState } from "react"
import Link from "next/link"
import { FiX, FiChevronDown } from "react-icons/fi"

export default function NavDrawer({ isOpen, onClose }) {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300" onClick={onClose} />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div className="flex items-center">
            <span className="text-xl font-bold text-sky-600">3xGrowth</span>
            <span className="text-xl font-bold text-black ml-1">Consulting</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors">
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <div className="flex flex-col space-y-6">
            <Link
              href="/"
              className="text-lg text-black hover:text-sky-600 font-medium transition-colors py-2"
              onClick={onClose}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-lg text-black hover:text-sky-600 font-medium transition-colors py-2"
              onClick={onClose}
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="text-lg text-black hover:text-sky-600 font-medium transition-colors py-2"
              onClick={onClose}
            >
              Services
            </Link>

            {/* Resources Dropdown */}
            <div className="py-2">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-lg text-black hover:text-sky-600 font-medium transition-colors"
              >
                Resources
                <FiChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${isResourcesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Resources Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isResourcesOpen ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-3">
                  <Link
                    href="/resources/blogs"
                    className="block text-gray-600 hover:text-sky-600 transition-colors py-1"
                    onClick={onClose}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/resources/faqs"
                    className="block text-gray-600 hover:text-sky-600 transition-colors py-1"
                    onClick={onClose}
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/resources/case-studies"
                    className="block text-gray-600 hover:text-sky-600 transition-colors py-1"
                    onClick={onClose}
                  >
                    Case Studies
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-sky-600 text-white px-6 py-3 rounded-md hover:bg-sky-700 font-medium text-center transition-colors mt-4"
              onClick={onClose}
            >
              Contact Us
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

"use client"
import { useState } from "react"
import Link from "next/link"
import { FiMenu, FiChevronDown } from "react-icons/fi"
import NavDrawer from "./NavDrawer"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-sky-600">3xGrowth</span>
              <span className="text-2xl font-bold text-black ml-1">Consulting</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-black hover:text-sky-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-black hover:text-sky-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-black hover:text-sky-600 font-medium transition-colors">
                Services
              </Link>

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className="flex items-center text-black hover:text-sky-600 font-medium transition-colors"
                >
                  Resources
                  <FiChevronDown className="ml-1 h-4 w-4" />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-100 z-50">
                    <Link
                      href="/resources/blogs"
                      className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-sky-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/resources/faqs"
                      className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-sky-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/resources/case-studies"
                      className="block px-4 py-2 text-black hover:bg-gray-50 hover:text-sky-600"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/contact"
                className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700 font-medium transition-colors"
              >
                Contact Us
              </Link>
            </nav>

            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-2 rounded-md text-black hover:bg-gray-100"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}

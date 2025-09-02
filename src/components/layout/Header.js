"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiMenu, FiChevronDown } from "react-icons/fi"
import NavDrawer from "./NavDrawer"

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" }, // ✅ Added here as normal nav link
  ]

  return (
    <>
      {/* Navbar with Glassmorphism & blue Blue Accent */}
      <header className="sticky top-0 z-50 border-b border-blue-200 bg-white/10 backdrop-blur-xl shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-extrabold text-blue-600">3xGrowth</span>
              {/* <span className="text-2xl font-extrabold text-black ml-1">Consulting</span> */}
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`relative px-2 py-1 font-medium transition-all duration-300 rounded-md ${
                    pathname === link.path
                      ? "text-blue-600 bg-blue-50 shadow-inner"
                      : "text-black hover:text-blue-600 hover:bg-blue-100/60"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                  className={`flex items-center px-2 py-1 font-medium rounded-md transition-all ${
                    pathname.startsWith("/resources")
                      ? "text-blue-600 bg-blue-50 shadow-inner"
                      : "text-black hover:text-blue-600 hover:bg-blue-100/60"
                  }`}
                >
                  Resources
                  <FiChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${
                      isResourcesOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isResourcesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 rounded-xl border border-blue-200 bg-white/80 backdrop-blur-xl shadow-xl p-2 z-50">
                    <Link
                      href="/resources/blogs"
                      className={`block px-4 py-2 rounded-lg transition ${
                        pathname === "/resources/blogs"
                          ? "bg-blue-600 text-white"
                          : "text-black hover:bg-blue-100 hover:text-blue-600"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Blogs
                    </Link>
                    <Link
                      href="/resources/faqs"
                      className={`block px-4 py-2 rounded-lg transition ${
                        pathname === "/resources/faqs"
                          ? "bg-blue-600 text-white"
                          : "text-black hover:bg-blue-100 hover:text-blue-600"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      FAQs
                    </Link>
                    <Link
                      href="/resources/case-studies"
                      className={`block px-4 py-2 rounded-lg transition ${
                        pathname === "/resources/case-studies"
                          ? "bg-blue-600 text-white"
                          : "text-black hover:bg-blue-100 hover:text-blue-600"
                      }`}
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              {/* CTA → Schedule Meeting */}
              <Link
                href="/schedule-meeting"
                className={`px-6 py-2 rounded-sm shadow-md transition-all duration-300 ${
                  pathname === "/schedule-meeting"
                    ? "bg-blue-700 text-white scale-105"
                    : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
                }`}
              >
                Schedule Meeting
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="md:hidden p-2 rounded-md text-blue-600 hover:bg-blue-100 transition"
            >
              <FiMenu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Drawer for Mobile */}
      <NavDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </>
  )
}

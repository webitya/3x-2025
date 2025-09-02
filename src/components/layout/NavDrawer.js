"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FiX, FiChevronDown } from "react-icons/fi"

export default function NavDrawer({ isOpen, onClose }) {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white/50 backdrop-blur-xl border-l border-white/30 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-hidden
          before:content-[''] before:absolute before:top-1/4 before:left-[-40%] before:w-[300px] before:h-[300px] before:rounded-full before:bg-blue-500/20 before:blur-3xl
          after:content-[''] after:absolute after:bottom-1/4 after:right-[-40%] after:w-[250px] after:h-[250px] after:rounded-full after:bg-blue-400/20 after:blur-3xl
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/30 relative z-10">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-600">3xGrowth</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-black hover:bg-white/20 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 relative z-10">
          <div className="flex flex-col space-y-6">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/services", label: "Services" },
              { href: "/contact", label: "Contact" },

            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-lg font-medium transition-all duration-300 py-2 ${
                  pathname === item.href
                    ? "text-blue-600 scale-105"
                    : "text-white hover:text-blue-600"
                }`}
                onClick={onClose}
              >
                {item.label}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div className="py-2">
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center justify-between w-full text-lg text-white hover:text-blue-600 font-medium transition-colors"
              >
                Resources
                <FiChevronDown
                  className={`h-5 w-5 transition-transform duration-200 ${
                    isResourcesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Resources Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isResourcesOpen ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-3">
                  {[
                    { href: "/resources/blogs", label: "Blogs" },
                    { href: "/resources/faqs", label: "FAQs" },
                    { href: "/resources/case-studies", label: "Case Studies" },
                  ].map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block transition-all duration-300 py-1 ${
                        pathname === sub.href
                          ? "text-blue-600 scale-105"
                          : "text-white hover:text-blue-600"
                      }`}
                      onClick={onClose}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>


            {/* Schedule Meeting */}
            <Link
              href="/schedule-meeting"
              className={`px-6 py-2 rounded-sm shadow-md font-medium text-center transition-all duration-300 ${
                pathname === "/schedule-meeting"
                  ? "bg-blue-700 text-white scale-105"
                  : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
              }`}
              onClick={onClose}
            >
              Schedule Meeting
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

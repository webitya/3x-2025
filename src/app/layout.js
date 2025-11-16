export const metadata = {
  title: "3xGrowth Consulting - B2B Lead Generation That Works",
  description: "Strategic B2B marketing solutions with clarity, accountability, and measurable growth.",
  generator: "v0.app",
}

import "./globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased">
        {children}

        {/* Partnership Badge */}
        <div className="fixed bottom-3 left-3 z-50 flex flex-col items-center bg-black/55 backdrop-blur-sm px-2 py-2 rounded-md">
          <img
            src="/appolo.svg"
            alt="Partner Logo"
            className="w-6 md:w-8 mb-1"
          />
          <span className="text-yellow-400 text-[10px] md:text-xs font-medium leading-none">
            Verified Partner
          </span>
        </div>
      </body>
    </html>
  )
}

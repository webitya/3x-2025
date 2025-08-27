export const metadata = {
  title: "3xGrowth Consulting - B2B Lead Generation That Works",
  description: "Strategic B2B marketing solutions with clarity, accountability, and measurable growth.",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-sans antialiased">{children}</body>
    </html>
  )
}


import './globals.css'
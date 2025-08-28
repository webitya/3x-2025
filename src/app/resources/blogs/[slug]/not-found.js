import Link from "next/link"
import Header from "../../../../components/layout/Header"
import Footer from "../../../../components/layout/Footer"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="py-20">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-black mb-6">Blog Post Not Found</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
            <Link
              href="/resources/blogs"
              className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

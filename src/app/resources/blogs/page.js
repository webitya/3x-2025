import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"
import BlogList from "../../../components/resources/BlogList"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <Header />
      <main className="relative py-20 overflow-hidden">
        {/* Decorative Background Blobs */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-sky-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        {/* Main Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          {/* Page Heading */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-700 to-blue-700 bg-clip-text text-transparent drop-shadow-sm">
              Our Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Insights, strategies, and best practices for{" "}
              <span className="text-sky-600 font-semibold">B2B marketing success</span>.
            </p>
          </div>

          {/* Blog List - Full Width */}
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

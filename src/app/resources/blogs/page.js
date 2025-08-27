import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"
import BlogList from "../../../components/resources/BlogList"

export default function BlogsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Our Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Insights, strategies, and best practices for B2B marketing success.
            </p>
          </div>
          <BlogList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

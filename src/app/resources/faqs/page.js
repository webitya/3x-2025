import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"
import FAQList from "../../../components/resources/FAQList"

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our B2B marketing services.
            </p>
          </div>
          <FAQList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

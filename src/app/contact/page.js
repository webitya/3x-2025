import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import ContactForm from "../../components/contact/ContactForm"
import ContactInfo from "../../components/contact/ContactInfo"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Contact Us</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your B2B marketing? Let s discuss your growth strategy.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import ServicesHero from "../../components/services/ServicesHero"
import ServicesList from "../../components/services/ServicesList"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ServicesHero />
        <ServicesList />
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-black mb-12">Trusted by Growing B2B Companies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">500+</div>
                <div className="text-sm text-gray-600">Clients Served</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">3x</div>
                <div className="text-sm text-gray-600">Average Growth</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-emerald-600">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

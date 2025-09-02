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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
  {/* Decorative background elements */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 to-indigo-100/20"></div>
  <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-14 text-center">
      Trusted by Growing <span className="text-blue-700">B2B Companies</span>
    </h2>

    {/* Stats Grid */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {/* Stat Card */}
      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
        <div className="text-3xl font-extrabold text-blue-700 mb-2">500+</div>
        <div className="text-sm font-medium text-gray-600">Clients Served</div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
        <div className="text-3xl font-extrabold text-blue-700 mb-2">95%</div>
        <div className="text-sm font-medium text-gray-600">Success Rate</div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
        <div className="text-3xl font-extrabold text-blue-700 mb-2">3x</div>
        <div className="text-sm font-medium text-gray-600">Average Growth</div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center">
        <div className="text-3xl font-extrabold text-blue-700 mb-2">24/7</div>
        <div className="text-sm font-medium text-gray-600">Support</div>
      </div>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}

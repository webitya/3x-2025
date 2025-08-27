export default function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-white py-24 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-emerald-200/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in-up">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-bounce-subtle">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Comprehensive B2B Solutions
          </div>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-black via-gray-800 to-black bg-clip-text text-transparent mb-6 animate-slide-up">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed animate-fade-in-delayed">
            Transform your B2B marketing with our comprehensive solutions designed to create predictable sales outcomes
            through strategic clarity, execution excellence, and measurable growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delayed-2">
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Free Strategy Session
            </button>
            <button className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

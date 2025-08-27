import Header from "../../../components/layout/Header"
import Footer from "../../../components/layout/Footer"
import CaseStudyList from "../../../components/resources/CaseStudyList"

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-black mb-4">Case Studies</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real results from our B2B marketing campaigns and strategies.
            </p>
          </div>
          <CaseStudyList />
        </div>
      </main>
      <Footer />
    </div>
  )
}

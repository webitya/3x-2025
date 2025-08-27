import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import AboutHero from "../../components/about/AboutHero"
import AboutContent from "../../components/about/AboutContent"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutContent />
      </main>
      <Footer />
    </div>
  )
}

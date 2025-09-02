import Header from "../../components/layout/Header"
import Footer from "../../components/layout/Footer"
import AboutHero from "../../components/about/AboutHero"
import AboutContent from "../../components/about/AboutContent"
import AboutCTA from "@/components/about/AboutCTA"
import AboutPhilospy from "@/components/about/AboutPhilospy"
import HowWeWork from "@/components/about/AboutHowWeWork"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutPhilospy/>
        <HowWeWork/>
        <AboutContent />
        <AboutCTA/>
      </main>
      <Footer />
    </div>
  )
}

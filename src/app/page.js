import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import HeroSection from "../components/home/HeroSection"
import ProblemSection from "../components/home/ProblemSection"
import SolutionSection from "../components/home/SolutionSection"
import ResourcesSection from "../components/home/ResourcesSection"
import CTASection from "../components/home/CTASection"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

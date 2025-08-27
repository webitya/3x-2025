import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import HeroSection from "../components/home/HeroSection"
import ProblemSection from "../components/home/ProblemSection"
import SolutionSection from "../components/home/SolutionSection"
import StatsSection from "../components/home/StatsSection"
import TestimonialsSection from "../components/home/TestimonialsSection"
import ResourcesSection from "../components/home/ResourcesSection"
import CTASection from "../components/home/CTASection"

export default function HomePage() {
  return (
    <div className="min-h-screen scroll-smooth">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ProblemSection />
        <SolutionSection />
        <TestimonialsSection />
        <ResourcesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

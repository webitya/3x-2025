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
      </main>
      <Footer />
    </div>
  )
}

import { services } from "@/data/services"
import ServiceCard from "./ServiceCard"

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">How We Drive Your Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology combines strategic planning with flawless execution to deliver measurable results for
            your B2B marketing efforts.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

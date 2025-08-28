import { FiMail, FiPhone, FiSearch, FiUsers } from "react-icons/fi"

export default function ResourcesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">Managed Resources That Deliver</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We do not just hand over ideas—we provide the right people, guided by strategy, working under a structured
            growth framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiMail className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Email Marketing & ABM</h3>
            <p className="text-gray-600 mb-4">
              Dedicated email executives, project managers, content researchers, and creators working in sync.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Email campaign strategy & execution</li>
              <li>• Account-based marketing campaigns</li>
              <li>• Content research & creation</li>
              <li>• Performance tracking & optimization</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiPhone className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Appointment Setting & Telecalling</h3>
            <p className="text-gray-600 mb-4">
              Dedicated professionals focused on opening conversations with decision-makers.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Qualified lead generation</li>
              <li>• Decision-maker outreach</li>
              <li>• Appointment scheduling</li>
              <li>• Follow-up management</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <FiSearch className="h-8 w-8 text-sky-600" />
            </div>
            <h3 className="text-2xl font-semibold text-black mb-4">Market Research</h3>
            <p className="text-gray-600 mb-4">
              Specialists conducting ICP definition, competitive intelligence, and customer insight studies.
            </p>
            <ul className="text-gray-600 space-y-2">
              <li>• Ideal Customer Profile (ICP) definition</li>
              <li>• Competitor benchmarking</li>
              <li>• Customer surveys & insights</li>
              <li>• Market opportunity analysis</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 bg-sky-50 p-8 rounded-lg">
          <div className="text-center">
            <FiUsers className="h-16 w-16 text-sky-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-black mb-4">Flexible Resource Models</h3>
            <p className="text-lg text-gray-600 mb-6">
              Whether shared or dedicated, every resource works under our structured growth framework, ensuring
              execution stays aligned with outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-black mb-2">Shared Resources</h4>
                <p className="text-gray-600">
                  Cost-effective access to specialized expertise across multiple projects and campaigns.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-black mb-2">Dedicated Resources</h4>
                <p className="text-gray-600">
                  Full-time focus on your specific goals with deep understanding of your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { FiMail, FiPhone, FiSearch, FiUsers } from "react-icons/fi"

export default function ResourcesSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-sky-50 via-white to-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-sky-900 mb-4">
            Managed Resources That Deliver
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just hand over ideas—we provide the right people, guided by strategy, working under a structured growth framework.
          </p>
        </div>

        {/* Resource Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <FiMail className="h-7 w-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-3"> Buying Intent verification – Intent IQ</h3>
            <p className="text-gray-600 text-sm mb-4">
              We  help B2B companies separate “curious” prospects from “serious” buyers by validating the intent before the sales team invests time.
            </p>
            <ul className="text-gray-600 text-sm space-y-1 mb-5">
              <li>• Mannual research layer </li>
              <li>• Direct verification </li>
              <li>• Better ROI on Marketing Spend</li>
              <li>• Save Sales Time</li>
            </ul>
             <Link href="/about">
      <button className="px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition">
        Learn More
      </button>
    </Link>
          </div>

          {/* Card 2 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <FiPhone className="h-7 w-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-3">Appointment Setting</h3>
            <p className="text-gray-600 text-sm mb-4">
              Dedicated professionals focused on opening conversations with decision-makers.
            </p>
            <ul className="text-gray-600 text-sm space-y-1 mb-5">
              <li>• Qualified lead generation</li>
              <li>• Outreach to decision-makers</li>
              <li>• Appointment scheduling</li>
              <li>• Follow-up management</li>
            </ul>
            <Link href="/about">
      <button className="px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition">
        Learn More
      </button>
    </Link>
          </div>

          {/* Card 3 */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <div className="bg-sky-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
              <FiSearch className="h-7 w-7 text-sky-600" />
            </div>
            <h3 className="text-xl font-semibold text-sky-900 mb-3">Market Research</h3>
            <p className="text-gray-600 text-sm mb-4">
              Specialists conducting ICP definition, competitive intelligence, and customer insights.
            </p>
            <ul className="text-gray-600 text-sm space-y-1 mb-5">
              <li>• ICP definition</li>
              <li>• Competitor benchmarking</li>
              <li>• Customer surveys</li>
              <li>• Market opportunity analysis</li>
            </ul>
      <Link href="/about">
      <button className="px-4 py-2 text-sm font-medium bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition">
        Learn More
      </button>
    </Link>
          </div>
        </div>

        {/* Flexible Resource Models */}
        <div className="mt-14 bg-gradient-to-r from-sky-600 to-sky-700 p-10 rounded-2xl shadow-xl text-white">
          <div className="text-center">
            <FiUsers className="h-14 w-14 text-sky-100 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Flexible Resource Models</h3>
            <p className="text-base text-sky-100 max-w-2xl mx-auto mb-8">
              Whether shared or dedicated, every resource works under our structured growth framework, ensuring execution stays aligned with outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">Shared Resources</h4>
                <p className="text-sm text-sky-100">
                  Cost-effective access to specialized expertise across multiple projects and campaigns.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
                <h4 className="text-lg font-semibold mb-2">Dedicated Resources</h4>
                <p className="text-sm text-sky-100">
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

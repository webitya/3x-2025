import { FiTrendingUp, FiTarget, FiUsers } from "react-icons/fi"
import { caseStudyData } from "../../data/caseStudyData"

export default function CaseStudyList() {
  return (
    <div className="space-y-12">
      {caseStudyData.map((study) => (
        <div key={study.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-black mb-2">{study.title}</h2>
                <p className="text-sky-600 font-medium">
                  {study.industry} • {study.company}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-sky-600">{study.results.growth}</div>
                <div className="text-sm text-gray-500">Growth Achieved</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-sky-50 p-4 rounded-lg text-center">
                <FiTrendingUp className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{study.results.leads}</div>
                <div className="text-sm text-gray-600">Lead Increase</div>
              </div>

              <div className="bg-sky-50 p-4 rounded-lg text-center">
                <FiTarget className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{study.results.conversion}</div>
                <div className="text-sm text-gray-600">Conversion Rate</div>
              </div>

              <div className="bg-sky-50 p-4 rounded-lg text-center">
                <FiUsers className="h-8 w-8 text-sky-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-black">{study.results.timeline}</div>
                <div className="text-sm text-gray-600">Timeline</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Challenge</h3>
                <p className="text-gray-600 mb-4">{study.challenge}</p>

                <h3 className="text-xl font-semibold text-black mb-3">Solution</h3>
                <p className="text-gray-600">{study.solution}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-black mb-3">Services Used</h3>
                <ul className="space-y-2 mb-4">
                  {study.services.map((service, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                      {service}
                    </li>
                  ))}
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">Key Outcomes</h3>
                <ul className="space-y-2">
                  {study.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-sky-600 rounded-full mr-3"></div>
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <blockquote className="text-lg text-gray-700 italic">"{study.testimonial}"</blockquote>
              <cite className="text-sky-600 font-medium mt-2 block">
                — {study.clientName}, {study.clientTitle}
              </cite>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

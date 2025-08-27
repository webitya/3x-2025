import { FiCheckCircle, FiMail, FiPhone, FiSearch, FiTarget, FiUsers, FiBarChart, FiArrowRight } from "react-icons/fi"

export default function ServicesList() {
  const services = [
    {
      icon: FiTarget,
      title: "Strategic Marketing Planning",
      subtitle: "Free Consultation",
      description:
        "We build your complete marketing roadmap at no cost, aligning every activity with your sales targets.",
      features: [
        "Custom marketing plan creation",
        "Sales target alignment",
        "Communication channel optimization",
        "Investment requirement mapping",
        "Industry benchmarking",
        "Risk assessment and mitigation",
        "Success probability analysis",
      ],
      process: [
        "Initial consultation and goal setting",
        "Market analysis and competitor research",
        "Strategy development and documentation",
        "Plan presentation and Q&A session",
      ],
    },
    {
      icon: FiMail,
      title: "Email Marketing & ABM",
      subtitle: "Managed Resources",
      description:
        "Dedicated email marketing teams that execute strategic campaigns with precision and accountability.",
      features: [
        "Email campaign strategy and execution",
        "Account-based marketing campaigns",
        "Content research and creation",
        "List building and segmentation",
        "A/B testing and optimization",
        "Performance tracking and reporting",
        "CRM integration and management",
      ],
      process: [
        "Campaign strategy development",
        "Content creation and approval",
        "List preparation and segmentation",
        "Campaign execution and monitoring",
        "Performance analysis and optimization",
      ],
    },
    {
      icon: FiPhone,
      title: "Appointment Setting & Telecalling",
      subtitle: "Dedicated Professionals",
      description:
        "Skilled professionals focused on opening conversations with decision-makers and generating qualified leads.",
      features: [
        "Qualified lead generation",
        "Decision-maker identification and outreach",
        "Appointment scheduling and management",
        "Follow-up sequence execution",
        "CRM data management",
        "Call script development",
        "Performance reporting",
      ],
      process: [
        "Target audience definition",
        "Script development and training",
        "Outreach campaign execution",
        "Appointment scheduling",
        "Follow-up and nurturing",
      ],
    },
    {
      icon: FiSearch,
      title: "Market Research & Intelligence",
      subtitle: "Strategic Insights",
      description: "Comprehensive market research that provides the foundation for all your marketing decisions.",
      features: [
        "Ideal Customer Profile (ICP) definition",
        "Competitor analysis and benchmarking",
        "Customer surveys and insights",
        "Market opportunity assessment",
        "Industry trend analysis",
        "Buyer persona development",
        "Market sizing and segmentation",
      ],
      process: [
        "Research scope definition",
        "Data collection and analysis",
        "Insight synthesis and reporting",
        "Strategic recommendations",
        "Implementation planning",
      ],
    },
    {
      icon: FiUsers,
      title: "Resource Management",
      subtitle: "Flexible Solutions",
      description: "Choose between shared or dedicated resources, all working under our structured growth framework.",
      features: [
        "Shared resource access",
        "Dedicated team allocation",
        "Project management oversight",
        "Quality assurance processes",
        "Performance monitoring",
        "Scalable resource models",
        "Transparent reporting",
      ],
      process: [
        "Resource requirement assessment",
        "Team allocation and onboarding",
        "Project setup and planning",
        "Ongoing management and optimization",
        "Performance review and scaling",
      ],
    },
    {
      icon: FiBarChart,
      title: "Performance Optimization",
      subtitle: "Continuous Improvement",
      description: "Ongoing optimization of all marketing activities to ensure maximum ROI and sales impact.",
      features: [
        "Performance tracking and analysis",
        "ROI measurement and reporting",
        "Campaign optimization",
        "Process improvement",
        "Technology integration",
        "Data-driven decision making",
        "Continuous testing and refinement",
      ],
      process: [
        "Baseline performance establishment",
        "Key metrics identification",
        "Regular performance reviews",
        "Optimization implementation",
        "Results measurement and reporting",
      ],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">How We Drive Your Growth</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven methodology combines strategic planning with flawless execution to deliver measurable results for
            your B2B marketing efforts.
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-fade-in-up`}>
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 hover:from-emerald-200 hover:to-teal-200 transition-all duration-300 transform hover:scale-110 shadow-lg">
                  <service.icon className="h-10 w-10 text-emerald-600" />
                </div>
                <h2 className="text-4xl font-bold text-black mb-3">{service.title}</h2>
                <div className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {service.subtitle}
                </div>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                <h3 className="text-2xl font-semibold text-black mb-6 flex items-center">
                  <span className="w-1 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full mr-3"></span>
                  Key Features
                </h3>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group">
                      <div className="bg-emerald-100 rounded-full p-1 mr-4 mt-1 group-hover:bg-emerald-200 transition-colors duration-200">
                        <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-200">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors duration-200 group">
                  Learn More About This Service
                  <FiArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>

              <div
                className={`bg-gradient-to-br from-gray-50 to-white p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""} animate-fade-in-up`}
              >
                <h3 className="text-2xl font-semibold text-black mb-8 flex items-center">
                  <span className="w-2 h-8 bg-gradient-to-b from-emerald-600 to-teal-600 rounded-full mr-3"></span>
                  Our Process
                </h3>
                <div className="space-y-6">
                  {service.process.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start group">
                      <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white w-10 h-10 rounded-full flex items-center justify-center mr-6 text-sm font-bold flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                        {stepIndex + 1}
                      </div>
                      <div className="pt-2">
                        <p className="text-gray-700 font-medium group-hover:text-black transition-colors duration-200">
                          {step}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 bg-gradient-to-br from-emerald-50 via-teal-50 to-white p-16 rounded-3xl shadow-xl border border-emerald-100">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">Choose Your Growth Path</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Select the perfect package to accelerate your B2B marketing success with our proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Starter Package</h3>
                <p className="text-gray-600 mb-6">Perfect for businesses just starting their B2B marketing journey.</p>
                <div className="text-3xl font-bold text-emerald-600 mb-2">Free</div>
                <p className="text-sm text-gray-500">Strategy Session</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Free strategic planning session</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Basic market research</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Shared resource access</span>
                </li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300">
                Get Started Free
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Most Popular
                </div>
              </div>
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-black mb-4">Growth Package</h3>
                <p className="text-gray-600 mb-6">Comprehensive solution for scaling B2B marketing efforts.</p>
                <div className="text-3xl font-bold text-emerald-600 mb-2">Custom</div>
                <p className="text-sm text-gray-500">Based on Requirements</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Complete strategic roadmap</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Dedicated resource team</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Full campaign execution</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Performance optimization</span>
                </li>
              </ul>
              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Start Growing Now
              </button>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">Enterprise Package</h3>
                <p className="text-gray-600 mb-6">Full-scale marketing transformation for large organizations.</p>
                <div className="text-3xl font-bold text-emerald-600 mb-2">Premium</div>
                <p className="text-sm text-gray-500">Enterprise Solutions</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Custom strategic framework</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Dedicated account management</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Multi-channel execution</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-emerald-100 rounded-full p-1 mr-3">
                    <FiCheckCircle className="h-4 w-4 text-emerald-600" />
                  </div>
                  <span className="text-gray-600">Advanced analytics & reporting</span>
                </li>
              </ul>
              <button className="w-full border-2 border-emerald-600 text-emerald-600 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

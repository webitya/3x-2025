import { FiCheckCircle, FiMail, FiPhone, FiSearch, FiTarget, FiUsers, FiBarChart } from "react-icons/fi"

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
        <div className="space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-sky-600" />
                </div>
                <h2 className="text-3xl font-bold text-black mb-2">{service.title}</h2>
                <p className="text-sky-600 font-semibold mb-4">{service.subtitle}</p>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                <h3 className="text-xl font-semibold text-black mb-4">Key Features:</h3>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <FiCheckCircle className="h-5 w-5 text-sky-600 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`bg-gray-50 p-8 rounded-lg ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <h3 className="text-xl font-semibold text-black mb-4">Our Process:</h3>
                <div className="space-y-4">
                  {service.process.map((step, stepIndex) => (
                    <div key={stepIndex} className="flex items-start">
                      <div className="bg-sky-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-sm font-bold flex-shrink-0">
                        {stepIndex + 1}
                      </div>
                      <p className="text-gray-600 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Service Packages */}
        <div className="mt-20 bg-sky-50 p-12 rounded-lg">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">Starter Package</h3>
              <p className="text-gray-600 mb-6">Perfect for businesses just starting their B2B marketing journey.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Free strategic planning session</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Basic market research</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Shared resource access</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border-2 border-sky-600">
              <div className="bg-sky-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                Most Popular
              </div>
              <h3 className="text-2xl font-semibold text-black mb-4">Growth Package</h3>
              <p className="text-gray-600 mb-6">Comprehensive solution for scaling B2B marketing efforts.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Complete strategic roadmap</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Dedicated resource team</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Full campaign execution</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Performance optimization</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-black mb-4">Enterprise Package</h3>
              <p className="text-gray-600 mb-6">Full-scale marketing transformation for large organizations.</p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Custom strategic framework</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Dedicated account management</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Multi-channel execution</span>
                </li>
                <li className="flex items-center">
                  <FiCheckCircle className="h-5 w-5 text-sky-600 mr-2" />
                  <span className="text-gray-600">Advanced analytics & reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

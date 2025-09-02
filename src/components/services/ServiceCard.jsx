import { FiCheckCircle, FiArrowRight } from "react-icons/fi"

export default function ServiceCard({ service, index }) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${
        index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
      }`}
    >
      {/* Left Content */}
      <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""} animate-fade-in-up`}>
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 w-14 h-14 rounded-xl flex items-center justify-center mb-5 hover:scale-105 transition-transform duration-300 shadow-md">
          <service.icon className="h-7 w-7 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h2>
        <div className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-4 shadow-sm">
          {service.subtitle}
        </div>
        <p className="text-sm text-gray-600 mb-5 leading-snug">{service.description}</p>

        <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
          <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-2"></span>
          Key Features
        </h3>
        <ul className="space-y-2 mb-6">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-start group">
              <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5 group-hover:bg-blue-200 transition-colors duration-200">
                <FiCheckCircle className="h-3.5 w-3.5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <button className="inline-flex items-center text-sm text-blue-600 font-medium hover:text-indigo-600 transition-colors duration-200 group">
          Learn More
          <FiArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Right Content (Process) */}
      <div
        className={`bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 ${
          index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
        } animate-fade-in-up`}
      >
        <h3 className="text-lg font-semibold text-gray-900 mb-5 flex items-center">
          <span className="w-1.5 h-6 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-2"></span>
          Our Process
        </h3>
        <div className="space-y-4">
          {service.process.map((step, stepIndex) => (
            <div key={stepIndex} className="flex items-start group">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 text-xs font-bold flex-shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
                {stepIndex + 1}
              </div>
              <p className="text-sm text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-200">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

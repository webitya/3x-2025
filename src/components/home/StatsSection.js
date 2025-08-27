"use client"
import { useState, useEffect, useRef } from "react"
import { FiUsers, FiTrendingUp, FiAward, FiTarget } from "react-icons/fi"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    growth: 0,
    experience: 0,
  })
  const sectionRef = useRef(null)

  const finalCounts = {
    clients: 150,
    projects: 500,
    growth: 300,
    experience: 8,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps

        setCounts({
          clients: Math.floor(finalCounts.clients * progress),
          projects: Math.floor(finalCounts.projects * progress),
          growth: Math.floor(finalCounts.growth * progress),
          experience: Math.floor(finalCounts.experience * progress),
        })

        if (currentStep >= steps) {
          clearInterval(timer)
          setCounts(finalCounts)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      icon: FiUsers,
      value: counts.clients,
      suffix: "+",
      label: "Happy Clients",
      color: "text-emerald-600",
    },
    {
      icon: FiTarget,
      value: counts.projects,
      suffix: "+",
      label: "Projects Completed",
      color: "text-teal-600",
    },
    {
      icon: FiTrendingUp,
      value: counts.growth,
      suffix: "%",
      label: "Average Growth",
      color: "text-emerald-600",
    },
    {
      icon: FiAward,
      value: counts.experience,
      suffix: "+",
      label: "Years Experience",
      color: "text-teal-600",
    },
  ]

  return (
    <section ref={sectionRef} className="bg-gradient-to-r from-emerald-50 to-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our track record demonstrates consistent success in transforming B2B marketing strategies into measurable
            growth outcomes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className={`text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  isVisible ? "animate-count-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 mb-4 ${stat.color}`}
                >
                  <Icon className="h-8 w-8" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                  {stat.suffix}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

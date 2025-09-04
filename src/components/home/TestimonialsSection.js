"use client"
import { useState, useEffect } from "react"
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi"

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      position: "VP Marketing",
      company: "TechFlow Solutions",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "3xGrowth transformed our marketing approach. In 6 months, we saw a 250% increase in qualified leads.",
    },
    {
      name: "Rajesh Patel",
      position: "CEO",
      company: "DataSync Corp",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "Their strategy gave us clarity. ROI grew by 180% in the first year. Exactly what we needed.",
    },
    {
      name: "Anita Gupta",
      position: "Marketing Director",
      company: "CloudScale Industries",
      image: "/placeholder-user.jpg",
      rating: 5,
      text: "They truly understand B2B cycles. Lead nurturing is now smooth, and conversions are stronger.",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
  }

  const prevTestimonial = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-indigo-50 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800">What Our Clients Say</h2>
          <p className="text-base text-slate-600 max-w-xl mx-auto mt-2">
            Hear directly from leaders who scaled their business with 3xGrowth.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-slate-700 mb-6 leading-relaxed italic">
                {testimonials[currentIndex].text}
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <div className="text-left">
                  <div className="font-semibold text-slate-800">{testimonials[currentIndex].name}</div>
                  <div className="text-blue-600 text-sm">{testimonials[currentIndex].position}</div>
                  <div className="text-slate-500 text-sm">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md hover:shadow-lg transition text-blue-600 hover:text-blue-700"
          >
            <FiChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/90 backdrop-blur-md rounded-full p-2 shadow-md hover:shadow-lg transition text-blue-600 hover:text-blue-700"
          >
            <FiChevronRight className="h-5 w-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-blue-600 w-6" : "bg-slate-300 w-2.5 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

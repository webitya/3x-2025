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
      image: "/professional-woman-headshot.png",
      rating: 5,
      text: "3xGrowth transformed our entire marketing approach. Within 6 months, we saw a 250% increase in qualified leads and our sales team couldn't be happier with the quality of prospects.",
    },
    {
      name: "Rajesh Patel",
      position: "CEO",
      company: "DataSync Corp",
      image: "/professional-man-headshot.png",
      rating: 5,
      text: "The strategic clarity they provided was exactly what we needed. Their marketing plan became our roadmap to success, and the execution was flawless. ROI increased by 180% in the first year.",
    },
    {
      name: "Anita Gupta",
      position: "Marketing Director",
      company: "CloudScale Industries",
      image: "/professional-woman-headshot.png",
      rating: 5,
      text: "Finally, a marketing partner that understands B2B sales cycles. Their approach to lead nurturing and qualification has revolutionized how we convert prospects into customers.",
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
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-4">What Our Clients Say</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Don t just take our word for it. Here s what industry leaders say about working with 3xGrowth Consulting.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed italic">
                {testimonials[currentIndex].text}
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div className="text-left">
                  <div className="font-bold text-slate-700 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-emerald-600 font-medium">{testimonials[currentIndex].position}</div>
                  <div className="text-slate-600">{testimonials[currentIndex].company}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-emerald-600 hover:text-emerald-700"
          >
            <FiChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 text-emerald-600 hover:text-emerald-700"
          >
            <FiChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-emerald-600 w-8" : "bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

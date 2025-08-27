"use client"
import { useState } from "react"
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { faqData } from "../../data/faqData"

export default function FAQList() {
  const [openItems, setOpenItems] = useState({})

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <div className="space-y-4">
      {faqData.map((faq) => (
        <div key={faq.id} className="bg-white rounded-lg shadow-sm border border-gray-100">
          <button
            onClick={() => toggleItem(faq.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-semibold text-black pr-4">{faq.question}</h3>
            {openItems[faq.id] ? (
              <FiChevronUp className="h-5 w-5 text-sky-600 flex-shrink-0" />
            ) : (
              <FiChevronDown className="h-5 w-5 text-sky-600 flex-shrink-0" />
            )}
          </button>

          {openItems[faq.id] && (
            <div className="px-6 pb-4">
              <div className="text-gray-600 leading-relaxed">{faq.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

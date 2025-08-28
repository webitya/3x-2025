import Link from "next/link"
import { FiCalendar, FiUser, FiArrowRight, FiClock } from "react-icons/fi"
import { blogData } from "../../data/blogData"

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.map((blog) => (
        <article
          key={blog.id}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group"
        >
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <FiCalendar className="h-4 w-4 mr-2" />
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <FiUser className="h-4 w-4 mr-2" />
              <span>{blog.author}</span>
            </div>

            <Link href={`/resources/blogs/${blog.slug}`}>
              <h2 className="text-xl font-bold text-black mb-3 line-clamp-2 group-hover:text-emerald-600 transition-colors duration-200 cursor-pointer">
                {blog.title}
              </h2>
            </Link>

            <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

            <div className="flex items-center justify-between mb-4">
              <div className="flex flex-wrap gap-2">
                {blog.tags.slice(0, 2).map((tag, index) => (
                  <span key={index} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md text-sm">
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 2 && <span className="text-gray-500 text-sm">+{blog.tags.length - 2}</span>}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="h-3 w-3 mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            <Link
              href={`/resources/blogs/${blog.slug}`}
              className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-200"
            >
              Read More
              <FiArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

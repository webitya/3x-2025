import Link from "next/link"
import { FiCalendar, FiUser, FiArrowRight, FiClock } from "react-icons/fi"
import { blogData } from "../../data/blogData"

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.map((blog) => (
        <article
          key={blog.id}
          className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl hover:border-sky-200 transition-all duration-300 group"
        >
          <div className="p-6">
            {/* Meta Info */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <FiCalendar className="h-4 w-4 mr-2 text-sky-600" />
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <FiUser className="h-4 w-4 mr-2 text-sky-600" />
              <span>{blog.author}</span>
            </div>

            {/* Title */}
            <Link href={`/resources/blogs/${blog.slug}`}>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-sky-700 transition-colors duration-200 cursor-pointer">
                {blog.title}
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-gray-600 mb-5 line-clamp-3">{blog.excerpt}</p>

            {/* Tags + Read Time */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex flex-wrap gap-2">
                {blog.tags.slice(0, 2).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-sky-100 text-sky-700 px-2 py-1 rounded-lg text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
                {blog.tags.length > 2 && (
                  <span className="text-gray-500 text-xs">
                    +{blog.tags.length - 2}
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <FiClock className="h-4 w-4 mr-1 text-sky-600" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/resources/blogs/${blog.slug}`}
              className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center group-hover:translate-x-1 transition-all duration-200"
            >
              Read More
              <FiArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </article>
      ))}
    </div>
  )
}

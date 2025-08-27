import Link from "next/link"
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi"
import { blogData } from "../../data/blogData"

export default function BlogList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.map((blog) => (
        <article
          key={blog.id}
          className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <FiCalendar className="h-4 w-4 mr-2" />
              <span>{blog.date}</span>
              <span className="mx-2">•</span>
              <FiUser className="h-4 w-4 mr-2" />
              <span>{blog.author}</span>
            </div>

            <h2 className="text-xl font-bold text-black mb-3 line-clamp-2">{blog.title}</h2>

            <p className="text-gray-600 mb-4 line-clamp-3">{blog.excerpt}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((tag, index) => (
                <span key={index} className="bg-sky-100 text-sky-700 px-2 py-1 rounded-md text-sm">
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={`/resources/blogs/${blog.slug}`}
              className="text-sky-600 hover:text-sky-700 font-medium inline-flex items-center"
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

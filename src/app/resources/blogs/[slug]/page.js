import { notFound } from "next/navigation"
import Header from "../../../../components/layout/Header"
import Footer from "../../../../components/layout/Footer"
import { blogData } from "../../../../data/blogData"
import Link from "next/link"
import { ArrowLeft, Clock, User, Tag } from "lucide-react"

export async function generateMetadata({ params }) {
  const blog = blogData.find((post) => post.slug === params.slug)

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${blog.title} | 3xGrowth Consulting`,
    description: blog.excerpt,
    keywords: blog.tags.join(", "),
    authors: [{ name: blog.author }],
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      type: "article",
      publishedTime: blog.date,
      authors: [blog.author],
      tags: blog.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.excerpt,
    },
  }
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }) {
  const blog = blogData.find((post) => post.slug === params.slug)

  if (!blog) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <Header />
      <main className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/resources/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          {/* Blog header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-1 text-blue-500" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1 text-blue-500" />
                {blog.readTime}
              </div>
              <span>{blog.date}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {blog.title}
            </h1>

            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              {blog.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-700"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Blog content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {blog.content.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-lg leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>

          {/* CTA Section */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl shadow-lg text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Transform Your B2B Marketing?
              </h3>
              <p className="mb-6 text-blue-100">
                Get your free marketing plan and discover how we can help you achieve measurable growth.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
              >
                Get Your Free Plan
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogData
                .filter((post) => post.slug !== blog.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/resources/blogs/${relatedPost.slug}`}
                    className="block p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 mb-4">{relatedPost.excerpt}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{relatedPost.author}</span>
                      <span className="mx-2">•</span>
                      <span>{relatedPost.readTime}</span>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

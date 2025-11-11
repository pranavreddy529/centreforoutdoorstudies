import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const Blog = () => {
  const categories = ["All", "Category one", "Category two", "Category three", "Category four"];

  const blogPosts = [
    {
      id: 1,
      title: "Blog title heading will go here",
      category: "Category one",
      author: "Full name",
      date: "11 Jan 2022",
      readTime: "5 min read",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      title: "Another blog title heading",
      category: "Category two",
      author: "Full name",
      date: "11 Jan 2022",
      readTime: "7 min read",
      content: "This is another blog post example for testing routing and detail view.",
    },
    {
      id: 3,
      title: "Third blog post heading",
      category: "Category three",
      author: "Full name",
      date: "11 Jan 2022",
      readTime: "4 min read",
      content: "Short example of blog data for rendering blog details.",
    },
    {
      id: 4,
      title: "Last blog example title",
      category: "Category four",
      author: "Full name",
      date: "11 Jan 2022",
      readTime: "6 min read",
      content: "Final placeholder blog post.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Blog Section */}
      <div className="bg-white text-gray-900 px-4 md:px-12 lg:px-24 py-16 mt-4">
        {/* Header */}
        <div className="mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Blog</h3>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Describe what your blog is about
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Featured Post */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Featured Image */}
          <div className="bg-gray-200 aspect-video flex items-center justify-center rounded-lg">
            <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
              <span className="text-gray-500">🖼️</span>
            </div>
          </div>

          {/* Featured Content */}
          <div className="flex flex-col justify-center">
            <span className="text-sm text-gray-500 mb-2">Category one</span>
            <h2 className="text-2xl font-semibold mb-3">
              Blog title heading will go here
            </h2>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              varius enim in eros.
            </p>
            <div className="flex items-center text-gray-500 text-sm space-x-2">
              <div className="w-8 h-8 rounded-full bg-gray-200"></div>
              <span className="font-medium">Full name</span>
              <span>•</span>
              <span>11 Jan 2022</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`border border-gray-300 text-sm px-4 py-2 rounded-lg transition ${
                i === 0
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "hover:bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              state={{ post }}
              className="block group"
            >
              <div className="bg-gray-200 aspect-video mb-4 flex items-center justify-center rounded-lg group-hover:opacity-80 transition">
                <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
                  <span className="text-gray-500">🖼️</span>
                </div>
              </div>

              <span className="text-sm text-gray-500">{post.category}</span>
              <h3 className="font-semibold text-lg mt-1 group-hover:text-gray-700 transition">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {post.content}
              </p>
              <div className="flex items-center text-gray-500 text-sm space-x-2">
                <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                <span className="font-medium">{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default Blog;

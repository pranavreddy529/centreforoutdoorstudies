import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const BlogDetail = () => {
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600">
        <h2>Blog not found</h2>
        <Link to="/blog" className="text-blue-600 underline mt-4 block">
          Back to blogs
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      {/* Hero Image */}
      <div className="h-72 bg-gray-200 flex items-center justify-center">
        <div className="w-20 h-20 bg-gray-300 rounded-md flex items-center justify-center">
          <span className="text-gray-500">🖼️</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-3xl mx-auto px-6 py-10 text-gray-800">
        <p className="text-sm text-gray-500 mb-2">
          <Link to="/blog" className="hover:underline text-gray-600">
            Blog
          </Link>{" "}
          › {post.category}
        </p>

        <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {post.author} • {post.date} • {post.readTime}
        </p>

        <p className="mb-6 leading-relaxed">
          {post.content} Vivamus suscipit tortor eget felis porttitor volutpat. Donec
          sollicitudin molestie malesuada.
        </p>

        <div className="bg-gray-200 h-64 mb-6 flex items-center justify-center">
          <div className="w-16 h-16 bg-gray-300 rounded-md flex items-center justify-center">
            <span className="text-gray-500">🖼️</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 text-center mb-10">
          Image caption goes here
        </p>

        <h2 className="text-xl font-semibold mb-3">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          This section can summarize your main points or provide closing remarks.
          Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta
          dapibus.
        </p>

        <Link
          to="/blog"
          className="text-green-200 hover:underline mt-8 inline-block"
        >
          ← Back to Blogs
        </Link>
      </div>
        <Footer />
    </div>
  );
};

export default BlogDetail;

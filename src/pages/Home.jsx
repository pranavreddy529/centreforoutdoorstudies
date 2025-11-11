import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import GroundToCover from "../components/GroundToCover";
import CourseSpotlight from "../components/CourseSpotlight";

import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 min-h-screen text-white overflow-hidden w-screen">
        {/* Background Video */}
        <motion.div
          className="absolute inset-0 -z-10 opacity-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            
            <source src="/Kayak-bg.mp4" type="video/mp4" />

           
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>

        {/* Hero Content */}
        <motion.h1
          className="text-7xl md:text-9xl mb-6 leading-tight font-[Amulya]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: 'easeOut' }}
        >
          Lead
          <br />
          the way
        </motion.h1>

        <motion.p
          className="text-[20pt] max-w-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 1.8, ease: 'easeOut' }}
        >
          Education is empowerment. Discover new paths, find yourself, and
          conquer challenges – that’s the COS way.
        </motion.p>

        {/* Unified Button Style */}
        <motion.a
          href="#"
          className="inline-flex items-center space-x-2 border border-green-300 text-green-200 hover:bg-green-200 hover:text-gray-900 font-semibold text-sm px-6 py-2 rounded-full transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 2.2, ease: 'easeOut' }}
        >
          <span>START YOUR JOURNEY</span>
          <span>→</span>
        </motion.a>
      </section>

      <div className="w-full h-[10px] bg-[#BCE3D3]" />

      {/* About Section */}
      <section className="bg-green-50 text-gray-700 py-20 px-6 md:px-16 lg:px-32 text-center w-screen">
        <div className="flex flex-col items-center mb-4">
          <span className="text-black text-6xl md:text-8xl font-bold"></span>
        </div>
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          "We’re a learning and research lab advocating for adventure,
          skill-development, and environmental stewardship through outdoor
          education."
        </motion.p>
      </section>

      {/* Community Section */}
      <section className="w-full bg-white py-20 px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side - Image */}
          <motion.img
            src="/community1.jpg"
            alt="Community biking group"
            className="w-full h-[300px] md:h-[400px] object-cover"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          {/* Right Side - Text */}
          <div>
            <h3 className="text-sm font-bold tracking-wide text-gray-900 mb-3">
              COMMITTED TO OUR COMMUNITY
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              All courses, from immersive wilderness expeditions to
              classroom-based wilderness medicine courses, are designed around
              learning by experience, mentorship from expert educators, and
              wilderness. Students engage deeply with both the environment and
              their peers.
            </p>

            {/* Unified Button Style */}
            <motion.a
              href="#"
              className="inline-flex items-center space-x-2 border border-green-300 text-green-200 hover:bg-green-200 hover:text-gray-900 font-semibold text-sm px-6 py-2 rounded-full transition"
            >
              <span>OUR VALUES</span>
              <span>→</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <GroundToCover />
      <CourseSpotlight />
      
      <Footer />
    </div>
  );
}

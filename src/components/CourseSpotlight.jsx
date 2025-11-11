import React from "react";

export default function CourseSpotlight() {
  return (
    <section className="relative w-screen h-[90vh] overflow-hidden text-white flex items-end justify-end">
      {/* Background Image */}
      <img
        src="/adventurer-bg.jpg" // Ensure this image is in your public folder
        alt="Outdoor leadership course"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Text Content — Right & Lowered */}
      <div className="relative z-20 text-right max-w-2xl px-6 md:px-16 lg:px-24 pb-24 md:pb-32">
        <h4 className="text-green-300 font-semibold tracking-widest text-sm mb-2">
          COURSE SPOTLIGHT
        </h4>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
          The Adventurer
        </h2>

        <p className="text-base md:text-lg leading-relaxed mb-8 text-gray-200">
          Whether you want to become a leader, try new things, or learn outside
          the classroom, our flagship program makes for an enthralling
          experience.
        </p>

        <a
          href="#"
          className="inline-flex items-center justify-center space-x-2 border border-green-300 text-green-200 hover:bg-green-200 hover:text-gray-900 font-semibold text-sm px-6 py-2 rounded-full transition"
        >
          <span>TELL ME MORE</span>
          <span>→</span>
        </a>
      </div>
    </section>
  );
}

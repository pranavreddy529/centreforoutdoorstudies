// components/GroundToCover.js
import React from "react";

const data = [
  {
    color: "bg-green-200",
    title: "ADVENTURE",
    text: `We (responsibly) curate opportunities in the wild for you to engage, evolve, and embrace change. You will love the outdoors, if you don’t already.`,
  },
  {
    color: "bg-purple-300",
    title: "LIFE SKILLS",
    text: `Empathy, resilience, communication, leadership, adaptability, getting out of your comfort zone - nature really is the best teacher.`,
  },
  {
    color: "bg-red-300",
    title: "WORKSHOPS",
    text: `Our learn-by-doing and experiential learning approaches allows you to directly apply theoretical knowledge to the real-world outdoor setting.`,
  },
  {
    color: "bg-yellow-400",
    title: "ADVOCACY",
    text: `Having experienced so much that nature has to offer, you’ll feel a profound respect and sense of responsibility that’ll make you advocate for its conservation.`,
  },
];

export default function GroundToCover() {
  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6 md:px-16 lg:px-24 w-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">
          Education + Nature = A Lot of Ground to Cover.
        </h2>
        <p className="text-lg font-medium mb-12">Here’s how we do it</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {data.map((item, index) => (
            <div key={index}>
              {/* Blob Icon */}
              <div className={`w-8 h-8 ${item.color} rounded-full mb-4`}></div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 border-b border-gray-300 pb-1">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

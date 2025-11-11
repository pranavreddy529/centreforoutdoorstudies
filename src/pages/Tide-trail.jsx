import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TideTrailTestimonials from "../components/TidetrailTestimonials";

export default function TideTrail() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="tide-trail-bg.JPG"
          alt="Tide Trail"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Section (Below Image) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">Tide Trail</h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          This sea kayaking programme is an exploration of coastal Karnataka’s
          natural beauty — the perfect start to a new relationship with water
          bodies.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Why join?</h2>
          <p className="text-lg leading-relaxed mb-6">
            This course blends{" "}
            <strong>
              adventure education, environmental stewardship, and safety &
              rescue
            </strong>{" "}
            into a transformative 5-day sea experience. Every day brings
            paddling, navigation, and self-reflection with the sea as your
            classroom.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Adventure Education
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Environmental Stewardship
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Safety & Rescue
            </span>
          </div>
        </div>

        {/* Right Column — Consistent with Adventurer.jsx design */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-lg leading-relaxed">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Duration:</span> 5
              days
            </p>
            <p>
              <span className="font-semibold text-gray-800">Fee:</span> Rs. 8,000
            </p>
            <p>
              <span className="font-semibold text-gray-800">Group size:</span> 6
              students
            </p>
            <p>
              <span className="font-semibold text-gray-800">
                Pre-requisites:
              </span>{" "}
              Basic swimming skills & parental consent
            </p>
          </div>

          <button
            className="mt-6 self-start px-8 py-3 border border-green-300 text-green-700 
                       font-semibold rounded-full hover:bg-green-200 hover:text-gray-900 
                       transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#E4F1EC] text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-10 text-left">FAQs</h2>

          {/* FAQ 1 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What exactly will we do?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Each day begins early with warm-ups at our Katapadi site or on
                the beach, followed by a sea kayaking session focused on paddling
                techniques and stability.
              </p>
              <p>
                Afternoons are reserved for theory sessions on navigation,
                weather reading, and rescue methods, while evenings focus on
                group reflections.
              </p>
              <p>
                The programme culminates in a voyage to the White Dog Island —
                applying everything you’ve learned on the open sea.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What’s in it for you?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                <strong>Physical fitness:</strong> Sea kayaking builds upper body
                strength and boosts cardiovascular endurance.
              </p>
              <p>
                <strong>Mental well-being:</strong> Time by the sea — paddling or
                simply being still — restores calm, reduces anxiety, and connects
                you to nature.
              </p>
              <p>
                <strong>Perspective:</strong> For many, this is the first
                close-up experience with the ocean’s power and beauty — inspiring
                curiosity and respect for marine ecosystems.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What should you know ahead of time?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                <strong>Sun exposure:</strong> Stay hydrated and use sunscreen
                generously — you’ll spend long hours outdoors.
              </p>
              <p>
                <strong>Sea sickness:</strong> While the sea is observed for safe
                conditions, learning to manage mild motion sickness can be
                helpful.
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <TideTrailTestimonials />

      {/* “What Tide Trail Looks Like” — Asymmetrical Image Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            What Tide Trail looks like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="grid gap-6">
              <img
                src="/tide1.jpg"
                alt="Sea Kayaking 1"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <img
                src="/tide2.jpg"
                alt="Sea Kayaking 2"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            {/* Right Column */}
            <div className="grid gap-6">
              <img
                src="/tide3.jpg"
                alt="Sea Kayaking 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <img
                src="/tide4.jpg"
                alt="Sea Kayaking 4"
                className="w-full h-[500px] object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

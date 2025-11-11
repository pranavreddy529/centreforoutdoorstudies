// src/pages/Himayalas.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HimayalasTestimonials from "../components/himayalasTestimonials";

export default function Himayalas() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-[90vh]">
        <img
          src="Himalayas-bg.jpg"
          alt="Himalayas Expedition"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Text Section Below Hero */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-12 text-left">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          The Himalayas Expedition
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          A once-in-a-lifetime adventure that takes you through the stunning
          landscapes of Spiti Valley. This expedition challenges your endurance,
          deepens your connection with nature, and helps you rediscover your
          strength in the high-altitude wilderness.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Why join?</h2>
          <p className="text-lg leading-relaxed mb-6">
            The Himalayas Expedition blends{" "}
            <strong>adventure, self-discovery, and resilience</strong> into a
            transformative cycling experience. Each day brings new lessons —
            navigating rugged terrain, adapting to high altitudes, and embracing
            the raw beauty of the mountains.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Adventure Education
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Mountain Exploration
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Leadership & Resilience
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-4">
          <p>
            <strong>Duration:</strong> 14 days
          </p>
          <p>
            <strong>Location:</strong> Spiti Valley, Himachal Pradesh
          </p>
          <p>
            <strong>Group Size:</strong> 10–12 participants
          </p>
          <p>
            <strong>Outcome:</strong> Expedition Certificate + Leadership Skills
          </p>
          <button className="mt-4 px-6 py-3 bg-green-200 text-black rounded-lg hover:bg-green-300 transition">
            Apply Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#E4F1EC] text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-10 text-left">FAQs</h2>

          {/* FAQ Item 1 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What exactly will we do?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Over the course of two weeks, participants will cycle through
                the majestic valleys of Himachal Pradesh, navigating some of the
                highest motorable roads in the world. Each day includes cycling,
                reflection, and leadership exercises amidst breathtaking views.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What skills will I gain?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                <strong>Endurance & Fitness:</strong> Strengthen both your body
                and mind while learning high-altitude adaptability.
              </p>
              <p>
                <strong>Leadership:</strong> Team coordination and planning are
                core to surviving the mountains — you’ll learn to take
                initiative and lead effectively.
              </p>
              <p>
                <strong>Environmental Awareness:</strong> You’ll gain a deeper
                understanding of mountain ecosystems and sustainable travel.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What’s special about Spiti Valley?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Known as the “Middle Land” between Tibet and India, Spiti Valley
                offers breathtaking landscapes, ancient monasteries, and
                authentic Himalayan culture. It’s the perfect setting for
                self-discovery and adventure.
              </p>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">Who can join?</div>
            <div className="md:col-span-8 space-y-4">
              <p>
                The expedition is open to students, professionals, and
                adventurers aged 18–35 who are physically fit and mentally ready
                to take on challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <HimayalasTestimonials />

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            What mountain learning looks like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="grid gap-6">
              <img
                src="/Himalayas1.jpg"
                alt="Himalayas Expedition 1"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <img
                src="/Himalayas2.jpg"
                alt="Himalayas Expedition 2"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            {/* Right Column */}
            <div className="grid gap-6">
              <img
                src="/Himalayas3.jpg"
                alt="Himalayas Expedition 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <img
                src="/Himalayas4.jpg"
                alt="Himalayas Expedition 4"
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

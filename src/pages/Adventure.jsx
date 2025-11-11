// src/pages/Adventurer.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdventurerTestimonials from "../components/AdventurerTestimonials";

export default function Adventurer() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="adventurer-bg.jpg"
          alt="The Adventurer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Section (Moved below image, left-aligned) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          The Adventurer
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          Designed to engage your body, mind, and soul, our flagship certificate
          programme will have you cycling through the region’s rich and wild
          landscape, navigating unpredictable situations, and developing your
          leadership and planning capabilities.
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
              adventure education, environmental stewardship, and outdoor
              leadership
            </strong>{" "}
            into a single transformative experience. From steep climbs to
            endurance rides, every day is designed to build both your body and
            your mind.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Adventure Education
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Environmental Stewardship
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Outdoor Leadership
            </span>
          </div>
        </div>

        {/* Right Column — Refined Spacing and Typography */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-lg leading-relaxed">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Duration:</span> 3
              weeks
            </p>
            <p>
              <span className="font-semibold text-gray-800">Fee:</span> Rs.
              16,000
            </p>
            <p>
              <span className="font-semibold text-gray-800">Group size:</span> 15
              students
            </p>
            <p>
              <span className="font-semibold text-gray-800">Outcome:</span>{" "}
              Outdoor Leadership Certificate Course
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
      </div> {/* ✅ properly closed this Highlights Section div */}

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
                We’ll begin each day with stretching and warm-up sessions and
                then head to the site of the day – a steep slope for climbing
                drills, an off-road track, or (a little later on) even an
                extended endurance ride. Soon, you’ll also have the opportunity
                to plan, organise, and execute your own ride.
              </p>
              <p>
                Supporting our rides will be classes and discussions on risk
                management, sustainable travel practices, route selection,
                leadership and planning, local ecology, nature journaling,
                cycle maintenance and repair, first aid and more.
              </p>
              <p>
                As you can see, it’s not just about the rides – it’s also about
                preparedness, living in the moment, and holistic thinking.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What’s in it for you?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                <strong>Physical fitness:</strong> The physicality of the course
                will work your body, making you faster, stronger, and fitter.
              </p>
              <p>
                <strong>Mental health:</strong> Cycling around this area, with
                its beautiful sights and terrain, can bring you joy and peace.
                This course will also connect you to a bunch of your peers and
                we’ve witnessed amazing friendships grow from these rides
                together.
              </p>
              <p>
                <strong>Drive:</strong> Students do tend to get stuck in a cycle
                (pun intended) of classes, studying, and chilling. Being a part
                of something new, something bigger, might give you something to
                do – a sense of purpose and productivity.
              </p>
              <p>
                <strong>Skill/professional development:</strong> Students who
                successfully complete the course will automatically be
                considered for leadership roles within the Centre and will be
                invited on our marquee expeditions.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">Is it worth it?</div>
            <div className="md:col-span-8 space-y-4">
              <p>
                The course fee might seem like a hurdle, especially since you
                might incur incidental expenses as well, but it offers a lot in
                return – health, camaraderie, personal growth, routine, and a
                space to find out what you’re capable of.
              </p>
              <p>
                But if this seems like a lot, we have shorter courses and
                single-day workshops that are equally exciting!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <AdventurerTestimonials />

      {/* “What Outdoor Learning Looks Like” Section — Balanced Asymmetrical Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            What outdoor learning looks like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="grid gap-6">
              <img
                src="/adventurer1.jpg"
                alt="Outdoor learning 1"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <img
                src="/adventurer2.jpg"
                alt="Outdoor learning 2"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            {/* Right Column */}
            <div className="grid gap-6">
              <img
                src="/adventurer3.jpg"
                alt="Outdoor learning 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <img
                src="/adventurer4.jpg"
                alt="Outdoor learning 4"
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

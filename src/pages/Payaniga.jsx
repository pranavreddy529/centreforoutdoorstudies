import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PayanigaTestimonials from "../components/PayanigaTestimonials";

export default function Payaniga() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Navbar />

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <img
          src="payaniga-bg.jpg"
          alt="Payaniga Trekking by COS"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Text Section (below hero, left-aligned) */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 text-left">
        <h1 className="text-5xl font-bold mb-6 text-gray-900">
          Payaniga: Trekking by COS
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 max-w-3xl">
          Designed for anyone to awaken their spirit of adventure, connect with
          nature, and disconnect from the hustle of daily routines, the{" "}
          <strong>Payaniga Trekking Programme</strong> takes you across rugged
          trails, hidden valleys, and timeless landscapes where every step
          becomes a lesson in resilience and discovery. Along the way, you’ll
          learn to navigate challenges in the outdoors and within yourself,
          cultivate teamwork and leadership, and embrace a slower, more mindful
          way of travel. This is more than just trekking — it’s an immersive
          journey of growth, exploration, and connection with nature.
        </p>
      </div>

      {/* Highlights Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-3xl font-semibold mb-6">Why join?</h2>
          <p className="text-lg leading-relaxed mb-6">
            The <strong>Payaniga Trekking Programme</strong> blends{" "}
            <strong>exploration, leadership, and teamwork</strong> into a
            transformative one-day experience. Each trek is designed to help you
            build resilience, connect with nature, and find balance in both body
            and mind.
          </p>
          <div className="flex flex-wrap gap-3 mt-4">
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Exploration
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Leadership
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Teamwork
            </span>
            <span className="px-3 py-1 bg-green-200 text-black rounded">
              Navigation
            </span>
          </div>
        </div>

        {/* Right Column — Program Info */}
        <div className="flex flex-col justify-center space-y-4 md:space-y-5 text-lg leading-relaxed">
          <div className="space-y-2">
            <p>
              <span className="font-semibold text-gray-800">Duration:</span> 1
              Day
            </p>
            <p>
              <span className="font-semibold text-gray-800">Fee:</span> Rs. 999
              – Rs. 1499
            </p>
            <p>
              <span className="font-semibold text-gray-800">Group Size:</span>{" "}
              10 students
            </p>
            <p>
              <span className="font-semibold text-gray-800">Outcomes:</span>{" "}
              Resilience, Connecting with Nature, Teamwork
            </p>
          </div>

          <button
            className="mt-6 self-start px-8 py-3 border border-green-300 text-green-700 
                       font-semibold rounded-full hover:bg-green-200 hover:text-gray-900 
                       transition duration-300"
          >
            Register Now
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#E4F1EC] text-gray-800 py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-semibold mb-10 text-left">FAQs</h2>

          {/* FAQ 1 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">How do I register?</div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Registration is simple and can be done online via Google Forms.
                Just select a date, fill out the form, and our team will get in
                touch with you for further process. Limited slots are available,
                with early access for our social media followers and Whatsapp
                community members.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">Who can join?</div>
            <div className="md:col-span-8 space-y-4">
              <p>
                This programme is open exclusively to students and faculty of
                MAHE. Whether you’re a beginner or a seasoned outdoor
                enthusiast, there’s something for everyone. Some treks may
                require prior experience — please refer to the trek poster for
                eligibility details.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              Why should I join this trekking program?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Payaniga goes beyond trekking — it’s a chance to challenge
                yourself, explore hidden trails, and reconnect with nature. Each
                trek offers opportunities for teamwork, leadership, and
                self-reflection in dynamic outdoor settings.
              </p>
              <p>
                Participants will also gain outdoor skills such as navigation,
                packing, route planning, and group coordination, along with
                personal growth outcomes like leadership, teamwork, adaptability,
                and self-awareness.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              What is included in the trek fees?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                The trek fee covers everything from Manipal to Manipal,
                including transport, breakfast, lunch, snacks, permits, and
                guide fees.
              </p>
              <p>
                It does not include personal gear (like shoes, rain jackets,
                backpacks) or any unforeseen expenses such as medical
                emergencies or weather disruptions.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              How is this trek different from others?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                Unlike casual hikes, Payaniga is immersive — combining
                reflection, personal growth, and adventure. With small groups,
                meaningful conversations, and sustainable practices, this trek
                focuses on a deeper connection with the outdoors.
              </p>
              <p>
                COS treks are well-planned, affordable, and community-driven,
                making them both unique and impactful.
              </p>
            </div>
          </div>

          {/* FAQ 6 (Optional) */}
          <div className="border-t border-gray-300 py-8 grid md:grid-cols-12 gap-6">
            <div className="md:col-span-4 font-semibold">
              Why are slots limited?
            </div>
            <div className="md:col-span-8 space-y-4">
              <p>
                COS keeps treks exclusive — small groups mean less impact on the
                environment and a more intimate experience. Only 8–10 slots are
                available per batch, with waitlisted options in case of
                cancellations.
              </p>
            </div>
          </div>
        </div>
      </div>
        {/* Testimonials Section */}
        <PayanigaTestimonials />

      {/* “What Trekking Looks Like” Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-10">
            What trekking with COS looks like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="grid gap-6">
              <img
                src="/payaniga1.jpg"
                alt="Trek Image 1"
                className="w-full h-[500px] object-cover rounded-lg"
              />
              <img
                src="/payaniga2.jpg"
                alt="Trek Image 2"
                className="w-full h-[300px] object-cover rounded-lg"
              />
            </div>

            {/* Right Column */}
            <div className="grid gap-6">
              <img
                src="/payaniga3.jpg"
                alt="Trek Image 3"
                className="w-full h-[300px] object-cover rounded-lg"
              />
              <img
                src="/payaniga4.jpg"
                alt="Trek Image 4"
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

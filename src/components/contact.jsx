import React from "react";
import { Mail, Phone } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

export default function ContactForm() {
  return (
    <>

        <Navbar />
      

      <div className="min-h-screen bg-white pt-28 px-6 md:px-12 lg:px-24 pb-16">
        {/* Top Section */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          {/* Left Column */}
          <div>
            <p className="text-green-600 font-semibold mb-3">
              We’d love to hear from you
            </p>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact us</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              For details on our courses, collaborations, or research
              opportunities, get in touch with us.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 mt-10 md:mt-0">
            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                <p className="text-gray-700">cos.mit@manipal.edu</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-6 h-6 text-gray-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-700">+91 7349136833</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Image Section */}
        <div className="mt-16">
          <img
            src="/contact-image.jpg" // Replace with your actual image
            alt="Contact us"
            className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

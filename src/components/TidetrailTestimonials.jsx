import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Vivek — Tide Trail 1.0",
    text: "For me, this was a fabulous experience because whenever I am on a kayak it brings me a sense of calmness. The feeling of being just a few inches above the water’s surface and the ability to float wherever you want is one of the best memories I hold dear. Thanks to Centre for Outdoor Studies, I walked away not just with skills, but with memories and a new love for kayaking that I’ll carry with me always.",
  },
  {
    name: "Dheeraj — Tide Trail",
    text: "Sea Kayaking with COS was one of the most memorable parts of my time at Manipal. It wasn’t just a course where I learned how to kayak; it was an experience that pushed me out of my comfort zone and helped me overcome my fears. The COS team gave me the confidence to embrace challenges with a sense of fun and adventure. This course is for people who want to get lost in the beauty and serenity of coastal Karnataka and, in the process, discover a bolder version of themselves.",
  },
  {
    name: "Nikhil — Tide Trail 2.0",
    text: "In my first year of college, I got the chance to try sea kayaking, something I’d always wanted to do. The course taught me essential skills: paddling long distances, water survival, and staying steady on the kayak. It gave me a new hobby and a deeper admiration for the local flora and fauna, helping me connect with the ecology around me. It also taught me resilience, discipline, and confidence. I’m grateful for the experience and highly recommend it to anyone looking to push their boundaries.",
  },
];

export default function TideTrailTestimonials() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Duplicate testimonials for infinite loop
  const loopedTestimonials = [...testimonials, ...testimonials];

  const scrollAnimation = {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 45,
      ease: "linear",
    },
  };

  const handleMouseEnter = () => controls.stop();
  const handleMouseLeave = () => controls.start(scrollAnimation);

  useEffect(() => {
    controls.start(scrollAnimation);
  }, []);

  return (
    <div className="w-full bg-green-50 py-16 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-black mb-12">
        Testimonials
      </h2>

      <motion.div
        ref={containerRef}
        className="flex gap-12 cursor-grab active:cursor-grabbing"
        animate={controls}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {loopedTestimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="min-w-[350px] md:min-w-[400px] flex flex-col justify-between"
          >
            <p className="text-gray-800 text-base md:text-lg leading-relaxed italic">
              “{t.text}”
            </p>
            <h3 className="text-lg font-semibold text-black mt-4">
              — {t.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

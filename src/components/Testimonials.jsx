import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Milika",
    text: "To be very honest, doing something as crazy as cycling through the Himalayas has always been at the top of my bucket list, but I never imagined that it would happen so soon. This experience has given me so much—from unforgettable memories, to incredible food, breathtaking sceneries, and most importantly, the relationships I built along the way—something I will always cherish. I’m truly grateful to COS for giving me this opportunity and making me fall in love with cycling and travelling even more than I already did! Here’s to many more adventures ahead!",
  },
  {
    name: "Rhea",
    text: "Cycling the Himalayas was my Robert Frost’s “The Road Not Taken” moment. Not many people can say they’ve pedalled through those mountains, which makes it unforgettable. The roads were challenging, but every turn opened a beauty that kept me moving forward. By the end, it felt like I had left a part of myself there, and that part still calls me back. This trip to Spiti Valley made me feel so achingly alive and shaped me into the person I am today, and the one I want to become.",
  },
  {
    name: "Nikhil",
    text: "Cycling through Spiti Valley's stunning landscapes was a transformative journey of self-resilience and discovery. Fully self-supported, I captured its vibrant culture and ever-changing beauty, moving at the speed of true observation. Each pedal stroke deepened my connection with locals and inspired growth beyond my comfort zone. This ride profoundly changed my life for the better, leaving me with lasting memories and a grateful heart.",
  },
];

export default function HimayalasTestimonials() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Duplicate testimonials for seamless infinite scroll
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
            <h3 className="text-lg font-semibold text-black mt-4">— {t.name}</h3>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

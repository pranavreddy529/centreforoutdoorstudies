import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Soham Biyani",
    text: "Starting my college journey with Adventurer was one of the best decisions I've made. I was a somewhat introverted guy and getting to know people from different places and backgrounds through such a unique experience was very special. Be it cycling through coffee estates and lush ghats or fixing punctures on the side of the road in pouring conditions, these moments will forever be in my heart and keep me longing for more adventures.",
  },
  {
    name: "Nishad",
    text: "This is not just a six-week program, but a learning journey. Easily one of the top experiences that stayed with me even after college. Adventurer and COS helped me build a base for the future me to go take on and achieve difficult challenges such as cycling to Khardung-La, becoming a triathlete, and a certified mountaineer. Also a super opportunity to make like-minded friends that stay!",
  },
  {
    name: "Tejas",
    text: "The Adventurer course has been one of the most memorable and impactful parts of my MIT journey. Through Adventurer, I’ve not only learned new skills but also grown as a person. Meeting new people, sharing my bird knowledge, and having those fun, unforgettable conversations truly made the experience special.",
  },
  {
    name: "Kaviyaa",
    text: "I honestly joined Adventurer because two of my friends were doing it and I loved nature. But now, the early morning wake calls, beautiful routes, mountains, cycling in the rain, skies, instructors, people, etc. are things I will never forget. It helped me adapt to new and tough environments and taught me lessons I’ll hold on to for life.",
  },
  {
    name: "Arin",
    text: "On the surface, The Adventurer is an outdoor course mainly about cycling. For me, it's about discovering what you're made of. You learn to dig deep inside yourself, tap into your mental resilience, and find yourself capable of things that seemed impossible. And the best part is doing all this while finding friends and joining a supportive community.",
  },
  {
    name: "Navya",
    text: "As someone who was never the sporty kid but still loves adventure, completing the course and riding through the Western Ghats still sounds crazy. From believing I could pull this off to actually doing it, Adventurer proved that you can do anything you put your mind to. The songs, the people, and the memories are things I’ll cherish forever.",
  },
];

export default function AdventurerTestimonials() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Duplicate testimonials for infinite loop effect
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

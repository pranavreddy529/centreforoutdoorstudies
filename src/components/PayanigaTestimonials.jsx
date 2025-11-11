import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
  {
    name: "Aditi — Payaniga 3.0",
    text: "The trek was a unique experience for me firstly because it was my first trek… the journey was not easy starting with my shoe grip coming off even before the trek actually began and the leech bites afterwards but these seem trivial issues before the memories that I made… the nostalgic breakfast at the dhaba and the crazy views, the closeness to nature and the sense of pride after reaching the summit all made the journey worthwhile…. I would like to thank COS for giving me a one of a kind experience and making the trek so comfortable and cherishing for me.",
  },
  {
    name: "Peehu Yadav — Payaniga 2.0",
    text: "The Payaniga trek was a rare pause in life’s rush — well timed, expertly led, and deeply refreshing. Every halt revealed the Western Ghats’ quiet majesty, offering time to connect with nature. A group of strangers turned companions, bound by the trail and shared wonder. Standing atop the Kurinjal peak, it was pure joy to pause, take it in, and know the trek was worth it.",
  },
  {
    name: "Sanjana — Payaniga 2.0",
    text: "The Payaniga trek was one of the most well-organized, fun treks I've ever been on. The friendly trek guides and breathtaking views made for a wonderful experience. It was a great way to meet new people and make friends while exploring the beautiful trail. My favourite moments were dipping our feet in the cool river water, finding mushrooms the size of our faces, and the moment of silence on top of the trek to just take it all in.",
  },
  {
    name: "Anushri — Payaniga 3.0",
    text: "My Kurinjal Trek with COS was honestly a life-changing experience. It was so much more than just a trek — it felt like breaking out of my shell and reconnecting with myself. The journey through the forest was refreshing, and the satisfaction of reaching the summit was unmatched. A special (and slightly scary) highlight was the leeches — they started off terrifying but ended up being part of the fun memories. Kurinjal isn’t just a trek, it’s an experience I’d recommend to anyone who wants to challenge themselves, build lasting connections, and return with unforgettable memories.",
  },
  {
    name: "Yana — Payaniga 3.0",
    text: "The Kurinjal trek with COS was honestly such an amazing experience! Before the trek, we had a super helpful briefing — routes, safety, packing, food, even leeches — so we felt ready for anything. Big shoutout to our seniors Akshita and Priyam, plus the guide, for always being there to help us. The trek itself was magical — misty trails, sharp rocks, rain on our faces, and insane views from the top with fog rolling over the mountains. It was safe, fun, and one of those trips you’ll never forget!",
  },
  {
    name: "Darren — Payaniga 3.0",
    text: "The trek was a refreshing break from the college campus. While MIT has plenty of greenery, this felt entirely different. Every step along the trail revealed a scenery that stays with you — from dense forests to green grasslands, surrounded by the quiet stillness of nature. At the summit, the cool breeze and crisp air made every step worth it, leaving behind a deep sense of accomplishment. It’s an experience that has become a core memory.",
  },
];

export default function PayanigaTestimonials() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  // Duplicate testimonials for infinite scrolling effect
  const loopedTestimonials = [...testimonials, ...testimonials];

  const scrollAnimation = {
    x: ["0%", "-50%"],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 50,
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
        Payaniga Testimonials
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

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// =================== TEAM MEMBERS (Main grid) ===================
const teamMembers = [
  {
    name: "Ganesh Nayak",
    role: "Director",
    description:
      "Find answers to your questions about our programs and how to participate.",
    image: "/image1.png",
  },
  {
    name: "Sagarika Bhatia",
    role: "Creative Lead",
    description:
      "Find answers to your questions about our programs and how to participate.",
    image: "/image2.png",
  },
  {
    name: "Manu Nackathaya",
    role: "Kayak Instructor",
    description:
      "Manu lives in the Western Ghats and manages a BnB at the foothills. He loves the outdoors and loves to travel, hike, kayak & packraft. He has been working as a sea kayaking instructor with COS and has coordinated many workshops for students. Manu was also part of the COS Seakayaking expedition of 2024.",
    image: "/image3.png",
  },
];

// =================== EXTENDED TEAM MEMBERS (Auto-scroll gallery) ===================
const teamMembersExtended = [
  { name: "Abeer Sethia", role: "", image: "/abeer_Sethia.jpg" },
  { name: " Arin Khandelwal", role: "", image: "/Arin Khandelwal.jpg" },
  { name: "BK", role: "", image: "/BK.jpg" },
  { name: "Ira Lath Gupta", role: "", image: "/Ira Lath Gupta.jpg" },
  { name: "Ishita Pal", role: "", image: "/Ishita Pal.jpg" },
  { name: "Julin Varghese", role: "", image: "/Julin Varghese.jpg" },
  { name: "Megha Thomas", role: "", image: "/Megha Thomas.jpg" },
  { name: "Navya Lakhotia", role: "", image: "/Navya Lakhotia_.jpg" },
  { name: "Priyam Lath", role: "", image: "/Priyam Lath.jpg" },
  { name: "Riana Mammen", role: "", image: "/Riana Mammen.jpg" },
  { name: "Soham Biyani", role: "", image: "/Soham Biyani.jpg" },
  { name: "Sriram Nagpur", role: "", image: "/Sriram Nagur.jpg" },
  { name: "Tanvi Yadlapati", role: "", image: "/Tanvi Yadlapati_.jpg" },
  { name: "Tejas K Rao", role: "", image: "/Tejas_k_Rao.jpg" },
  { name: "Vivek Kheni", role: "", image: "/Vivek Kheni.jpg" },
  { name: "Rhea Pillai", role: "", image: "/team16.jpg" },
  { name: "Aditya Joshi", role: "", image: "/team17.jpg" },
  { name: "Kavya Singh", role: "", image: "/team18.jpg" },
  { name: "Rahul Menon", role: "", image: "/team19.jpg" },
  { name: "Anaya Chatterjee", role: "", image: "/team20.jpg" },
];

// =================== EXPEDITION FEATURES ===================
const features = [
  {
    id: 1,
    title: "Expedition: Zanskar Valley",
    description:
      "Six students took on quite the adventure - a three-week bike tour through the Greater Himalayas, reaching altitudes as high as 5100m and pedaling 550km. Yup, all on a bike.",
    image: "/Zanskar.jpg",
  },
  {
    id: 2,
    title: "Coastal Karnataka",
    description:
      "Students embarked on a week-long sea kayaking course, navigating challenging tides and learning open-water survival skills.",
    image: "/karnataka.jpg",
  },
  {
    id: 3,
    title: "Sikkim Trek",
    description:
      "A five-day trek through dense rainforests and remote villages, offering insights into biodiversity and sustainable travel.",
    image: "/sikkim.jpg",
  },
];

// =================== MAIN COMPONENT ===================
const AboutUs = () => {
  const [active, setActive] = useState(1);

  return (
    <div className="text-gray-800">
      <Navbar />

      {/* =================== HERO SECTION (Vision & Mission overlay — NO blur-box) =================== */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center text-white"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        {/* Slight dark overlay for improved contrast */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content container: left hero text, right vision/mission */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left Side — Hero Text */}
          <div className="text-center md:text-left max-w-lg mb-12 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              We’re Experience Enthusiasts!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl mt-4 text-gray-100"
            >
              Committed to fostering leaders through outdoor education.
            </motion.p>
          </div>

          {/* Right Side — Vision & Mission text directly on image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full md:w-[420px] text-left text-gray-100"
          >
            <div className="mb-10">
              <h3 className="text-green-300 uppercase font-semibold text-sm tracking-widest">
                Vision
              </h3>
              <h2 className="text-2xl font-bold mt-2 text-white">
                Pioneering outdoor education in India
              </h2>
              <p className="mt-3 text-gray-200 text-sm md:text-base leading-relaxed">
                We’re proud to be redefining the concept of education: to not
                only be a part of, but lead, innovative approaches to
                experiential learning — especially in natural environments.
              </p>
            </div>

            <div>
              <h3 className="text-green-300 uppercase font-semibold text-sm tracking-widest">
                Mission
              </h3>
              <h2 className="text-2xl font-bold mt-2 text-white">
                Fostering young leaders of tomorrow
              </h2>
              <p className="mt-3 text-gray-200 text-sm md:text-base leading-relaxed">
                The Centre is a safe space for students to discover their
                capabilities, form their own value systems, and practise them —
                to speak out and be heard, finding the best versions of
                themselves.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =================== RESPONSIBLE LIVING / ETHOS =================== */}
      <section className="py-20 px-6 md:px-24 bg-white text-left">
        <motion.h3
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-green-600 font-semibold uppercase tracking-widest text-sm mb-2"
        >
          Ethos
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-gray-900"
        >
          Responsible Living is at the heart of our work.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl text-gray-700 text-base md:text-lg"
        >
          Whether it’s on the world, the outdoors, the local community or even
          just each other, we aspire to have a positive impact through what we
          do. Our purpose and practice aligns with the Sustainable Development
          Goals laid out by the United Nations (UNSDG).
        </motion.p>
      </section>

      {/* =================== IMAGE SECTION (SDG / custom image + button aligned left) =================== */}
      <section className="py-16 bg-white text-center">
        <motion.img
          src="/image.png"
          alt="UN Sustainable Development Goals"
          className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="max-w-5xl mx-auto text-left mt-6 px-4">
          <motion.a
            href="https://sdgs.un.org/goals"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center space-x-2 border border-green-300 text-green-700 hover:bg-green-200 hover:text-gray-900 font-semibold text-sm px-6 py-2 rounded-full transition duration-300"
          >
            <span>MORE ABOUT THE UNSDGs</span>
          </motion.a>
        </div>
      </section>

      {/* =================== OUR STORY =================== */}
      <section className="min-h-screen bg-white text-gray-900 p-6 md:p-24 flex flex-col justify-center">
        <div className="max-w-4xl text-left">
          <p className="text-green-600 font-semibold uppercase tracking-widest text-sm mb-2">
            Our Story
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            From shared adventures to a whole new way of life
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Prof. Ganesh Nayak founded the Human Powered Endeavours Club in MIT
            back in 2016 to promote adventure. He spent the next few years
            gaining the professional qualifications required to facilitate
            educational experiences in the outdoors while also building a
            network of like-minded educators, researchers, conservationists,
            and adventurers.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            In November 2022, the Centre for Outdoor Studies was offering
            students credited courses in cycling, sea kayaking, and trekking —
            guided by diverse mentors and fellow explorers.
          </p>
        </div>
      </section>

      {/* =================== FEATURE SECTION (Simplified / updated layout) =================== */}
      <section className="w-full max-w-6xl mx-auto border border-gray-300 rounded-md overflow-hidden bg-white mb-20 relative">
        <div className="flex flex-col md:flex-row h-full">
          {/* Left rotated label (visible on md+) */}
          <div className="hidden md:flex items-center justify-center w-12 border-r border-gray-300">
            <p className="text-sm font-medium text-gray-700 rotate-[-90deg] whitespace-nowrap">
              {features.find((f) => f.id === active)?.title.replace(
                "Expedition: ",
                ""
              ) || "Expedition"}
            </p>
          </div>

          {/* Main content */}
          <div className="flex-1 p-8">
            <p className="text-green-600 font-semibold text-lg mb-3">
              {String(active).padStart(2, "0")}
            </p>

            <AnimatePresence mode="wait">
              {features
                .filter((f) => f.id === active)
                .map((feature) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                  >
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                      {feature.title}
                    </h2>
                    <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-2xl">
                      {feature.description}
                    </p>
                    {feature.image && (
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full max-w-3xl object-cover rounded-md shadow-sm"
                      />
                    )}
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

          {/* Right small vertical numeric buttons */}
          <div className="flex md:flex-col border-t md:border-t-0 md:border-l border-gray-300">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`flex-1 flex flex-col items-center justify-center py-4 px-3 transition duration-200 ${
                  active === f.id
                    ? "text-green-600 font-semibold"
                    : "text-gray-600 hover:text-green-500"
                }`}
              >
                <span className="text-sm md:text-base">
                  {String(f.id).padStart(2, "0")}
                </span>
              </button>
            ))}
          </div>

          {/* Right rotated labels (md+) */}
          <div className="hidden md:flex flex-col justify-between border-l border-gray-300">
            {features.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`flex-1 text-xs font-medium tracking-wide rotate-90 origin-bottom whitespace-nowrap p-2 ${
                  active === f.id
                    ? "text-green-600 font-semibold"
                    : "text-gray-700 hover:text-green-500"
                }`}
              >
                {f.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =================== TEAM GRID (3 people) =================== */}
      <section className="py-20 bg-white text-center">
        <motion.h2
          className="text-3xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Driven, fun, and just getting started
        </motion.h2>
        <p className="mb-12 max-w-xl mx-auto text-gray-600 px-4">
          Meet the brains and backbones of the Centre of Outdoor Studies - the
          who's who of COS.
        </p>

        <div className="grid md:grid-cols-3 gap-10 px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-72 object-cover rounded-md mb-4 shadow"
              />
              <h3 className="font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>
              <p className="text-sm text-gray-700">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =================== OUR TEAM SCROLL SECTION (PAUSE ON HOVER) =================== */}
      <section className="py-20 bg-white text-center overflow-hidden">
        <motion.h2
          className="text-4xl md:text-5xl  mb-10 bg-black bg-clip-text text-transparent font-amulya"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meet the Minds that Move Us
        </motion.h2>

        <AutoScrollTeam />
      </section>

      <Footer />
    </div>
  );
};

// =================== AUTO-SCROLL TEAM COMPONENT ===================
const AutoScrollTeam = () => {
  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);
  const speed = 70; // seconds for one loop (adjust to taste)

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div className="relative overflow-hidden">
      <motion.div className="flex space-x-6 px-6 w-max" animate={controls}>
        {[...Array(2)].map((_, setIndex) =>
          teamMembersExtended.map((member, index) => (
            <motion.div
              key={`${setIndex}-${index}`}
              className="relative min-w-[200px] h-[260px] flex-shrink-0 rounded-lg overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col items-center justify-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-lg font-semibold drop-shadow-md">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </div>
  );
};

export default AboutUs;

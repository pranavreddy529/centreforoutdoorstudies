import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Main Pages
import Home from "./pages/Home";

import TideTrail from "./pages/Tide-trail";
import Himayalas from "./pages/Himayalas";
import AboutUs from "./pages/about-us";
import Blog from "./components/blog";
import BlogDetail from "./components/BlogDetail";
import ContactForm from "./components/contact";
import Adventure from "./pages/Adventure";

// Program Pages
import Payaniga from "./pages/payaniga";

// Testimonials
import AdventurerTestimonials from "./components/AdventurerTestimonials";
import PayanigaTestimonials from "./components/PayanigaTestimonials";
import TideTrailTestimonials from "./components/TidetrailTestimonials";
import HimayalasTestimonials from "./components/himayalasTestimonials";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactForm />} />

        {/* Program Pages */}
      
        <Route path="/tide-trail" element={<TideTrail />} />
        <Route path="/himayalas" element={<Himayalas />} />
        <Route path="/payaniga" element={<Payaniga />} />
        <Route path="/adventure" element={<Adventure />} />

        {/* Testimonials */}
        <Route path="/adventurer-testimonials" element={<AdventurerTestimonials />} />
        <Route path="/tide-trail-testimonials" element={<TideTrailTestimonials />} />
        <Route path="/himayalas-testimonials" element={<HimayalasTestimonials />} />
        <Route path="/payaniga-testimonials" element={<PayanigaTestimonials />} />
      </Routes>
    </Router>
  );
}

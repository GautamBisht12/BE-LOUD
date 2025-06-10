"use client";

import { useState } from "react";

import { Mail, Phone, MapPin, Send, Star } from "lucide-react";

// Import components with .jsx extension
import Navbar from "@/components/Navbar.jsx";
import Hero from "@/components/Hero.jsx";
import Clients from "@/components/Clients.jsx";
import Services from "@/components/Services.jsx";
import Projects from "@/components/Projects.jsx";
import Testimonials from "@/components/Testimonials.jsx";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact.jsx";
import ScrollToTop from "@/components/MoveToTop.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Clients Section */}
      <Clients />

      {/* Services Section */}
      <Services />

      {/* Projects Section */}
      <Projects />

      {/* Testimonials Section */}
      <section className="py-20 bg-muted" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our satisfied clients about their experience working
              with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Testimonials
              quote="CineCraft transformed our wedding footage into a cinematic masterpiece. The attention to detail was exceptional!"
              author="Priya Sharma"
              role="Wedding Client"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
            />

            <Testimonials
              quote="Our product videos have seen a 40% increase in engagement since we started working with CineCraft. Truly professional work."
              author="Rahul Mehta"
              role="Marketing Director"
              image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
            />

            <Testimonials
              quote="The motion graphics for our startup pitch were stunning. We secured funding partly because of how professional our presentation looked."
              author="Anjali Gupta"
              role="Startup Founder"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <Footer />

      <ScrollToTop />
    </div>
  );
}

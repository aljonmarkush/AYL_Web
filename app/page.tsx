"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section — Visual Only (No Text, Name, Title, or CTA buttons) */}
      <Hero />

      {/* Reveal Portfolio Owner Information in Scrolling Content Sections */}
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />

      {/* Footer */}
      <Footer />
    </main>
  );
}

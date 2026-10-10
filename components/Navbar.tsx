"use client";

import React, { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolioData";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Section active tracking
      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          const height = sectionEl.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-subtle shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Abstract Monogram / Monogram Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="group flex items-center gap-2.5 focus:outline-none"
          aria-label="Go to top"
        >
          <div
            className={`w-9 h-9 rounded-md flex items-center justify-center font-mono font-bold text-xs tracking-widest transition-all duration-300 ${
              scrolled
                ? "bg-foreground text-background group-hover:bg-electric-blue"
                : "bg-white/10 backdrop-blur-md text-white border border-white/20 group-hover:border-electric-blue group-hover:text-electric-blue"
            }`}
          >
            {portfolioData.owner.monogram}
          </div>
          <span
            className={`font-sans text-xs font-semibold uppercase tracking-widest transition-colors duration-300 ${
              scrolled
                ? "text-foreground group-hover:text-electric-blue"
                : "text-white/80 group-hover:text-white"
            }`}
          >
            Palangeo
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                  scrolled
                    ? isActive
                      ? "text-electric-blue bg-electric-blue/5 font-semibold"
                      : "text-muted hover:text-foreground hover:bg-black/5"
                    : isActive
                    ? "text-white bg-white/15 font-semibold"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-electric-blue" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile Navigation Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled
              ? "text-foreground hover:bg-black/5"
              : "text-white hover:bg-white/10"
          }`}
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Compact Accessible Mobile Overlay Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-subtle shadow-2xl transition-all duration-300">
          <nav className="flex flex-col p-6 space-y-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 text-sm uppercase tracking-wider rounded-lg transition-colors ${
                    isActive
                      ? "bg-electric-blue/10 text-electric-blue font-semibold"
                      : "text-foreground hover:bg-subtle"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-electric-blue" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

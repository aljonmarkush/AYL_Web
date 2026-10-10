"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const { owner } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Monogram & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-md bg-electric-blue text-white flex items-center justify-center font-mono text-xs font-bold">
            {owner.monogram}
          </div>
          <div>
            <span className="font-sans text-xs font-semibold uppercase tracking-widest block text-white">
              {owner.name}
            </span>
            <span className="text-[11px] font-mono text-subtle block">
              {owner.field} • {owner.location}
            </span>
          </div>
        </div>

        {/* Minimalist Subtext */}
        <p className="text-xs font-mono text-subtle text-center">
          © {new Date().getFullYear()} John L. Palangeo. Designed & Engineered with Next.js & Tailwind.
        </p>

        {/* Back to Top CTA */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="group flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-subtle hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
        >
          <span>Top</span>
          <ArrowUp className="w-4 h-4 text-electric-blue group-hover:-translate-y-1 transition-transform" />
        </button>

      </div>
    </footer>
  );
}

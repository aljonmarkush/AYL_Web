"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { MapPin, ArrowUpRight, Terminal, Shield, Sparkles, Layers } from "lucide-react";

export default function About() {
  const { owner } = portfolioData;

  const focusIcons: Record<string, React.ReactNode> = {
    "Full-stack development": <Layers className="w-5 h-5 text-electric-blue" />,
    "Software engineering": <Terminal className="w-5 h-5 text-electric-violet" />,
    "UI/UX design": <Sparkles className="w-5 h-5 text-electric-magenta" />,
    Cybersecurity: <Shield className="w-5 h-5 text-electric-orange" />,
    "Emerging technologies": <ArrowUpRight className="w-5 h-5 text-foreground" />,
  };

  return (
    <section id="about" className="py-28 bg-background text-foreground relative overflow-hidden">
      {/* Subtle background ambient mesh line */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Eyebrow Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-subtle pb-8 mb-16">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-3">
              01 // Profile & Background
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
              John L. <span className="font-semibold text-foreground">Palangeo</span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted">
            <MapPin className="w-4 h-4 text-electric-blue" />
            <span>{owner.location}</span>
          </div>
        </div>

        {/* Editorial Grid Layout - Swiss Typography Style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Oversized Intro Statement */}
          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl md:text-4xl font-light leading-snug tracking-tight text-foreground/90">
              {owner.bio}
            </h3>

            <div className="text-base md:text-lg text-muted leading-relaxed font-normal space-y-4 pt-4 border-t border-subtle/60">
              <p>{owner.extendedBio}</p>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              {owner.metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-mono text-3xl md:text-4xl font-bold tracking-tight text-foreground block">
                    {metric.value}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-muted font-medium block">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Focus Areas & Technical Pillars */}
          <div className="lg:col-span-5 bg-surface border border-subtle p-8 md:p-10 rounded-2xl space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-muted block mb-2">
                Core Specializations
              </span>
              <h4 className="text-xl font-semibold tracking-tight text-foreground">
                Technical Focus Areas
              </h4>
            </div>

            <div className="space-y-4">
              {owner.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="group flex items-center justify-between p-4 rounded-xl bg-background border border-subtle/80 hover:border-electric-blue/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 rounded-lg bg-surface border border-subtle group-hover:bg-electric-blue/10 transition-colors">
                      {focusIcons[area] || <ArrowUpRight className="w-5 h-5 text-electric-blue" />}
                    </div>
                    <span className="text-sm font-medium text-foreground tracking-wide">
                      {area}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-subtle flex items-center justify-between text-xs font-mono text-muted">
              <span>FIELD: {owner.field.toUpperCase()}</span>
              <span>AVAILABLE FOR ROLES</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

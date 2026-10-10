"use client";

import React from "react";
import Image from "next/image";
import { portfolioData } from "@/data/portfolioData";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./Icons";

export default function Contact() {
  const { contact, owner } = portfolioData;

  const socialLinks = [
    {
      name: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: <Mail className="w-5 h-5 text-electric-blue" />,
    },
    {
      name: "GitHub",
      value: "github.com/john-palangeo",
      href: contact.github,
      icon: <GithubIcon className="w-5 h-5 text-electric-violet" />,
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/john-palangeo",
      href: contact.linkedin,
      icon: <LinkedinIcon className="w-5 h-5 text-electric-blue" />,
    },
    {
      name: "Instagram",
      value: "@john_palangeo",
      href: contact.instagram,
      icon: <InstagramIcon className="w-5 h-5 text-electric-magenta" />,
    },
  ];

  return (
    <section id="contact" className="py-28 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Editorial Closing Header */}
        <div className="border-b border-subtle pb-8 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-3">
            05 // Collaboration & Contact
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Let’s Build Something <span className="font-semibold">Extraordinary</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Direct Outreach Links */}
          <div className="lg:col-span-7 space-y-8">
            <p className="text-lg md:text-2xl font-light leading-relaxed text-foreground/90">
              Open for full-stack engineering roles, software projects, cybersecurity consultations, and innovative technological collaborations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name === "Email" ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between p-5 rounded-2xl bg-surface border border-subtle/80 hover:border-electric-blue/40 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-background border border-subtle group-hover:bg-electric-blue/10 transition-colors">
                      {link.icon}
                    </div>
                    <div>
                      <span className="text-xs font-mono uppercase text-muted block">
                        {link.name}
                      </span>
                      <span className="text-sm font-medium text-foreground tracking-tight group-hover:text-electric-blue transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-electric-blue transition-colors" />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-muted pt-4">
              <MapPin className="w-4 h-4 text-electric-blue" />
              <span>{owner.location}</span>
            </div>
          </div>

          {/* Right Column: Replaceable Contact Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-subtle bg-surface shadow-xl">
              <Image
                src={contact.image}
                alt="Contact Showcase"
                fill
                sizes="(max-width: 1200px) 100vw, 800px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="font-mono text-xs uppercase tracking-widest text-electric-blue mb-1">
                  LOCATION & PRESENCE
                </span>
                <h4 className="text-xl font-light text-white">
                  {owner.location}
                </h4>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

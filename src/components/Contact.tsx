'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Send, Globe, Share2, Compass } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Contact() {
  const { owner } = portfolioData;

  const socialLinks = [
    { label: 'Email Inquiries', href: `mailto:${owner.email}`, icon: <Mail className="w-5 h-5 text-blue-500" />, detail: owner.email },
    { label: 'GitHub Repository', href: owner.github, icon: <Globe className="w-5 h-5 text-neutral-900" />, detail: 'github.com/johnpalangeo' },
    { label: 'LinkedIn Network', href: owner.linkedin, icon: <Share2 className="w-5 h-5 text-blue-600" />, detail: 'linkedin.com/in/johnpalangeo' },
    { label: 'Instagram Visuals', href: owner.instagram, icon: <Compass className="w-5 h-5 text-pink-500" />, detail: 'instagram.com/johnpalangeo' },
  ];

  return (
    <section id="contact" className="relative py-32 bg-[#fafafa] text-neutral-900 overflow-hidden border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-3 mb-12"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold">
            05 / Initiate Contact
          </span>
          <div className="h-[1px] w-12 bg-neutral-300" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Headline & Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="text-4xl md:text-7xl font-light tracking-tight text-neutral-950 leading-[1.05]">
              Let’s build something <span className="font-normal italic">extraordinary</span> together.
            </h2>

            <p className="text-lg md:text-xl font-light text-neutral-600 leading-relaxed max-w-xl">
              Open for full-stack engineering collaborations, creative developer opportunities, software architecture consulting, and cybersecurity research.
            </p>

            {/* Email Direct CTA Box */}
            <div className="pt-4">
              <a
                href={`mailto:${owner.email}`}
                className="group inline-flex items-center space-x-4 p-4 pr-8 rounded-full bg-neutral-950 text-white hover:bg-blue-600 transition-colors duration-300 shadow-xl"
              >
                <div className="p-3 rounded-full bg-white/10 text-white">
                  <Send className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <div className="text-left">
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white/80">
                    Direct Email Inquiry
                  </span>
                  <span className="text-sm md:text-base font-medium tracking-tight">
                    {owner.email}
                  </span>
                </div>
              </a>
            </div>

            {/* Replaceable Contact Image */}
            <div className="relative aspect-[16/9] w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-sm mt-8">
              <img
                src="/images/contact.jpg"
                alt="Contact visual section"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent flex items-end p-6">
                <span className="font-mono text-xs text-white/90">
                  Tabuk City, Kalinga, Philippines • {owner.name}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Links & Info Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-4 lg:pl-6 pt-4 lg:pt-0"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold mb-6">
              Connect & Social Profiles
            </h3>

            <div className="space-y-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label.includes('Email') ? '_self' : '_blank'}
                  rel={link.label.includes('Email') ? undefined : 'noopener noreferrer'}
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="p-2.5 rounded-xl bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                      {link.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-neutral-950 group-hover:text-blue-600 transition-colors">
                        {link.label}
                      </h4>
                      <span className="font-mono text-xs text-neutral-400">
                        {link.detail}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

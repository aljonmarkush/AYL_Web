'use client';

import { motion } from 'framer-motion';
import { MapPin, Sparkles, Terminal, Code2, ShieldCheck, Cpu, Layout } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const interestIcons: Record<string, React.ReactNode> = {
  'Full-stack development': <Code2 className="w-4 h-4 text-blue-500" />,
  'Software engineering': <Terminal className="w-4 h-4 text-violet-500" />,
  'UI/UX design': <Layout className="w-4 h-4 text-pink-500" />,
  'Cybersecurity': <ShieldCheck className="w-4 h-4 text-amber-500" />,
  'Emerging technologies': <Cpu className="w-4 h-4 text-cyan-500" />,
};

export default function About() {
  const { owner } = portfolioData;

  return (
    <section id="about" className="relative py-32 bg-[#fafafa] text-neutral-900 overflow-hidden">
      {/* Subtle background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

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
            01 / Profile & Focus
          </span>
          <div className="h-[1px] w-12 bg-neutral-300" />
        </motion.div>

        {/* Editorial Swiss Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Editorial Headline & Location */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-950 leading-[1.1]">
                {owner.name}
              </h2>
              <div className="mt-3 flex items-center space-x-2 text-neutral-600">
                <span className="font-mono text-sm tracking-wide uppercase font-medium text-blue-600">
                  {owner.field}
                </span>
                <span className="text-neutral-300">•</span>
                <span className="flex items-center text-xs font-mono text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 mr-1 text-neutral-400" />
                  {owner.location}
                </span>
              </div>
            </div>

            <p className="text-2xl md:text-3xl font-light text-neutral-800 leading-snug tracking-tight border-l-2 border-neutral-900 pl-6">
              {owner.headline}
            </p>

            <div className="space-y-4 text-neutral-600 text-base md:text-lg leading-relaxed font-normal pt-2">
              {owner.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </motion.div>

          {/* Right Focus & Core Interests Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 space-y-8 lg:pl-6 border-t lg:border-t-0 lg:border-l border-neutral-200/80 pt-8 lg:pt-0"
          >
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-neutral-900 font-bold">
                  Core Specializations
                </h3>
              </div>

              <div className="space-y-3">
                {owner.interests.map((interest, idx) => (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * idx }}
                    className="group flex items-center justify-between p-4 rounded-xl border border-neutral-200/70 bg-white/80 hover:bg-white hover:border-neutral-400 transition-all duration-300 shadow-xs"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-lg bg-neutral-100/80 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                        {interestIcons[interest] || <Sparkles className="w-4 h-4 text-blue-500" />}
                      </div>
                      <span className="text-sm font-medium text-neutral-800 group-hover:text-neutral-950 transition-colors">
                        {interest}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-neutral-400 font-semibold group-hover:text-blue-600 transition-colors">
                      0{idx + 1}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Overview Meta Table */}
            <div className="p-6 rounded-2xl bg-neutral-100/60 border border-neutral-200/60 space-y-4">
              <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-neutral-200/60">
                <span className="text-neutral-500 uppercase">Status</span>
                <span className="flex items-center text-emerald-600 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
                  Available for Innovation
                </span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-neutral-200/60">
                <span className="text-neutral-500 uppercase">Location</span>
                <span className="text-neutral-900 font-medium">{owner.location}</span>
              </div>
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-neutral-500 uppercase">Focus</span>
                <span className="text-neutral-900 font-medium">Software & Security Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

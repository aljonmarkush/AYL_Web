"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { Award, ExternalLink, Calendar, Key, ShieldCheck } from "lucide-react";

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="py-28 bg-surface text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="border-b border-subtle pb-8 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-3">
            04 // Verified Credentials
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Certifications & <span className="font-semibold">Honors</span>
          </h2>
        </div>

        {/* Refined Certification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) => {
            const hasLink = Boolean(cert.verificationUrl);

            const CardContent = (
              <div className="group h-full bg-background border border-subtle/80 hover:border-electric-blue/50 rounded-2xl p-8 flex flex-col justify-between space-y-6 transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-surface border border-subtle text-electric-blue group-hover:bg-electric-blue group-hover:text-white transition-colors">
                      <Award className="w-6 h-6" />
                    </div>
                    {hasLink && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-electric-blue bg-electric-blue/10 px-2.5 py-1 rounded-full border border-electric-blue/20">
                        <span>Verified</span>
                        <ExternalLink className="w-3 h-3" />
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-light tracking-tight text-foreground group-hover:text-electric-blue transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-muted font-mono uppercase tracking-wider">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-muted leading-relaxed font-normal pt-2 border-t border-subtle/60">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-subtle flex flex-wrap items-center justify-between text-xs font-mono text-muted gap-2">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-electric-blue" />
                    {cert.issueDate}
                  </span>
                  {cert.credentialId && (
                    <span className="flex items-center gap-1.5 text-[11px]">
                      <Key className="w-3 h-3 text-muted" />
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            );

            return hasLink ? (
              <a
                key={cert.id}
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full focus:outline-none"
              >
                {CardContent}
              </a>
            ) : (
              <div key={cert.id} className="h-full">
                {CardContent}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

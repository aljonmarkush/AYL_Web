'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

export default function Certifications() {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="relative py-32 bg-white text-neutral-900 border-t border-neutral-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-neutral-200/80"
        >
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                04 / Credentials & Verifications
              </span>
              <div className="h-[1px] w-12 bg-neutral-300" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-950">
              Certifications
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-500 max-w-xs">
            Verified technical certifications, industry credentials, and official accreditation links.
          </p>
        </motion.div>

        {/* Editorial List / Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {certifications.map((cert, index) => {
            const hasLink = Boolean(cert.verificationUrl);

            const CardContent = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative flex flex-col justify-between p-8 rounded-2xl bg-neutral-50/80 border border-neutral-200/80 transition-all duration-300 ${
                  hasLink
                    ? 'hover:bg-white hover:border-neutral-400 hover:shadow-xl cursor-pointer'
                    : 'cursor-default'
                }`}
              >
                <div className="space-y-6">
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-neutral-100 text-neutral-900 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Award className="w-6 h-6" />
                    </div>
                    {hasLink && (
                      <span className="p-2 rounded-full text-neutral-400 group-hover:text-neutral-900 group-hover:bg-neutral-100 transition-colors">
                        <ExternalLink size={18} />
                      </span>
                    )}
                  </div>

                  {/* Cert Title & Issuer */}
                  <div>
                    <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider font-semibold block mb-1">
                      {cert.organization}
                    </span>
                    <h3 className="text-xl font-normal tracking-tight text-neutral-950 group-hover:text-blue-600 transition-colors leading-snug">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {/* Footer Details */}
                <div className="mt-8 pt-4 border-t border-neutral-200/60 space-y-2 text-xs font-mono text-neutral-500">
                  <div className="flex justify-between items-center">
                    <span>Issued</span>
                    <span className="text-neutral-800 font-medium">{cert.issueDate}</span>
                  </div>

                  {cert.credentialId && (
                    <div className="flex justify-between items-center pt-1">
                      <span>Credential ID</span>
                      <span className="text-neutral-800 font-medium truncate max-w-[140px]">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}

                  {hasLink && (
                    <div className="flex items-center text-emerald-600 text-[11px] font-medium pt-2">
                      <CheckCircle2 size={12} className="mr-1" />
                      <span>Official Verification Link</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );

            return hasLink ? (
              <a
                key={cert.id}
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl"
              >
                {CardContent}
              </a>
            ) : (
              <div key={cert.id}>{CardContent}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

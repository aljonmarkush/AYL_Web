'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, User, ArrowRight, Code2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 sm:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.5, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-2xl z-10 flex flex-col"
        >
          {/* Modal Header Bar */}
          <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
            <div className="flex items-center space-x-2">
              <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold">
                {project.category}
              </span>
              <span className="text-neutral-300 dark:text-neutral-700">•</span>
              <span className="font-mono text-xs text-neutral-500">
                {project.year}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 md:p-10 space-y-8">
            {/* Title & Role */}
            <div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-neutral-950 dark:text-white leading-tight mb-3">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-500">
                <span className="flex items-center">
                  <User className="w-3.5 h-3.5 mr-1 text-neutral-400" />
                  {project.role}
                </span>
                <span className="flex items-center">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-neutral-400" />
                  Released {project.year}
                </span>
              </div>
            </div>

            {/* Preview Image */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-neutral-700 dark:text-neutral-300 text-base md:text-lg leading-relaxed font-normal">
              <p>{project.fullDescription}</p>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-3 pt-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-semibold">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-neutral-100 dark:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-neutral-700/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links CTA Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 text-sm font-medium hover:bg-blue-600 dark:hover:bg-blue-500 dark:hover:text-white transition-colors duration-300 shadow-md"
                >
                  <span>Explore Live Demo</span>
                  <ExternalLink size={16} />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 text-sm font-medium hover:border-neutral-900 dark:hover:border-white transition-colors duration-300"
                >
                  <Code2 size={16} />
                  <span>Source Code Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

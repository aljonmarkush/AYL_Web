'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Code2, Eye } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-32 bg-white text-neutral-900">
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
                02 / Selected Works
              </span>
              <div className="h-[1px] w-12 bg-neutral-300" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-950">
              Case Studies & Projects
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-500 max-w-xs">
            A curated showcase of software engineering, UI design, and security architecture projects.
          </p>
        </motion.div>

        {/* Asymmetric Gallery Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {projects.map((project, index) => {
            const isFeatured = project.featured;
            const spanClass = isFeatured ? 'md:col-span-12 lg:col-span-7' : 'md:col-span-6 lg:col-span-5';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`group cursor-pointer ${spanClass}`}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-200/80 transition-all duration-500 group-hover:shadow-xl group-hover:border-neutral-400">
                  {/* Image Container with Zoom hover effect */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neutral-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-neutral-950 text-xs font-mono font-medium shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye size={14} />
                        <span>View Case Study</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs uppercase tracking-widest text-blue-600 font-semibold">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-neutral-400">
                        {project.year}
                      </span>
                    </div>

                    <div className="flex items-start justify-between group/title">
                      <h3 className="text-2xl md:text-3xl font-light text-neutral-950 tracking-tight group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="w-6 h-6 text-neutral-400 group-hover:text-neutral-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 ml-4" />
                    </div>

                    <p className="text-neutral-600 text-sm md:text-base leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[11px] font-mono font-medium rounded-full bg-neutral-200/60 text-neutral-700 border border-neutral-300/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[11px] font-mono text-neutral-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

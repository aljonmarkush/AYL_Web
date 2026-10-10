"use client";

import React, { useState } from "react";
import Image from "next/image";
import { portfolioData, Project } from "@/data/portfolioData";
import ProjectModal from "./ProjectModal";
import { ExternalLink, ArrowUpRight, Sparkles } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const { projects } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    "All",
    "Full-Stack",
    "Software Engineering",
    "UI/UX Design",
    "Cybersecurity",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-28 bg-surface text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header & Editorial Category Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-subtle pb-8 mb-16 gap-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-3">
              02 // Work & Case Studies
            </span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
              Featured <span className="font-semibold">Projects</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-full transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-foreground text-background font-semibold shadow-sm"
                    : "bg-background text-muted border border-subtle hover:text-foreground hover:border-foreground/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Editorial Case Study Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {filteredProjects.map((project, idx) => {
            const isWide = idx % 3 === 0;
            const colSpan = isWide ? "md:col-span-12" : "md:col-span-6";

            return (
              <div
                key={project.id}
                className={`group relative bg-background border border-subtle rounded-2xl overflow-hidden hover:border-electric-blue/50 transition-all duration-500 shadow-sm hover:shadow-xl ${colSpan}`}
              >
                <div
                  className={`grid grid-cols-1 ${
                    isWide ? "lg:grid-cols-12" : ""
                  } items-stretch`}
                >
                  {/* Thumbnail / Image Section */}
                  <div
                    onClick={() => setActiveModalProject(project)}
                    className={`relative overflow-hidden cursor-pointer bg-black/5 ${
                      isWide ? "lg:col-span-7 h-72 sm:h-96 lg:h-auto" : "h-72 sm:h-80"
                    }`}
                  >
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                        <span>Inspect Case Study</span>
                        <ArrowUpRight className="w-4 h-4 text-electric-blue" />
                      </span>
                    </div>
                  </div>

                  {/* Content / Editorial Info Section */}
                  <div
                    className={`p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6 ${
                      isWide ? "lg:col-span-5" : ""
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-3 py-1 rounded-full bg-surface border border-subtle text-electric-blue uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-muted">{project.year}</span>
                      </div>

                      <h3
                        onClick={() => setActiveModalProject(project)}
                        className="text-2xl sm:text-3xl font-light tracking-tight text-foreground group-hover:text-electric-blue transition-colors cursor-pointer"
                      >
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted font-normal leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Tech Badges & Links */}
                    <div className="space-y-6 pt-4 border-t border-subtle">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-[11px] font-mono text-muted bg-surface rounded-md border border-subtle/80"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 text-[11px] font-mono text-muted">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider font-semibold text-foreground hover:text-electric-blue transition-colors"
                        >
                          <span>Case Details</span>
                          <Sparkles className="w-3.5 h-3.5 text-electric-blue" />
                        </button>

                        <div className="flex items-center gap-3">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full text-muted hover:text-foreground hover:bg-subtle transition-colors"
                              aria-label="View Github Repository"
                            >
                              <GithubIcon className="w-4 h-4" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full text-muted hover:text-electric-blue hover:bg-electric-blue/10 transition-colors"
                              aria-label="View Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}

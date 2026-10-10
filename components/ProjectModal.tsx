"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Project } from "@/data/portfolioData";
import { X, ExternalLink, CheckCircle, Calendar, UserCheck } from "lucide-react";
import { GithubIcon } from "./Icons";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-background border border-subtle rounded-2xl shadow-2xl overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 bg-background/90 backdrop-blur-md border-b border-subtle">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
              {project.category}
            </span>
            <span className="text-xs font-mono text-muted">{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-surface text-foreground hover:bg-foreground hover:text-background transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Title & Role */}
          <div className="space-y-2">
            <h3 className="text-3xl md:text-5xl font-light tracking-tight text-foreground">
              {project.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted">
              <span className="flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-electric-blue" />
                {project.role}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-electric-blue" />
                {project.year}
              </span>
            </div>
          </div>

          {/* Project Preview Image */}
          <div className="relative w-full h-64 sm:h-96 rounded-xl overflow-hidden border border-subtle bg-surface">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover"
            />
          </div>

          {/* Detailed Overview */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted">
              Project Overview
            </h4>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-normal">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Engineering Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-subtle">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted">
                Key Highlights & Deliverables
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-surface border border-subtle/70"
                  >
                    <CheckCircle className="w-5 h-5 text-electric-blue flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80 leading-snug">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Pills */}
          <div className="space-y-4 pt-4 border-t border-subtle">
            <h4 className="text-xs font-mono uppercase tracking-widest text-muted">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono bg-surface border border-subtle text-foreground/80 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-subtle">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-electric-blue text-white text-xs font-mono uppercase tracking-wider font-semibold hover:bg-electric-blue/90 transition-colors shadow-md hover:shadow-lg"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-subtle text-foreground text-xs font-mono uppercase tracking-wider font-semibold hover:bg-foreground hover:text-background transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

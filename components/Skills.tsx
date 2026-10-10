"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import {
  Code,
  FileCode,
  FileCode2,
  Atom,
  Globe,
  Palette,
  Server,
  Terminal,
  Database,
  GitBranch,
  ShieldCheck,
  Layout,
  Cpu,
} from "lucide-react";

export default function Skills() {
  const { skillCategories } = portfolioData;

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case "Code":
        return <Code className="w-5 h-5 text-electric-blue" />;
      case "FileCode":
        return <FileCode className="w-5 h-5 text-electric-blue" />;
      case "FileCode2":
        return <FileCode2 className="w-5 h-5 text-electric-blue" />;
      case "Atom":
        return <Atom className="w-5 h-5 text-electric-blue" />;
      case "Globe":
        return <Globe className="w-5 h-5 text-electric-blue" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-electric-violet" />;
      case "Server":
        return <Server className="w-5 h-5 text-electric-violet" />;
      case "Terminal":
        return <Terminal className="w-5 h-5 text-electric-violet" />;
      case "Database":
        return <Database className="w-5 h-5 text-electric-violet" />;
      case "GitBranch":
        return <GitBranch className="w-5 h-5 text-electric-orange" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-electric-orange" />;
      case "Layout":
        return <Layout className="w-5 h-5 text-electric-magenta" />;
      default:
        return <Cpu className="w-5 h-5 text-foreground" />;
    }
  };

  return (
    <section id="skills" className="py-28 bg-background text-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="border-b border-subtle pb-8 mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-electric-blue block mb-3">
            03 // Tech Stack & Proficiency
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-foreground">
            Skills & <span className="font-semibold">Technologies</span>
          </h2>
        </div>

        {/* Categorized Technologies Layout */}
        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title} className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-electric-blue px-2.5 py-1 rounded bg-electric-blue/10 border border-electric-blue/20">
                  CAT 0{catIdx + 1}
                </span>
                <h3 className="text-2xl font-light tracking-tight text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-surface border border-subtle/80 hover:border-electric-blue/40 rounded-2xl p-6 transition-all duration-300 space-y-4 hover:shadow-lg"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="p-2.5 rounded-xl bg-background border border-subtle group-hover:bg-electric-blue/10 transition-colors">
                        {getSkillIcon(skill.iconName)}
                      </div>
                      <span className="font-mono text-xs text-muted">
                        {skill.level}%
                      </span>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground tracking-tight group-hover:text-electric-blue transition-colors">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted leading-relaxed font-normal mt-1">
                        {skill.description}
                      </p>
                    </div>

                    {/* Minimalist Proficiency Bar */}
                    <div className="pt-2">
                      <div className="w-full h-1.5 bg-subtle/60 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground group-hover:bg-electric-blue transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

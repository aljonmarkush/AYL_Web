'use client';

import { motion } from 'framer-motion';
import {
  Code,
  FileCode,
  FileSpreadsheet,
  Atom,
  Layers,
  Palette,
  Server,
  Terminal,
  Database,
  GitBranch,
  Cpu,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-5 h-5 text-blue-500" />,
  FileCode: <FileCode className="w-5 h-5 text-amber-500" />,
  FileSpreadsheet: <FileSpreadsheet className="w-5 h-5 text-blue-600" />,
  Atom: <Atom className="w-5 h-5 text-cyan-500" />,
  Layers: <Layers className="w-5 h-5 text-neutral-900 dark:text-white" />,
  Palette: <Palette className="w-5 h-5 text-teal-500" />,
  Server: <Server className="w-5 h-5 text-indigo-500" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-500" />,
  Database: <Database className="w-5 h-5 text-blue-700" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
};

export default function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="relative py-32 bg-[#fafafa] text-neutral-900 border-t border-neutral-200/80">
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
                03 / Engineering Stack
              </span>
              <div className="h-[1px] w-12 bg-neutral-300" />
            </div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-950">
              Skills & Technologies
            </h2>
          </div>
          <p className="mt-4 md:mt-0 font-mono text-xs text-neutral-500 max-w-xs">
            Categorized technical stack and proficiency indicators across full-stack development and infrastructure.
          </p>
        </motion.div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {skillCategories.map((categoryGroup, groupIdx) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: groupIdx * 0.1 }}
              className="space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200">
                <h3 className="font-mono text-sm uppercase tracking-wider text-neutral-950 font-bold flex items-center">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2.5" />
                  {categoryGroup.category}
                </h3>
                <p className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0">
                  {categoryGroup.description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryGroup.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                    className="group flex items-center justify-between p-4 rounded-xl bg-white border border-neutral-200/80 hover:border-neutral-400 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3.5">
                      <div className="p-2.5 rounded-lg bg-neutral-100 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
                        {iconMap[skill.iconName] || <Cpu className="w-5 h-5 text-blue-500" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-neutral-950 group-hover:text-blue-600 transition-colors">
                          {skill.name}
                        </h4>
                        <span className="font-mono text-[11px] text-neutral-400">
                          {skill.level} Proficiency
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-1">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-blue-600' : 'bg-blue-400'
                        }`}
                      />
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          skill.level === 'Advanced' ? 'bg-blue-600' : 'bg-neutral-300'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

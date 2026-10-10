'use client';

import { portfolioData } from '@/data/portfolioData';

export default function Footer() {
  const { owner } = portfolioData;

  return (
    <footer className="py-12 bg-neutral-950 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-neutral-400 space-y-4 md:space-y-0">
        <div>
          <span>© {new Date().getFullYear()} {owner.name}. All rights reserved.</span>
        </div>

        <div className="flex items-center space-x-6">
          <span>{owner.location}</span>
          <span>•</span>
          <a href="#hero" className="hover:text-white transition-colors">
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

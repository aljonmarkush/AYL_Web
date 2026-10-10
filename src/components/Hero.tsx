'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  vRotation: number;
  length: number;
  type: 'dash' | 'dot' | 'square';
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  color: string;
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageLoaded, setImageLoaded] = useState(true);

  // Parallax / Scroll animations for hero to next section
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 600], [1, 1.05]);
  const heroY = useTransform(scrollY, [0, 600], [0, 150]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Google Antigravity inspired particle palette
    const colors = [
      '#0066ff', // Electric Blue
      '#8b5cf6', // Violet
      '#ec4899', // Magenta
      '#f97316', // Orange
      '#38bdf8', // Light Cyan
      '#ffffff', // Soft White
    ];

    // Generate floating dashes and particles
    const particleCount = Math.min(Math.floor((width * height) / 12000), 70);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * Math.PI * 2,
        vRotation: (Math.random() - 0.5) * 0.02,
        length: Math.random() * 12 + 6,
        type: Math.random() > 0.4 ? 'dash' : Math.random() > 0.5 ? 'dot' : 'square',
      });
    }

    const ripples: Ripple[] = [];

    const addRipple = (x: number, y: number) => {
      ripples.push({
        x,
        y,
        radius: 0,
        maxRadius: Math.min(width, height) * 0.25,
        alpha: 0.6,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      let clientX = 0;
      let clientY = 0;

      if ('touches' in e) {
        if (e.touches.length > 0) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        }
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }

      // Trigger ripple periodically
      if (Math.random() < 0.3) {
        addRipple(clientX, clientY);
      }

      // Antigravity mouse push effect on nearby particles
      particles.forEach((p) => {
        const dx = p.x - clientX;
        const dy = p.y - clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist && dist > 0) {
          const force = ((maxDist - dist) / maxDist) * 1.5;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      });
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('click', (e) => addRipple(e.clientX, e.clientY));

    // Animation Loop
    let lastTime = performance.now();

    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      // Render & Update Ripples (Fluid wave effect)
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += (r.maxRadius - r.radius) * 0.05 + 1;
        r.alpha -= 0.012;

        if (r.alpha <= 0 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = r.color;
        ctx.lineWidth = 1.5;
        ctx.globalAlpha = Math.max(0, r.alpha);
        ctx.stroke();
        ctx.restore();
      }

      // Render & Update Antigravity Particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.vRotation;

        // Friction / drag
        p.vx *= 0.98;
        p.vy *= 0.98;

        // Subtle ambient buoyancy
        p.vy -= 0.05;

        // Wrap around screen edges smoothly
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.color;
        ctx.strokeStyle = p.color;
        ctx.globalAlpha = 0.7;

        if (p.type === 'dash') {
          ctx.lineWidth = p.size;
          ctx.beginPath();
          ctx.moveTo(-p.length / 2, 0);
          ctx.lineTo(p.length / 2, 0);
          ctx.stroke();
        } else if (p.type === 'square') {
          ctx.fillRect(-p.size, -p.size, p.size * 2, p.size * 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-screen h-screen overflow-hidden bg-black select-none"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* Background Image Container with Framer Motion Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Full-screen background image from /images/hero.jpg */}
        <img
          src="/images/hero.jpg"
          alt="Hero Visual Background"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105 transition-opacity duration-1000"
          onError={() => setImageLoaded(false)}
        />

        {/* Fallback generative gradient overlay if image fails or for depth */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black" />
        )}

        {/* Minimal aesthetic gradient vignetting for cinematic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </motion.div>

      {/* Interactive Generative Antigravity Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10 w-full h-full pointer-events-none"
      />

      {/* Cinematic Visual Scroll Indicator - Strictly Visual Only (No text) */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        style={{ opacity: heroOpacity }}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-[0_0_12px_rgba(255,255,255,0.8)] mt-2 animate-bounce" />
      </motion.div>
    </section>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  width: number;
  angle: number;
  color: string;
  alpha: number;
  rotationSpeed: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rippleCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Smooth scroll handler to scroll past hero
  const handleScrollDown = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    // --- 1. Interactive Particle Canvas (Google Antigravity Floating Dashes) ---
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const colors = [
      "#0066FF", // Electric Blue
      "#7C3AED", // Violet
      "#EC4899", // Magenta
      "#FF5722", // Orange
      "#FFFFFF", // Pure White
      "#A1A1AA", // Slate
    ];

    const particles: Particle[] = [];
    const numParticles = Math.min(Math.floor((width * height) / 18000), 70);

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        length: Math.random() * 14 + 6,
        width: Math.random() * 2.5 + 1,
        angle: Math.random() * Math.PI * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;
    let lastMouseX = -1000;
    let lastMouseY = -1000;
    let mouseSpeedX = 0;
    let mouseSpeedY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      mouseSpeedX = currentX - (lastMouseX === -1000 ? currentX : lastMouseX);
      mouseSpeedY = currentY - (lastMouseY === -1000 ? currentY : lastMouseY);

      mouseX = currentX;
      mouseY = currentY;

      lastMouseX = currentX;
      lastMouseY = currentY;

      // Trigger ripple
      addRipple(currentX, currentY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        const currentX = touch.clientX - rect.left;
        const currentY = touch.clientY - rect.top;

        mouseX = currentX;
        mouseY = currentY;

        addRipple(currentX, currentY);
      }
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      if (rippleCanvasRef.current) {
        rippleCanvasRef.current.width = width;
        rippleCanvasRef.current.height = height;
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // --- 2. Interactive Ripple Effect ---
    interface Ripple {
      x: number;
      y: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }
    const ripples: Ripple[] = [];

    const addRipple = (x: number, y: number) => {
      if (ripples.length > 15) ripples.shift();
      ripples.push({
        x,
        y,
        radius: 2,
        maxRadius: Math.random() * 80 + 40,
        alpha: 0.6,
        speed: Math.random() * 2 + 2,
      });
    };

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render & update ripples
      const rCanvas = rippleCanvasRef.current;
      if (rCanvas) {
        const rCtx = rCanvas.getContext("2d");
        if (rCtx) {
          rCtx.clearRect(0, 0, width, height);

          for (let i = ripples.length - 1; i >= 0; i--) {
            const r = ripples[i];
            r.radius += r.speed;
            r.alpha *= 0.94;

            rCtx.beginPath();
            rCtx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            rCtx.strokeStyle = `rgba(0, 102, 255, ${r.alpha})`;
            rCtx.lineWidth = 1.5;
            rCtx.stroke();

            // Inner cyan ring
            rCtx.beginPath();
            rCtx.arc(r.x, r.y, r.radius * 0.7, 0, Math.PI * 2);
            rCtx.strokeStyle = `rgba(124, 58, 237, ${r.alpha * 0.5})`;
            rCtx.lineWidth = 1;
            rCtx.stroke();

            if (r.alpha < 0.01 || r.radius >= r.maxRadius) {
              ripples.splice(i, 1);
            }
          }
        }
      }

      // Decay mouse speed influence
      mouseSpeedX *= 0.92;
      mouseSpeedY *= 0.92;

      // Update & render Antigravity particles
      particles.forEach((p) => {
        // Natural float
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.rotationSpeed;

        // Interactive gravity / push from cursor
        const dx = p.x - mouseX;
        const dy = p.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180;

        if (dist < maxDist) {
          const force = (1 - dist / maxDist) * 3;
          const angle = Math.atan2(dy, dx);
          p.x += Math.cos(angle) * force + mouseSpeedX * 0.05;
          p.y += Math.sin(angle) * force + mouseSpeedY * 0.05;
          p.angle += 0.05;
        }

        // Screen boundaries warp
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        if (p.y > height + 20) p.y = -20;

        // Draw dash particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;

        // Rounded dash pill
        ctx.beginPath();
        ctx.roundRect(
          -p.length / 2,
          -p.width / 2,
          p.length,
          p.width,
          p.width / 2
        );
        ctx.fill();

        // Subtle electric glow
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 8;

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-screen h-screen overflow-hidden bg-black select-none"
      aria-label="Visual Interactive Hero"
    >
      {/* 1. Full-screen background image loaded from /images/hero.jpg */}
      <div className="absolute inset-0 w-full h-full z-0 transition-opacity duration-1000">
        <Image
          src="/images/hero.jpg"
          alt="Minimalist Futuristic Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          onLoad={() => setImageLoaded(true)}
        />
        {/* Subtle ambient overlay to maintain contrast across image variations */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />
      </div>

      {/* 2. Interactive Fluid Ripple Distortion Canvas Overlay */}
      <canvas
        ref={rippleCanvasRef}
        className="absolute inset-0 z-10 pointer-events-none w-full h-full"
      />

      {/* 3. Google Antigravity Floating Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-20 pointer-events-none w-full h-full"
      />

      {/* 4. Minimalist Scroll Cue - Purely visual non-button animated indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 pointer-events-none flex flex-col items-center">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1 backdrop-blur-sm">
          <div className="w-1.5 h-2.5 rounded-full bg-electric-blue animate-bounce mt-1" />
        </div>
      </div>

      {/* Note: Strictly NO name, job title, intro text, headings, buttons, or CTA overlays in the hero section. Purely visual experience. */}
    </section>
  );
}

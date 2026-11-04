/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

interface CorporateHeroProps {
  onExploreBusinesses: () => void;
  onCorporateGovernance: () => void;
}

export const CorporateHero: React.FC<CorporateHeroProps> = ({
  onExploreBusinesses,
  onCorporateGovernance,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle, restrained ambient lighting and network pulses (respects reduced motion)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Subtle AI governance nodes aligned with architectural artwork
    const networkNodes = [
      { x: 0.35, y: 0.62, radius: 3.2, pulsePhase: 0 },
      { x: 0.38, y: 0.58, radius: 2.2, pulsePhase: 1.2 },
      { x: 0.32, y: 0.66, radius: 2.6, pulsePhase: 2.4 },
      { x: 0.42, y: 0.64, radius: 2.0, pulsePhase: 3.6 },
      { x: 0.46, y: 0.55, radius: 2.8, pulsePhase: 4.8 },
      { x: 0.54, y: 0.48, radius: 2.2, pulsePhase: 1.8 },
      { x: 0.60, y: 0.42, radius: 3.0, pulsePhase: 3.0 },
      { x: 0.67, y: 0.38, radius: 2.6, pulsePhase: 0.6 },
    ];

    const streams = Array.from({ length: 10 }, (_, i) => ({
      progress: Math.random(),
      speed: 0.0010 + Math.random() * 0.0012,
      lane: i,
    }));

    let t = 0;

    const render = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        t += 0.014;
      }

      // Subtle fine connection lines
      ctx.lineWidth = 0.7;
      for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
          const n1 = networkNodes[i];
          const n2 = networkNodes[j];
          const x1 = n1.x * w;
          const y1 = n1.y * h;
          const x2 = n2.x * w;
          const y2 = n2.y * h;
          const dist = Math.hypot(x2 - x1, y2 - y1);
          if (dist < w * 0.20) {
            const alpha = (1 - dist / (w * 0.20)) * 0.18;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(197, 164, 109, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Gentle gold & cyan pulses along pathways
      streams.forEach((st) => {
        if (!prefersReducedMotion) {
          st.progress = (st.progress + st.speed) % 1;
        }
        const srcNode = networkNodes[st.lane % networkNodes.length];
        const dstNode = networkNodes[(st.lane + 1) % networkNodes.length];
        const px = srcNode.x * w + (dstNode.x * w - srcNode.x * w) * st.progress;
        const py = srcNode.y * h + (dstNode.y * h - srcNode.y * h) * st.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = st.lane % 2 === 0 ? 'rgba(223, 202, 158, 0.7)' : 'rgba(56, 189, 248, 0.7)';
        ctx.shadowColor = st.lane % 2 === 0 ? '#C5A46D' : '#38bdf8';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Ambient node beacons
      networkNodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const pulse = Math.sin(t * 1.8 + node.pulsePhase) * 0.5 + 0.5;

        ctx.beginPath();
        ctx.arc(nx, ny, node.radius * (1.4 + pulse * 0.8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(197, 164, 109, ${0.22 * (1 - pulse * 0.5)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(nx, ny, node.radius * 0.9, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();
      });

      // Subtle architectural lighting sheen
      const sheenX = (Math.sin(t * 0.4) * 0.2 + 0.5) * w;
      const grad = ctx.createLinearGradient(sheenX - 50, 0, sheenX + 50, 0);
      grad.addColorStop(0, 'rgba(197, 164, 109, 0)');
      grad.addColorStop(0.5, 'rgba(197, 164, 109, 0.03)');
      grad.addColorStop(1, 'rgba(197, 164, 109, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1324] via-[#101D35] to-[#0A1324] text-white border-b border-[#C5A46D]/20">
      {/* Background ambient lighting */}
      <div
        className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#C5A46D]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Main 1360px Container with 64-80px vertical padding */}
      <div className="relative z-10 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 w-full">
          
          {/* ================================================================= */}
          {/* Left Column: 45% content width — All text and buttons             */}
          {/* Vertically centered, balanced spacing, no empty dead zones        */}
          {/* ================================================================= */}
          <div className="w-full lg:w-[45%] flex flex-col justify-center space-y-6 z-20 shrink-0">
            
            {/* 1. Small Heading: Exactly 12-13px Montserrat */}
            <div className="flex items-center gap-2 text-[12px] sm:text-[13px] font-bold tracking-widest text-[#C5A46D] uppercase">
              <span>DESTRIA GROUP INC.</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300 font-medium">NAICS 551114</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span className="text-slate-300 font-medium">SHERIDAN, WY</span>
            </div>

            {/* 2. Main Headline: 48-56px desktop, 1.1 line-height */}
            {/* White for first line, metallic gold for second line */}
            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.1]">
              <span className="block text-white">A Diversified</span>
              <span className="block gold-gradient-text mt-1">Holding Corporation</span>
            </h1>

            {/* 3. Supporting Paragraph: 16-18px, 1.6 line-height, max-width 520px */}
            <p className="text-base sm:text-[17px] text-slate-200 font-normal leading-[1.6] max-w-[520px]">
              Building and managing strategic enterprises through disciplined capital management, technology innovation, and responsible corporate governance.
            </p>

            {/* 4. Action Buttons: Same horizontal row on desktop, equal height ~48px, 12-16px gap */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-1">
              <button
                onClick={onExploreBusinesses}
                className="h-12 min-h-[48px] px-6 sm:px-7 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] bg-[#C5A46D] hover:bg-[#DFCA9E] rounded-lg transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 text-[#101D35]" />
              </button>

              <button
                onClick={onCorporateGovernance}
                className="h-12 min-h-[48px] px-6 sm:px-7 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C5A46D] bg-[#101D35]/90 hover:bg-[#1A2E50] border border-white/30 hover:border-[#C5A46D] rounded-lg transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <span>Corporate Governance</span>
              </button>
            </div>

          </div>

          {/* ================================================================= */}
          {/* Right Column: 55% imagery width — Preserved corporate visual       */}
          {/* Full width within column, original aspect ratio, vertical center  */}
          {/* ================================================================= */}
          <div className="w-full lg:w-[55%] relative flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden border border-[#C5A46D]/25 shadow-2xl bg-[#091527] group">
              
              {/* Preserved Glass HQ & Digital Globe Image */}
              <img
                src={assetUrl('/images/corporate/hero_holding_ai_hq.jpg')}
                alt="DESTRIA GROUP INC. Multinational Corporate Headquarters and AI-Assisted Intelligence Networks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-[1.01]"
                loading="eager"
              />

              {/* Edge subtle vignetting */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/40 via-transparent to-[#0A1324]/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Subtle metallic hairline inner border */}
              <div
                className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Subtle seamless canvas motion overlay */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-10"
                aria-hidden="true"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

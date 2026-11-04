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

  // Subtle cinematic motion overlay (respects prefers-reduced-motion)
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

    // Subtle AI governance nodes & flowing financial network pulses
    const networkNodes = [
      { x: 0.35, y: 0.62, radius: 3.5, pulsePhase: 0, label: 'Capital Node' },
      { x: 0.38, y: 0.58, radius: 2.5, pulsePhase: 1.2 },
      { x: 0.32, y: 0.66, radius: 2.8, pulsePhase: 2.4 },
      { x: 0.42, y: 0.64, radius: 2.2, pulsePhase: 3.6 },
      { x: 0.46, y: 0.55, radius: 3.0, pulsePhase: 4.8 },
      { x: 0.54, y: 0.48, radius: 2.5, pulsePhase: 1.8 },
      { x: 0.60, y: 0.42, radius: 3.2, pulsePhase: 3.0 },
      { x: 0.67, y: 0.38, radius: 2.8, pulsePhase: 0.6 },
    ];

    const streams = Array.from({ length: 14 }, (_, i) => ({
      progress: Math.random(),
      speed: 0.0012 + Math.random() * 0.0016,
      lane: i,
    }));

    let t = 0;

    const render = () => {
      if (!ctx || !canvas) return;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      if (!prefersReducedMotion) {
        t += 0.016;
      }

      // Draw subtle luminous connections between nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < networkNodes.length; i++) {
        for (let j = i + 1; j < networkNodes.length; j++) {
          const n1 = networkNodes[i];
          const n2 = networkNodes[j];
          const x1 = n1.x * w;
          const y1 = n1.y * h;
          const x2 = n2.x * w;
          const y2 = n2.y * h;
          const dist = Math.hypot(x2 - x1, y2 - y1);
          if (dist < w * 0.22) {
            const alpha = (1 - dist / (w * 0.22)) * 0.22;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = `rgba(197, 164, 109, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw flowing gold & cyan light pulses along pathways
      streams.forEach((st) => {
        if (!prefersReducedMotion) {
          st.progress = (st.progress + st.speed) % 1;
        }
        const srcNode = networkNodes[st.lane % networkNodes.length];
        const dstNode = networkNodes[(st.lane + 1) % networkNodes.length];
        const px = srcNode.x * w + (dstNode.x * w - srcNode.x * w) * st.progress;
        const py = srcNode.y * h + (dstNode.y * h - srcNode.y * h) * st.progress;

        ctx.beginPath();
        ctx.arc(px, py, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = st.lane % 2 === 0 ? 'rgba(223, 202, 158, 0.75)' : 'rgba(56, 189, 248, 0.75)';
        ctx.shadowColor = st.lane % 2 === 0 ? '#C5A46D' : '#38bdf8';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw pulsating node beacons
      networkNodes.forEach((node) => {
        const nx = node.x * w;
        const ny = node.y * h;
        const pulse = Math.sin(t * 2.2 + node.pulsePhase) * 0.5 + 0.5;

        // Subtle outer pulse ring
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius * (1.6 + pulse * 1.2), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(197, 164, 109, ${0.28 * (1 - pulse * 0.5)})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Node center
        ctx.beginPath();
        ctx.arc(nx, ny, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.fill();
      });

      // Subtle architectural lighting sheen
      const sheenX = (Math.sin(t * 0.5) * 0.2 + 0.5) * w;
      const grad = ctx.createLinearGradient(sheenX - 60, 0, sheenX + 60, 0);
      grad.addColorStop(0, 'rgba(197, 164, 109, 0)');
      grad.addColorStop(0.5, 'rgba(197, 164, 109, 0.04)');
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

      {/* Main 1440px Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-16 lg:py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
          
          {/* ================================================================= */}
          {/* Left Column: 42% content width — Clean, distinct, single instance  */}
          {/* ================================================================= */}
          <div className="w-full lg:w-[42%] flex flex-col justify-center space-y-6 sm:space-y-7 z-20">
            
            {/* Institutional Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wider text-slate-300 uppercase">
              <span className="text-white font-bold tracking-widest">DESTRIA GROUP INC.</span>
              <span aria-hidden="true" className="text-[#C5A46D]">·</span>
              <span className="text-slate-300 font-mono">NAICS 551114</span>
              <span aria-hidden="true" className="text-[#C5A46D]">·</span>
              <span className="text-slate-300">SHERIDAN, WY</span>
            </div>

            {/* Corporate Headline: Clear, authoritative, and text-balanced */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.12]">
                <span className="block text-white">DESTRIA GROUP INC.</span>
                <span className="block gold-gradient-text mt-1 text-2xl sm:text-3xl lg:text-[2.6rem]">
                  A Diversified Holding Corporation
                </span>
              </h1>
            </div>

            {/* Corporate Message */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
              Building, managing, and growing strategic enterprises through disciplined capital management, technology innovation, and responsible corporate governance.
            </p>

            {/* Two Action Buttons with clear white & metallic-gold styling */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onExploreBusinesses}
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101D35] bg-[#C5A46D] hover:bg-[#DFCA9E] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="w-4 h-4 text-[#101D35]" />
              </button>

              <button
                onClick={onCorporateGovernance}
                className="flex items-center gap-2 px-6 sm:px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C5A46D] bg-[#101D35]/90 hover:bg-[#1A2E50] border border-white/30 hover:border-[#C5A46D] rounded-md transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm active:scale-[0.98]"
              >
                <span>Corporate Governance</span>
              </button>
            </div>

          </div>

          {/* ================================================================= */}
          {/* Right Column: 58% imagery width — Pure visual focal point          */}
          {/* Free of floating panels, fake numbers, and overlaid HTML text     */}
          {/* ================================================================= */}
          <div className="w-full lg:w-[58%] relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-[#C5A46D]/30 shadow-2xl bg-[#091527] group">
              
              {/* Primary High-Resolution Architectural & AI Governance Artwork */}
              <img
                src={assetUrl('/images/corporate/hero_holding_ai_hq.jpg')}
                alt="DESTRIA GROUP INC. Multinational Corporate Headquarters and AI-Assisted Intelligence Networks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                loading="eager"
              />

              {/* Edge vignetting for clean integration with navy canvas */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/40 via-transparent to-[#0A1324]/20 pointer-events-none"
                aria-hidden="true"
              />

              {/* Subtle metallic hairline inner border */}
              <div
                className="absolute inset-0 rounded-2xl border border-white/10 pointer-events-none"
                aria-hidden="true"
              />

              {/* Seamless canvas motion overlay for subtle network pulses */}
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

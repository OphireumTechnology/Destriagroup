/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';

export const HeroAnimationCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 750);

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 1. Digital Globe Parameters
    // Positioned in the upper center/right sky: ~58% width, ~28% height on desktop
    // -------------------------------------------------------------
    let globeAngle = 0;
    const globeRadiusFactor = 0.16; // proportional to width/height

    // Simulated 3D points on sphere for rotating globe dots
    interface SpherePoint {
      lat: number;
      lon: number;
      size: number;
      isHub: boolean;
      pulsePhase: number;
    }

    const globePoints: SpherePoint[] = [];
    const numPoints = 85;
    for (let i = 0; i < numPoints; i++) {
      // Golden spiral distribution on sphere
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = 2.39996323 * i; // golden angle
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      
      const lat = Math.asin(y);
      const lon = Math.atan2(z, x);
      globePoints.push({
        lat,
        lon,
        size: (i % 7 === 0) ? 2.5 : 1.2,
        isHub: i % 7 === 0,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // -------------------------------------------------------------
    // 2. Financial Technology Ascending Data Particles
    // Particles flowing smoothly upward along the financial growth curve
    // -------------------------------------------------------------
    interface FinParticle {
      progress: number; // 0 to 1
      speed: number;
      offsetY: number;
      size: number;
      opacity: number;
    }

    const finParticles: FinParticle[] = Array.from({ length: 18 }, () => ({
      progress: Math.random(),
      speed: 0.0015 + Math.random() * 0.002,
      offsetY: (Math.random() - 0.5) * 16,
      size: 1.5 + Math.random() * 1.5,
      opacity: 0.4 + Math.random() * 0.5
    }));

    // -------------------------------------------------------------
    // 3. AI Circuit Packet Pulses
    // Data pulses traveling down circuit lines from AI processor
    // -------------------------------------------------------------
    interface CircuitPulse {
      t: number;
      speed: number;
      lineIdx: number;
    }

    const circuitPulses: CircuitPulse[] = [
      { t: 0.1, speed: 0.008, lineIdx: 0 },
      { t: 0.4, speed: 0.007, lineIdx: 1 },
      { t: 0.7, speed: 0.009, lineIdx: 2 },
      { t: 0.2, speed: 0.006, lineIdx: 3 }
    ];

    // Building light shimmer phase
    let buildingSheenX = 0;

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Disable or freeze active animation if prefers-reduced-motion
      if (!prefersReducedMotion) {
        globeAngle += 0.0035;
        buildingSheenX = (buildingSheenX + 0.3) % (width + 400);
      }

      // Proportional centers
      const isMobile = width < 768;
      const globeCenterX = isMobile ? width * 0.75 : width * 0.58;
      const globeCenterY = isMobile ? height * 0.28 : height * 0.32;
      const globeRadius = Math.max(70, Math.min(width, height) * globeRadiusFactor);

      // -----------------------------------------------------------
      // A. Digital Globe Rendering
      // -----------------------------------------------------------
      // Soft ambient blue glow behind globe
      const globeGlow = ctx.createRadialGradient(
        globeCenterX,
        globeCenterY,
        globeRadius * 0.2,
        globeCenterX,
        globeCenterY,
        globeRadius * 1.6
      );
      globeGlow.addColorStop(0, 'rgba(56, 189, 248, 0.16)');
      globeGlow.addColorStop(0.6, 'rgba(14, 165, 233, 0.06)');
      globeGlow.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = globeGlow;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius * 1.6, 0, Math.PI * 2);
      ctx.fill();

      // Outer delicate orbital ring
      ctx.save();
      ctx.translate(globeCenterX, globeCenterY);
      ctx.rotate(-0.25);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.35, globeRadius * 0.45, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(197, 164, 109, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Rotating Globe Points
      const projectedHubs: { x: number; y: number; z: number }[] = [];

      globePoints.forEach(pt => {
        const currentLon = pt.lon + globeAngle;
        const x3d = Math.cos(pt.lat) * Math.sin(currentLon);
        const y3d = Math.sin(pt.lat);
        const z3d = Math.cos(pt.lat) * Math.cos(currentLon); // +z toward viewer

        // Only draw points on visible front hemisphere
        if (z3d > -0.15) {
          const px = globeCenterX + x3d * globeRadius;
          const py = globeCenterY - y3d * globeRadius;
          const depthAlpha = Math.max(0.1, (z3d + 0.15) / 1.15);

          if (pt.isHub) {
            projectedHubs.push({ x: px, y: py, z: z3d });
            // Pulsing hub ring
            const pulse = Math.sin(time * 0.003 + pt.pulsePhase) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(px, py, pt.size * (1 + pulse * 0.8), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${0.7 * depthAlpha})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, pt.size * 2.2, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(223, 202, 158, ${0.4 * pulse * depthAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(px, py, pt.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(186, 230, 253, ${0.5 * depthAlpha})`;
            ctx.fill();
          }
        }
      });

      // Connect visible hubs with subtle network vectors
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const h1 = projectedHubs[i];
          const h2 = projectedHubs[j];
          const dist = Math.hypot(h1.x - h2.x, h1.y - h2.y);
          if (dist < globeRadius * 0.85 && h1.z > 0.1 && h2.z > 0.1) {
            ctx.beginPath();
            ctx.moveTo(h1.x, h1.y);
            ctx.lineTo(h2.x, h2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.2 * (1 - dist / (globeRadius * 0.85))})`;
            ctx.stroke();
          }
        }
      }

      // -----------------------------------------------------------
      // B. AI Processor Core Pulses & Circuit Conduits
      // Located at the center-right of the globe
      // -----------------------------------------------------------
      const chipX = globeCenterX + globeRadius * 0.55;
      const chipY = globeCenterY + globeRadius * 0.25;

      // Chip breathing pulse
      const chipPulse = Math.sin(time * 0.0025) * 0.5 + 0.5;
      const chipGlow = ctx.createRadialGradient(chipX, chipY, 2, chipX, chipY, 28);
      chipGlow.addColorStop(0, `rgba(56, 189, 248, ${0.5 + chipPulse * 0.3})`);
      chipGlow.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = chipGlow;
      ctx.beginPath();
      ctx.arc(chipX, chipY, 28, 0, Math.PI * 2);
      ctx.fill();

      // Circuit Trace Lines
      const circuitLines = [
        [ { x: chipX + 16, y: chipY }, { x: chipX + 60, y: chipY }, { x: chipX + 90, y: chipY - 30 } ],
        [ { x: chipX - 16, y: chipY }, { x: chipX - 45, y: chipY }, { x: chipX - 70, y: chipY + 40 } ],
        [ { x: chipX, y: chipY + 16 }, { x: chipX, y: chipY + 50 }, { x: chipX + 35, y: chipY + 80 } ],
        [ { x: chipX, y: chipY - 16 }, { x: chipX, y: chipY - 45 }, { x: chipX - 40, y: chipY - 70 } ]
      ];

      ctx.lineWidth = 1;
      circuitLines.forEach((pts, idx) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let k = 1; k < pts.length; k++) {
          ctx.lineTo(pts[k].x, pts[k].y);
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.25)';
        ctx.stroke();

        // Terminal node
        const lastPt = pts[pts.length - 1];
        ctx.beginPath();
        ctx.arc(lastPt.x, lastPt.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(223, 202, 158, 0.6)';
        ctx.fill();
      });

      // Animate packet pulses along circuits
      circuitPulses.forEach(cp => {
        if (!prefersReducedMotion) {
          cp.t = (cp.t + cp.speed) % 1;
        }
        const line = circuitLines[cp.lineIdx];
        if (line) {
          // Linear interpolation across segments
          const seg1Len = Math.hypot(line[1].x - line[0].x, line[1].y - line[0].y);
          const seg2Len = Math.hypot(line[2].x - line[1].x, line[2].y - line[1].y);
          const totalLen = seg1Len + seg2Len;
          const targetDist = cp.t * totalLen;

          let px = line[0].x;
          let py = line[0].y;
          if (targetDist <= seg1Len) {
            const r = targetDist / seg1Len;
            px = line[0].x + (line[1].x - line[0].x) * r;
            py = line[0].y + (line[1].y - line[0].y) * r;
          } else {
            const r = (targetDist - seg1Len) / seg2Len;
            px = line[1].x + (line[2].x - line[1].x) * r;
            py = line[1].y + (line[2].y - line[1].y) * r;
          }

          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.85)';
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 4;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      });

      // -----------------------------------------------------------
      // C. Ascending Financial Technology Gold Light Trails
      // Rising vectors from center toward right building
      // -----------------------------------------------------------
      const finStartX = globeCenterX - globeRadius * 0.4;
      const finEndX = isMobile ? width * 0.95 : width * 0.78;
      const finStartY = globeCenterY + globeRadius * 1.05;
      const finEndY = globeCenterY + globeRadius * 0.45;

      // Ascending Guide Curve: Quadratic Bezier
      const finControlX = (finStartX + finEndX) * 0.5;
      const finControlY = finStartY - 10;

      // Draw subtle gold ascending curve
      ctx.beginPath();
      ctx.moveTo(finStartX, finStartY);
      ctx.quadraticCurveTo(finControlX, finControlY, finEndX, finEndY);
      ctx.strokeStyle = 'rgba(197, 164, 109, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Flowing gold particles along curve
      finParticles.forEach(fp => {
        if (!prefersReducedMotion) {
          fp.progress = (fp.progress + fp.speed) % 1;
        }
        const t = fp.progress;
        // Bezier formula B(t) = (1-t)^2 P0 + 2(1-t)t P1 + t^2 P2
        const bx = Math.pow(1 - t, 2) * finStartX + 2 * (1 - t) * t * finControlX + Math.pow(t, 2) * finEndX;
        const by = Math.pow(1 - t, 2) * finStartY + 2 * (1 - t) * t * finControlY + Math.pow(t, 2) * finEndY + fp.offsetY;

        ctx.beginPath();
        ctx.arc(bx, by, fp.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(223, 202, 158, ${fp.opacity * Math.sin(t * Math.PI)})`;
        ctx.shadowColor = '#C5A46D';
        ctx.shadowBlur = 5;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // -----------------------------------------------------------
      // D. Subtle Architectural Reflected Light Sweep
      // Very gentle slow light sheen traveling vertically along right building
      // -----------------------------------------------------------
      if (!isMobile) {
        const sheenX = width * 0.68 + (Math.sin(time * 0.0008) * 0.5 + 0.5) * (width * 0.25);
        const sheenGrad = ctx.createLinearGradient(sheenX - 60, 0, sheenX + 60, 0);
        sheenGrad.addColorStop(0, 'rgba(197, 164, 109, 0)');
        sheenGrad.addColorStop(0.5, 'rgba(197, 164, 109, 0.04)');
        sheenGrad.addColorStop(1, 'rgba(197, 164, 109, 0)');
        ctx.fillStyle = sheenGrad;
        ctx.fillRect(width * 0.62, height * 0.2, width * 0.38, height * 0.6);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.95 }}
      aria-hidden="true"
    />
  );
};

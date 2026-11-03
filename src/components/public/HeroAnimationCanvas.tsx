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

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // -------------------------------------------------------------
    // 1. Digital Globe (Center Sky) - slowly rotating 3D spherical nodes
    // -------------------------------------------------------------
    let globeAngle = 0;
    const globeRadiusFactor = 0.17;

    interface SpherePoint {
      lat: number;
      lon: number;
      size: number;
      isHub: boolean;
      pulsePhase: number;
    }

    const globePoints: SpherePoint[] = [];
    const numPoints = 90;
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = 2.39996323 * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      globePoints.push({
        lat: Math.asin(y),
        lon: Math.atan2(z, x),
        size: i % 8 === 0 ? 2.6 : 1.2,
        isHub: i % 8 === 0,
        pulsePhase: Math.random() * Math.PI * 2
      });
    }

    // -------------------------------------------------------------
    // 2. Flowing Blue-and-Gold Global Data Connections
    // -------------------------------------------------------------
    interface OrbitalStream {
      progress: number;
      speed: number;
      opacity: number;
      size: number;
      color: 'gold' | 'cyan';
    }

    const orbitalStreams: OrbitalStream[] = Array.from({ length: 22 }, (_, idx) => ({
      progress: Math.random(),
      speed: 0.0018 + Math.random() * 0.002,
      opacity: 0.4 + Math.random() * 0.5,
      size: 1.5 + Math.random() * 1.5,
      color: idx % 2 === 0 ? 'gold' : 'cyan'
    }));

    // -------------------------------------------------------------
    // 3. Subtle AI Processing Pulses & Governance Network Nodes
    // -------------------------------------------------------------
    interface GovernanceNode {
      relX: number; // relative to HUD panel position
      relY: number;
      label: string;
      phase: number;
    }

    const hudNodes: GovernanceNode[] = [
      { relX: 0.88, relY: 0.38, label: 'Strategic Planning', phase: 0 },
      { relX: 0.88, relY: 0.45, label: 'Risk & Compliance', phase: 1.2 },
      { relX: 0.88, relY: 0.52, label: 'Enterprise Oversight', phase: 2.4 },
      { relX: 0.88, relY: 0.59, label: 'Capital Management', phase: 3.6 },
      { relX: 0.88, relY: 0.66, label: 'Performance Intelligence', phase: 4.8 }
    ];

    // -------------------------------------------------------------
    // 4. Capital Management & Risk Intelligence Data Flows (Plaza Light Streaks)
    // -------------------------------------------------------------
    interface PlazaStreak {
      x: number;
      baseY: number;
      speed: number;
      len: number;
      opacity: number;
    }

    const plazaStreaks: PlazaStreak[] = Array.from({ length: 8 }, () => ({
      x: Math.random() * 800,
      baseY: 0.82 + Math.random() * 0.14,
      speed: 1.2 + Math.random() * 1.8,
      len: 60 + Math.random() * 90,
      opacity: 0.25 + Math.random() * 0.35
    }));

    let lastTime = performance.now();

    const render = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      if (!prefersReducedMotion) {
        globeAngle += 0.0032;
      }

      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1180;
      
      // Proportional Center for Luminous Digital Globe
      const globeCenterX = isMobile ? width * 0.72 : width * 0.54;
      const globeCenterY = isMobile ? height * 0.30 : height * 0.34;
      const globeRadius = Math.max(75, Math.min(width, height) * globeRadiusFactor);

      // -----------------------------------------------------------
      // A. Luminous Global AI Network Ambient Aura
      // -----------------------------------------------------------
      const globeGlow = ctx.createRadialGradient(
        globeCenterX,
        globeCenterY,
        globeRadius * 0.2,
        globeCenterX,
        globeCenterY,
        globeRadius * 1.5
      );
      globeGlow.addColorStop(0, 'rgba(56, 189, 248, 0.22)');
      globeGlow.addColorStop(0.5, 'rgba(14, 165, 233, 0.08)');
      globeGlow.addColorStop(1, 'rgba(14, 165, 233, 0)');
      ctx.fillStyle = globeGlow;
      ctx.beginPath();
      ctx.arc(globeCenterX, globeCenterY, globeRadius * 1.5, 0, Math.PI * 2);
      ctx.fill();

      // Flowing Orbital Arc Guide Lines (Golden & Cyan)
      ctx.save();
      ctx.translate(globeCenterX, globeCenterY);
      ctx.rotate(-0.35);
      
      // Arc 1
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.4, globeRadius * 0.48, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(197, 164, 109, 0.35)';
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      
      // Arc 2 (Opposite tilt)
      ctx.rotate(0.65);
      ctx.beginPath();
      ctx.ellipse(0, 0, globeRadius * 1.3, globeRadius * 0.42, 0, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.3)';
      ctx.lineWidth = 1;
      ctx.setLineDash([6, 8]);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();

      // Rotating Globe Nodes
      const projectedHubs: { x: number; y: number; z: number }[] = [];

      globePoints.forEach(pt => {
        const currentLon = pt.lon + globeAngle;
        const x3d = Math.cos(pt.lat) * Math.sin(currentLon);
        const y3d = Math.sin(pt.lat);
        const z3d = Math.cos(pt.lat) * Math.cos(currentLon);

        if (z3d > -0.2) {
          const px = globeCenterX + x3d * globeRadius;
          const py = globeCenterY - y3d * globeRadius;
          const depthAlpha = Math.max(0.12, (z3d + 0.2) / 1.2);

          if (pt.isHub) {
            projectedHubs.push({ x: px, y: py, z: z3d });
            const pulse = Math.sin(time * 0.003 + pt.pulsePhase) * 0.5 + 0.5;
            ctx.beginPath();
            ctx.arc(px, py, pt.size * (1 + pulse * 0.7), 0, Math.PI * 2);
            ctx.fillStyle = `rgba(56, 189, 248, ${0.75 * depthAlpha})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, pt.size * 2.4, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(223, 202, 158, ${0.45 * pulse * depthAlpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          } else {
            ctx.beginPath();
            ctx.arc(px, py, pt.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(186, 230, 253, ${0.5 * depthAlpha})`;
            ctx.fill();
          }
        }
      });

      // Global Network Vector Links
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projectedHubs.length; i++) {
        for (let j = i + 1; j < projectedHubs.length; j++) {
          const h1 = projectedHubs[i];
          const h2 = projectedHubs[j];
          const dist = Math.hypot(h1.x - h2.x, h1.y - h2.y);
          if (dist < globeRadius * 0.8 && h1.z > 0.05 && h2.z > 0.05) {
            ctx.beginPath();
            ctx.moveTo(h1.x, h1.y);
            ctx.lineTo(h2.x, h2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.22 * (1 - dist / (globeRadius * 0.8))})`;
            ctx.stroke();
          }
        }
      }

      // -----------------------------------------------------------
      // B. Flowing Blue-and-Gold Orbital Streams
      // -----------------------------------------------------------
      orbitalStreams.forEach(stream => {
        if (!prefersReducedMotion) {
          stream.progress = (stream.progress + stream.speed) % 1;
        }
        const angle = stream.progress * Math.PI * 2;
        const rx = globeRadius * 1.4;
        const ry = globeRadius * 0.48;
        
        // Ellipse rotated by -0.35 rad
        const cosR = Math.cos(-0.35);
        const sinR = Math.sin(-0.35);
        const ex = Math.cos(angle) * rx;
        const ey = Math.sin(angle) * ry;
        
        const px = globeCenterX + (ex * cosR - ey * sinR);
        const py = globeCenterY + (ex * sinR + ey * cosR);

        ctx.beginPath();
        ctx.arc(px, py, stream.size, 0, Math.PI * 2);
        if (stream.color === 'gold') {
          ctx.fillStyle = `rgba(223, 202, 158, ${stream.opacity})`;
          ctx.shadowColor = '#C5A46D';
          ctx.shadowBlur = 4;
        } else {
          ctx.fillStyle = `rgba(56, 189, 248, ${stream.opacity})`;
          ctx.shadowColor = '#38bdf8';
          ctx.shadowBlur = 4;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // -----------------------------------------------------------
      // C. Animated Enterprise Governance HUD Status Pulses
      // -----------------------------------------------------------
      if (!isMobile) {
        hudNodes.forEach(node => {
          const nx = width * node.relX;
          const ny = height * node.relY;
          const pulse = Math.sin(time * 0.0035 + node.phase) * 0.5 + 0.5;

          // Glowing status ring around green checkmark area
          ctx.beginPath();
          ctx.arc(nx, ny, 7 + pulse * 4, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.35 * (1 - pulse * 0.5)})`;
          ctx.lineWidth = 1;
          ctx.stroke();

          // Subtle cyan telemetry dot
          ctx.beginPath();
          ctx.arc(nx - 4, ny, 2, 0, Math.PI * 2);
          ctx.fillStyle = 'rgba(56, 189, 248, 0.7)';
          ctx.fill();
        });
      }

      // -----------------------------------------------------------
      // D. Capital Management & Risk Intelligence Data Flows (Plaza)
      // -----------------------------------------------------------
      plazaStreaks.forEach(streak => {
        if (!prefersReducedMotion) {
          streak.x += streak.speed;
          if (streak.x > width * 0.95) {
            streak.x = width * 0.45;
          }
        }
        const sy = height * streak.baseY;
        const streakGrad = ctx.createLinearGradient(streak.x - streak.len, sy, streak.x, sy);
        streakGrad.addColorStop(0, 'rgba(197, 164, 109, 0)');
        streakGrad.addColorStop(0.7, `rgba(223, 202, 158, ${streak.opacity})`);
        streakGrad.addColorStop(1, 'rgba(255, 255, 255, 0.8)');

        ctx.strokeStyle = streakGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(streak.x - streak.len, sy);
        ctx.lineTo(streak.x, sy);
        ctx.stroke();
      });

      // -----------------------------------------------------------
      // E. Architectural Lighting Reflected Sheen
      // -----------------------------------------------------------
      if (!isMobile) {
        const sheenX = width * 0.72 + Math.sin(time * 0.001) * (width * 0.12);
        const sheenGrad = ctx.createLinearGradient(sheenX - 80, 0, sheenX + 80, 0);
        sheenGrad.addColorStop(0, 'rgba(197, 164, 109, 0)');
        sheenGrad.addColorStop(0.5, 'rgba(197, 164, 109, 0.05)');
        sheenGrad.addColorStop(1, 'rgba(197, 164, 109, 0)');
        ctx.fillStyle = sheenGrad;
        ctx.fillRect(width * 0.62, height * 0.35, width * 0.36, height * 0.45);
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

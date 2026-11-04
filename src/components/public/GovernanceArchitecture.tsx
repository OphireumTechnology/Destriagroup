/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Coins,
  ShieldCheck,
  Cpu,
  Building2,
  CheckCircle2,
  MapPin,
  Scale,
  FileCheck2,
  Check
} from 'lucide-react';

export const GovernanceArchitecture: React.FC = () => {
  return (
    <div className="w-full">
      {/* ===================================================================== */}
      {/* Deep Royal Navy Governance Container                                  */}
      {/* ===================================================================== */}
      <div className="bg-[#0B1528] rounded-2xl border border-[#C5A46D]/30 shadow-xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        
        {/* Subtle decorative gold top accent hairline */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent" />

        {/* =================================================================== */}
        {/* Top Level: Centered Primary Parent Card                            */}
        {/* =================================================================== */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-[#11213D] border border-[#C5A46D]/45 rounded-xl p-5 sm:p-6 text-center shadow-lg relative group transition-all">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A46D]/15 border border-[#C5A46D]/30 rounded-full text-[11px] font-bold tracking-widest text-[#DFCA9E] uppercase mb-2.5">
              <Building2 className="w-3.5 h-3.5 text-[#C5A46D]" />
              <span>Holding Entity · NAICS 551114</span>
            </div>
            
            <h3 className="text-xl sm:text-[22px] font-extrabold text-white tracking-tight leading-snug">
              DESTRIA GROUP INC.
            </h3>
            
            <p className="text-xs sm:text-[14px] text-slate-300 mt-1.5 font-medium leading-relaxed">
              Holding Company Governance &amp; Executive Management
            </p>
          </div>
        </div>

        {/* =================================================================== */}
        {/* Responsive Connector Lines (Desktop SVG, Mobile Vertical Flow)       */}
        {/* =================================================================== */}
        
        {/* Desktop Connector (md and above) */}
        <div className="hidden md:block w-full py-2">
          <svg
            className="w-full h-12 text-[#C5A46D]"
            viewBox="0 0 100 48"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Top stem from parent card center (50, 0) down to fork (50, 24) */}
            <line
              x1="50"
              y1="0"
              x2="50"
              y2="24"
              stroke="#C5A46D"
              strokeWidth="1.25"
            />
            {/* Horizontal distribution bar from 16.67 to 83.33 at y=24 */}
            <line
              x1="16.67"
              y1="24"
              x2="83.33"
              y2="24"
              stroke="#C5A46D"
              strokeWidth="1.25"
            />
            {/* Vertical drops to each of the 3 cards */}
            <line
              x1="16.67"
              y1="24"
              x2="16.67"
              y2="48"
              stroke="#C5A46D"
              strokeWidth="1.25"
            />
            <line
              x1="50"
              y1="24"
              x2="50"
              y2="48"
              stroke="#C5A46D"
              strokeWidth="1.25"
            />
            <line
              x1="83.33"
              y1="24"
              x2="83.33"
              y2="48"
              stroke="#C5A46D"
              strokeWidth="1.25"
            />

            {/* Junction node points */}
            <circle cx="50" cy="0" r="1.8" fill="#DFCA9E" />
            <circle cx="50" cy="24" r="1.8" fill="#DFCA9E" />
            <circle cx="16.67" cy="24" r="1.6" fill="#DFCA9E" />
            <circle cx="83.33" cy="24" r="1.6" fill="#DFCA9E" />
            <circle cx="16.67" cy="48" r="1.8" fill="#DFCA9E" />
            <circle cx="50" cy="48" r="1.8" fill="#DFCA9E" />
            <circle cx="83.33" cy="48" r="1.8" fill="#DFCA9E" />
          </svg>
        </div>

        {/* Mobile Vertical Connector Flow */}
        <div className="md:hidden flex justify-center py-3" aria-hidden="true">
          <div className="w-0.5 h-6 bg-gradient-to-b from-[#C5A46D] to-[#38bdf8]" />
        </div>

        {/* =================================================================== */}
        {/* Second Level: Three Equally Sized Governance Cards                  */}
        {/* =================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 01 — Capital Allocation */}
          <div className="bg-[#11213D] border border-slate-700/80 hover:border-[#C5A46D] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A46D]">
                  01 — CAPITAL
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#C5A46D]/15 text-[#DFCA9E] flex items-center justify-center">
                  <Coins className="w-4 h-4 text-[#C5A46D]" />
                </div>
              </div>

              <h4 className="text-[17px] font-bold text-white tracking-tight mb-3">
                Capital Allocation
              </h4>

              <ul className="space-y-2.5 text-[13px] sm:text-[14px] text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Capital planning</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Treasury oversight</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Investment evaluation</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Financial stewardship</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Fiduciary Mandate</span>
              <span className="text-[#C5A46D] font-mono">Tier-1 Reserves</span>
            </div>
          </div>

          {/* Card 02 — Fiduciary Oversight */}
          <div className="bg-[#11213D] border border-slate-700/80 hover:border-[#C5A46D] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A46D]">
                  02 — FIDUCIARY
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#C5A46D]/15 text-[#DFCA9E] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                </div>
              </div>

              <h4 className="text-[17px] font-bold text-white tracking-tight mb-3">
                Fiduciary Oversight
              </h4>

              <ul className="space-y-2.5 text-[13px] sm:text-[14px] text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Board governance</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Corporate policies</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Approval controls</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Accountability</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Supervisory Control</span>
              <span className="text-[#C5A46D] font-mono">Maker-Checker</span>
            </div>
          </div>

          {/* Card 03 — AI Decision Support */}
          <div className="bg-[#11213D] border border-slate-700/80 hover:border-[#C5A46D] rounded-xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md">
            <div>
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60 mb-4">
                <span className="text-xs font-mono font-bold tracking-widest text-[#C5A46D]">
                  03 — INTELLIGENCE
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#C5A46D]/15 text-[#DFCA9E] flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-[#C5A46D]" />
                </div>
              </div>

              <h4 className="text-[17px] font-bold text-white tracking-tight mb-3">
                AI Decision Support
              </h4>

              <ul className="space-y-2.5 text-[13px] sm:text-[14px] text-slate-200">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Enterprise intelligence</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Risk monitoring</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Performance analytics</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                  <span>Human-supervised recommendations</span>
                </li>
              </ul>
            </div>

            <div className="mt-5 pt-3.5 border-t border-slate-700/50 flex items-center justify-between text-[11px] text-slate-400 font-medium">
              <span>Decision Support</span>
              <span className="text-[#C5A46D] font-mono">Human-in-Loop</span>
            </div>
          </div>

        </div>

      </div>

      {/* ===================================================================== */}
      {/* 3. Separate Clean Light-Background Corporate Information Panel         */}
      {/* ===================================================================== */}
      <div className="mt-8 p-6 sm:p-8 bg-[#F8FAFC] border border-slate-200 rounded-2xl shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
              Verified Corporate Records
            </span>
            <h4 className="text-base sm:text-lg font-extrabold text-[#101D35] tracking-tight">
              Statutory Domicile &amp; Registration Framework
            </h4>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-800 shrink-0">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Active · Wyoming Good Standing</span>
          </div>
        </div>

        {/* 5 Clean Verified Information Grid Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          
          <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Incorporation Jurisdiction
            </span>
            <strong className="text-sm text-[#101D35] block font-semibold">
              State of Wyoming, USA
            </strong>
            <span className="text-[11px] text-slate-500 block">
              Incorporated Jan 14, 2024
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Corporate Classification
            </span>
            <strong className="text-sm text-[#101D35] block font-semibold">
              NAICS 551114
            </strong>
            <span className="text-[11px] text-slate-500 block">
              Managing Offices Entity
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Registration Reference
            </span>
            <strong className="text-sm font-mono text-[#101D35] block font-bold">
              WY-2024-001482910
            </strong>
            <span className="text-[11px] text-slate-500 block">
              Wyoming Secretary of State
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Governance Framework
            </span>
            <strong className="text-sm text-[#101D35] block font-semibold">
              Maker-Checker Dual Control
            </strong>
            <span className="text-[11px] text-slate-500 block">
              WY Business Corp Act
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-slate-200/90 space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
              Registered Office
            </span>
            <strong className="text-sm text-[#101D35] block font-semibold truncate" title="30 N Gould St Ste N, Sheridan, WY 82801">
              30 N Gould St Ste N
            </strong>
            <span className="text-[11px] text-slate-500 block">
              Sheridan, WY 82801, USA
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

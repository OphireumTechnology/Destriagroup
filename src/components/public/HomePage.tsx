/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  ShieldCheck,
  TrendingUp,
  Cpu,
  BarChart3,
  Scale,
  Building2,
  Globe2,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers,
  FileCheck2,
  Users,
  Leaf,
  Info,
  Coins,
  Bot
} from 'lucide-react';
import { HeroAnimationCanvas } from './HeroAnimationCanvas';
import { assetUrl } from '../../utils/assetPath';

export const HomePage: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { setPublicPage, entities, claims } = useEnterprise();

  // 5 Minimalist Capability Indicators matching the approved reference design
  const capabilityIndicators = [
    {
      id: 'fin-strength',
      icon: Coins,
      title: 'Financial Strength',
      detail: 'Capital allocation & liquidity stewardship'
    },
    {
      id: 'tech-innov',
      icon: Cpu,
      title: 'Technology Innovation',
      detail: 'Modern enterprise digital infrastructures'
    },
    {
      id: 'ai-gov',
      icon: Bot,
      title: 'AI-Governance Assisted',
      detail: 'Fiduciary decision-support technology'
    },
    {
      id: 'ent-growth',
      icon: BarChart3,
      title: 'Enterprise Growth',
      detail: 'Strategic operating subsidiary development'
    },
    {
      id: 'risk-comp',
      icon: ShieldCheck,
      title: 'Risk & Compliance',
      detail: 'Continuous statutory regulatory oversight'
    }
  ];

  // 4 AI-Assisted Governance Capabilities requested in Section 7
  const aiGovernanceCapabilities = [
    {
      number: '01',
      title: 'Enterprise Intelligence',
      desc: 'Consolidated authorized reporting and management insights aggregating verified operational indicators across subsidiaries.'
    },
    {
      number: '02',
      title: 'Risk Monitoring',
      desc: 'Proactive identification and structured escalation of operational, financial, counterpart, and regulatory compliance risks.'
    },
    {
      number: '03',
      title: 'Governance Assistance',
      desc: 'Preparation, synthesis, and organization of decision-support information strictly for authorized directors and corporate officers.'
    },
    {
      number: '04',
      title: 'Audit & Accountability',
      desc: 'Immutable controlled records, dual-authorization approval histories, and mathematically traceable corporate actions.'
    }
  ];

  // Approved Brand Pillars from official identity guidelines
  const brandPillars = [
    {
      icon: ShieldCheck,
      title: 'Integrity & Governance',
      desc: 'Institutional fiduciary discipline, dual-authorization oversight, and strict compliance standards.'
    },
    {
      icon: TrendingUp,
      title: 'Growth & Investment',
      desc: 'Targeted equity capitalization in essential infrastructure and precision manufacturing operations.'
    },
    {
      icon: Users,
      title: 'People & Excellence',
      desc: 'Empowering specialized management teams with centralized corporate resources and strategic guidance.'
    },
    {
      icon: Leaf,
      title: 'Sustainability & Impact',
      desc: 'Accelerating energy grid decarbonization through long-term utility solar and storage assets.'
    },
    {
      icon: Globe2,
      title: 'Global Partnerships',
      desc: 'Syndicated capital alliances, multinational logistics corridors, and Tier-1 industrial supply pacts.'
    }
  ];

  return (
    <div className="bg-white">
      
      {/* ========================================================================= */}
      {/* 1. HOMEPAGE HERO: Clean Architectural Corporate Composition + Animation    */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden bg-[#0A1424] text-white border-b border-[#C5A46D]/30 min-h-[640px] lg:min-h-[720px] flex items-center">
        
        {/* Background Architectural Artwork Layer (Clean, Unobscured by Duplicate Content) */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <picture>
            <source srcSet={assetUrl('/images/corporate/destria_corporate_hero_clean.png')} type="image/png" />
            <img
              src={assetUrl('/images/corporate/hero_architecture.svg')}
              alt="DESTRIA GROUP Corporate Skyline"
              className="w-full h-full object-cover object-center lg:object-right brightness-105 contrast-105"
              loading="eager"
            />
          </picture>
          
          {/* Localized subtle directional scrim strictly behind text column for optimal contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#091527]/90 via-[#091527]/40 to-transparent lg:w-[48%]" />
        </div>

        {/* Real-Time Continuous Technological Animation Canvas */}
        <HeroAnimationCanvas />

        {/* Hero Content Container (Max width: 1360px per Phase 2 directive) */}
        <div className="relative z-20 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column (50% desktop width): Exactly one clean instance of corporate headline & description */}
            <div className="lg:col-span-7 xl:col-span-6 min-w-0 w-full space-y-6">
              
              {/* Institutional Kicker */}
              <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
                <span className="text-white font-bold">DESTRIA GROUP INC.</span>
                <span aria-hidden="true" className="text-[#C5A46D]">·</span>
                <span>NAICS 551114</span>
                <span aria-hidden="true" className="text-[#C5A46D]">·</span>
                <span>SHERIDAN, WYOMING</span>
              </div>

              {/* Main Heading (Strictly two lines on desktop, zero overlap) */}
              <h1 className="text-[clamp(2.25rem,3.4vw,3.5rem)] font-extrabold tracking-[-0.03em] text-white leading-[1.1] text-left">
                <span className="block text-white sm:whitespace-nowrap">A Diversified</span>
                <span className="block gold-gradient-text sm:whitespace-nowrap">Holding Corporation</span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-xl">
                Building, managing, and growing strategic enterprises through disciplined capital management, technology innovation, and responsible corporate governance.
              </p>

              {/* Exactly Two Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => {
                    setPublicPage('businesses');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101D35] bg-[#C5A46D] hover:bg-[#DFCA9E] rounded transition-all shadow-md cursor-pointer whitespace-nowrap"
                >
                  Explore Our Businesses
                  <ArrowRight className="w-4 h-4 text-[#101D35]" />
                </button>

                <button
                  onClick={() => {
                    setPublicPage('governance');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:text-[#C5A46D] bg-[#101D35]/80 hover:bg-[#101D35] border border-white/30 hover:border-[#C5A46D] rounded transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
                >
                  Corporate Governance
                </button>
              </div>

            </div>

            {/* Right Column (50% desktop width): Unobstructed architectural imagery & live connectivity */}
            <div className="hidden lg:block lg:col-span-5 xl:col-span-6" />

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED SECTION: Our Strategic Foundations (Phase 6 Directive)       */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
                Core Enterprise Pillars
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
                Our Strategic Foundations
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
                Centralized executive oversight and operational enablement deployed across our operating enterprise network.
              </p>
            </div>
            
            {/* Verified Institutional Classification Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-2 bg-white rounded-lg border border-slate-200 shadow-xs text-xs text-slate-700 shrink-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Charter #WY-2024-001482910 · Good Standing</span>
            </div>
          </div>

          {/* 5 Clean Capability Cards with Consistent Dimensions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {capabilityIndicators.map(indicator => {
              const Icon = indicator.icon;
              return (
                <div
                  key={indicator.id}
                  className="p-5 bg-white border border-slate-200 hover:border-[#C5A46D] rounded-xl transition-all shadow-xs hover:shadow-md group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-[#101D35] text-[#C5A46D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <h3 className="text-sm font-bold text-[#101D35] block leading-snug group-hover:text-[#9E7D47] transition-colors mb-2">
                      {indicator.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {indicator.detail}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-semibold">
                    <span>Institutional</span>
                    <span className="text-[#C5A46D]">→</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. DEDICATED SECTION: Corporate Profile & Institutional Foundation (Phase 5) */}
      {/* ========================================================================= */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
              Verified Corporate Records
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
              Corporate Profile &amp; Institutional Foundation
            </h2>
          </div>

          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            {/* Top Metallic Gold Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#9E7D47] via-[#DFCA9E] to-[#C5A46D]" />

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* Left Side: Corporate Seal and Mandate */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={assetUrl('/images/branding/destria-official-logo.png')}
                      alt="DESTRIA GROUP INC. Official Logo"
                      referrerPolicy="no-referrer"
                      className="h-14 w-auto object-contain shrink-0"
                    />
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-[#101D35] tracking-tight">
                        DESTRIA GROUP INC.
                      </h3>
                      <span className="text-xs font-bold tracking-widest text-[#C5A46D] uppercase block">
                        Executive Managing Office · NAICS 551114
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold uppercase text-[#C5A46D] tracking-wider block mb-1">
                      Statutory Executive Mandate
                    </span>
                    <p className="text-sm text-slate-700 leading-relaxed">
                      DESTRIA GROUP INC. serves exclusively as the parent enterprise management organization under NAICS Code 551114, directing capitalization policies, compliance verifications, and board-level fiduciary oversight for all controlled operational units.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-slate-200 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-700 leading-relaxed">
                      <strong>Verified Institutional Classification:</strong> Registered with the Wyoming Secretary of State as a domestic managing holding entity (Charter #WY-2024-001482910). Governed by multi-tiered dual-authorization and tamper-evident audit protocols.
                    </p>
                  </div>
                </div>

                {/* Right Side: Statutory Attributes and Portal Access (Zero unverified claims) */}
                <div className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-xl border border-slate-200 shadow-xs space-y-5">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101D35]">
                      Corporate Charter Data
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Active · Wyoming
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-[#F8FAFC] rounded border border-slate-100 space-y-0.5">
                      <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider block">
                        Charter ID
                      </span>
                      <span className="font-mono font-bold text-[#101D35] block">
                        WY-2024-001482910
                      </span>
                      <span className="text-[10px] text-slate-500">Secretary of State</span>
                    </div>

                    <div className="p-3 bg-[#F8FAFC] rounded border border-slate-100 space-y-0.5">
                      <span className="text-[9px] font-bold uppercase text-slate-400 tracking-wider block">
                        NAICS Classification
                      </span>
                      <span className="font-mono font-bold text-[#101D35] block">
                        551114
                      </span>
                      <span className="text-[10px] text-[#C5A46D] font-medium">Managing Office</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-600 pt-1">
                    <strong className="text-[#101D35] block font-semibold mb-0.5">Corporate Seat & Domicile:</strong>
                    30 N Gould Street Ste N, Sheridan, WY 82801, USA
                  </div>

                  <div className="pt-2 text-center text-xs text-[#9E7D47] font-semibold italic">
                    “Strength in Foundation. Excellence in Growth.”
                  </div>

                  <button
                    onClick={onOpenAuth}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded-md transition-all cursor-pointer shadow-sm group"
                  >
                    <Lock className="w-3.5 h-3.5 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                    <span>Enterprise Portal Access →</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED SECTION: AI-Assisted Corporate Governance (Section 7)        */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
              Decision-Support Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#101D35] tracking-tight">
              AI-Assisted Corporate Governance
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Integrating advanced technology, structured oversight, and responsible decision-support systems to strengthen corporate governance, enterprise visibility, risk management, and operational accountability.
            </p>
          </div>

          {/* Core Graphic Visual + Capabilities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Graphic Representation */}
            <div className="lg:col-span-5 bg-[#101D35] rounded-xl p-6 sm:p-8 border border-[#C5A46D]/30 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A46D] to-[#DFCA9E]" />
              
              <div className="text-center mb-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                  System Architecture
                </span>
                <h4 className="text-sm font-bold text-white">
                  Decision-Support &amp; Integrity Core
                </h4>
              </div>

              {/* Graphic Asset Embed */}
              <div className="aspect-[4/3] w-full flex items-center justify-center">
                <img
                  src={assetUrl('/images/corporate/ai_governance_network.svg')}
                  alt="AI Assisted Governance Network"
                  className="w-full h-auto object-contain max-h-64"
                />
              </div>

              {/* Fiduciary Human Control Distinction Callout */}
              <div className="mt-4 p-3 bg-white/[0.05] border border-white/10 rounded text-[11px] text-slate-300 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  <strong>Fiduciary Constraint:</strong> AI operates strictly as controlled decision-support. All corporate decisions, resolutions, and disbursements require authorized human officer review and countersignature.
                </span>
              </div>
            </div>

            {/* 4 Capabilities List */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {aiGovernanceCapabilities.map(cap => (
                <div
                  key={cap.number}
                  className="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:border-[#C5A46D] transition-colors flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold text-[#C5A46D] block">
                      CAPABILITY {cap.number}
                    </span>
                    <h3 className="text-base font-bold text-[#101D35]">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Fiduciary Regulated</span>
                    <span className="text-emerald-700 font-semibold font-mono">Verified State</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Operational vs Proposed Clarity Strip */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span><strong>Operational Today:</strong> Dual-control Maker-Checker, cryptographic audit chains, and document encryption.</span>
            </div>
            <div className="flex items-center gap-2 text-slate-500">
              <span className="w-2 h-2 rounded-full bg-[#C5A46D]" />
              <span><strong>Roadmap Architecture:</strong> Automated cross-subsidiary compliance synthesis and predictive risk telemetry.</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. BRAND PILLARS SECTION                                                  */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
              Institutional Brand Pillars
            </h2>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">
              Foundational governance tenets established in the Destria Brand Identity Guidelines to anchor every subsidiary venture and capital decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {brandPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-md bg-[#101D35] text-[#C5A46D] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#101D35] mb-2">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#C5A46D] font-semibold">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="text-slate-300">/</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SUBSIDIARY OPERATING ENTITIES OVERVIEW                                 */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
                Portfolio Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
                Specialized Operating Companies
              </h2>
              <p className="text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                DESTRIA GROUP INC. maintains controlling and majority ownership stakes in key industrial sectors, providing shared governance, regulatory oversight, and structured growth financing.
              </p>
            </div>
            <button
              onClick={() => {
                setPublicPage('businesses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] flex items-center gap-2 cursor-pointer shrink-0"
            >
              View Full Entity Registry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {entities.filter(e => e.entityType !== 'Holding Parent').map(entity => (
              <div
                key={entity.id}
                className="p-7 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all hover:shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                    <div>
                      <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                        {entity.jurisdiction}
                      </span>
                      <h3 className="text-lg font-bold text-[#101D35]">
                        {entity.legalName}
                      </h3>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-[#C5A46D] block uppercase">Equity Share</span>
                      <span className="text-base font-bold font-mono text-[#101D35]">
                        {entity.ownershipPercentage}%
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {entity.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Core Strategic Assets
                    </span>
                    {entity.keyAssets.slice(0, 2).map((asset, aIdx) => (
                      <div key={aIdx} className="text-xs text-slate-700 flex items-start gap-2">
                        <span className="text-[#C5A46D] mt-0.5">•</span>
                        <span>{asset}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500">
                    Industry: <span className="font-semibold text-slate-800">{entity.industry}</span>
                  </div>
                  <button
                    onClick={() => {
                      setPublicPage('businesses');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-bold text-[#101D35] hover:text-[#C5A46D] flex items-center gap-1 cursor-pointer"
                  >
                    Entity Dossier
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. INSTITUTIONAL GOVERNANCE & FIDUCIARY CONTROLS                          */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block">
                Fiduciary Oversight
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101D35] tracking-tight">
                Rigorous Dual-Control Corporate Governance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                DESTRIA GROUP INC. adheres to institutional Maker-Checker protocols. Every intercompany liquidity transfer, equity amendment, or board resolution requires dual-clearance authorization and cryptographic hash-chain recording.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3 bg-white rounded border border-slate-200">
                  <Scale className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-[#101D35] block font-semibold">Statutory Board Quorum:</strong> Minimum 80% supermajority required on all capital allocation directives and subsidiary formation actions.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded border border-slate-200">
                  <Layers className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-[#101D35] block font-semibold">Maker-Checker Authorization:</strong> No unilateral treasury action over $500,000 can be processed without independent secondary countersignature.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded border border-slate-200">
                  <FileCheck2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="text-[#101D35] block font-semibold">Controlled Claim Verification:</strong> Public claims and financial assertions undergo legal and auditor review prior to external dissemination.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPublicPage('governance');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] cursor-pointer"
                >
                  Inspect Governance Charters & Resolutions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 bg-white rounded-lg border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D]">
                      Verification Register
                    </span>
                    <h4 className="text-sm font-bold text-[#101D35]">
                      Active Regulatory Disclosures
                    </h4>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Audited &amp; Current</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {claims.slice(0, 3).map(claim => (
                    <div key={claim.id} className="p-3 bg-slate-50 rounded border border-slate-100 space-y-1.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="font-semibold text-[#101D35]">{claim.pageContext}</span>
                        <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {claim.approvalStatus}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 font-medium">
                        "{claim.statement}"
                      </p>
                      <div className="text-[10px] text-slate-500">
                        Source: <span className="font-mono text-slate-600">{claim.substantiatingSource}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>Authorized Reviewer: Corporate General Counsel</span>
                  <button
                    onClick={() => {
                      setPublicPage('news');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="font-semibold text-[#101D35] hover:text-[#C5A46D]"
                  >
                    All Disclosures →
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. ENTERPRISE PORTAL BANNER                                               */}
      {/* ========================================================================= */}
      <section className="py-14 bg-[#101D35] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block">
                Enterprise Command Center
              </span>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Fiduciary Management &amp; Executive Oversight
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Authorized officers, board directors, and institutional auditors may access the encrypted corporate registry, resolution voting ledgers, and document vault.
              </p>
            </div>
            <button
              onClick={onOpenAuth}
              className="flex items-center gap-2.5 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101D35] bg-[#C5A46D] hover:bg-[#DFCA9E] rounded-md transition-all shadow-md cursor-pointer whitespace-nowrap shrink-0"
            >
              <ShieldCheck className="w-4 h-4 text-[#101D35]" />
              Enterprise Sign In
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

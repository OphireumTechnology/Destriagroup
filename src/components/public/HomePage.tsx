/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  ShieldCheck,
  Scale,
  Building2,
  CheckCircle2,
  Lock,
  BarChart3,
  Cpu,
  Coins,
  ArrowRight,
  FileCheck2,
  Layers,
  Info,
  TrendingUp,
  Globe2,
  Users
} from 'lucide-react';
import { CorporateHero } from './CorporateHero';
import { assetUrl } from '../../utils/assetPath';

export const HomePage: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { setPublicPage, entities } = useEnterprise();

  // Operating entities (excluding holding parent)
  const operatingEntities = entities.filter(e => e.entityType !== 'Holding Parent');

  return (
    <div className="bg-white">
      
      {/* ========================================================================= */}
      {/* 1. CLEAN CORPORATE HERO (Two-column, responsive, 42/58 ratio, no clutter)   */}
      {/* ========================================================================= */}
      <CorporateHero
        onExploreBusinesses={() => {
          setPublicPage('businesses');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onCorporateGovernance={() => {
          setPublicPage('governance');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* ========================================================================= */}
      {/* 2. FINANCIAL INTELLIGENCE: Disciplined Capital Management                 */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Visual Representation of Treasury & Capital Stewardship */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group aspect-[16/10]">
                <img
                  src={assetUrl('/images/corporate/financial_capital_stewardship.jpg')}
                  alt="Corporate Treasury and Disciplined Capital Management Environment"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/50 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </div>

            {/* Right Column: Narrative & Fiduciary Architecture */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block">
                  Financial Intelligence &amp; Treasury
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D35] tracking-tight">
                  Disciplined Capital Management
                </h2>
              </div>

              <p className="text-base text-slate-600 leading-relaxed">
                DESTRIA GROUP INC. enforces rigorous institutional stewardship over capital allocation, liquidity management, and enterprise investment evaluation. Our holding model separates speculative market exposure from foundational balance-sheet strength.
              </p>

              {/* Core Capital Principles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#101D35] font-bold text-sm">
                    <Coins className="w-4 h-4 text-[#C5A46D]" />
                    <span>Capital Allocation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Systematic deployment of debt and equity capitalization into essential, asset-backed operating subsidiaries.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#101D35] font-bold text-sm">
                    <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                    <span>Financial Stewardship</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Long-term principal preservation and liquidity reserve standards across all operating divisions.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#101D35] font-bold text-sm">
                    <BarChart3 className="w-4 h-4 text-[#C5A46D]" />
                    <span>Investment Evaluation</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Disciplined discounted cash flow modeling and quantitative risk-adjusted hurdle rates for new acquisitions.
                  </p>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-xl border border-slate-200/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-[#101D35] font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#C5A46D]" />
                    <span>Treasury &amp; Risk Oversight</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Dual-signatory Maker-Checker verification for intercompany disbursements and currency hedging.
                  </p>
                </div>

              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setPublicPage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  <span>Learn About Our Capital Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. ENTERPRISE MANAGEMENT: One Holding Company. Multiple Enterprises.       */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          
          {/* Section Header */}
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block">
              Enterprise Management &amp; Portfolio Structure
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D35] tracking-tight">
              One Holding Company. Multiple Enterprises. Unified Oversight.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              As a dedicated managing holding entity (NAICS 551114), DESTRIA GROUP INC. provides centralized corporate governance, executive strategy, and regulatory oversight across an expanding portfolio of specialized operating enterprises.
            </p>
          </div>

          {/* Architectural Layout: Visual Concept + Operating Business Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visual concept of unified holding architecture */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-[16/11]">
                <img
                  src={assetUrl('/images/corporate/enterprise_holding_structure.jpg')}
                  alt="Unified Corporate Holding Structure and Operating Business Network"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Operating Businesses Dossiers */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {operatingEntities.map((entity) => (
                <div
                  key={entity.id}
                  className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#C5A46D] transition-all shadow-xs hover:shadow-md flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block">
                          {entity.jurisdiction} · NAICS {entity.naicsCode}
                        </span>
                        <h3 className="text-base font-bold text-[#101D35]">
                          {entity.legalName}
                        </h3>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] font-bold text-[#C5A46D] block uppercase">Equity</span>
                        <span className="text-sm font-bold font-mono text-[#101D35]">
                          {entity.ownershipPercentage}%
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {entity.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{entity.industry}</span>
                    <button
                      onClick={() => {
                        setPublicPage('businesses');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="text-xs font-bold text-[#101D35] hover:text-[#C5A46D] flex items-center gap-1 cursor-pointer"
                    >
                      <span>Entity Dossier</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. AI GOVERNANCE: Intelligent Governance. Responsible Decisions.           */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block">
              Fiduciary Decision Support
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#101D35] tracking-tight">
              Intelligent Governance. Responsible Decisions.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We leverage modern AI-assisted intelligence strictly as controlled decision support. Board members and corporate officers retain ultimate fiduciary authority, reinforced by cryptographic audit chains and human-in-the-loop approvals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual: AI Governance & Human Oversight Center */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg bg-slate-900 group aspect-[16/10]">
                <img
                  src={assetUrl('/images/corporate/governance_ai_oversight.jpg')}
                  alt="AI-Assisted Corporate Governance Center with Human Fiduciary Oversight"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Explicit Legal & Fiduciary Note */}
              <div className="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                <Info className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong className="text-[#101D35]">Fiduciary Human-in-the-Loop Standard:</strong> AI technologies do not possess legal standing or unilateral spending authority. All resolutions, treasury disbursements, and subsidiary mandates require formal review, dual authorization, and signature by authorized corporate officers.
                </p>
              </div>
            </div>

            {/* AI Governance Capabilities Grid */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 hover:border-[#C5A46D] transition-colors shadow-xs">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#C5A46D]" />
                  <h3 className="text-sm font-bold text-[#101D35]">Enterprise Risk Intelligence</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Continuous multi-subsidiary risk factor synthesis, detecting early operational, counterpart, or liquidity deviations.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 hover:border-[#C5A46D] transition-colors shadow-xs">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#C5A46D]" />
                  <h3 className="text-sm font-bold text-[#101D35]">Compliance Monitoring</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Automated tracking of statutory deadlines, state annual filings, tax schedules, and jurisdictional requirements.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 hover:border-[#C5A46D] transition-colors shadow-xs">
                <div className="flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#C5A46D]" />
                  <h3 className="text-sm font-bold text-[#101D35]">Immutable Audit Trails</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Cryptographic hashing and tamper-evident event logging for all management actions and board voting records.
                </p>
              </div>

              <div className="p-5 bg-white border border-slate-200 rounded-xl space-y-2 hover:border-[#C5A46D] transition-colors shadow-xs">
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[#C5A46D]" />
                  <h3 className="text-sm font-bold text-[#101D35]">Financial Reporting Analysis</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Consolidated subsidiary balance-sheet reconciliation, variance reporting, and executive briefing synthesis.
                </p>
              </div>

              <div className="sm:col-span-2 pt-2">
                <button
                  onClick={() => {
                    setPublicPage('governance');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] transition-colors cursor-pointer"
                >
                  <span>Review Governance Charters &amp; Resolutions</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. STATUTORY CORPORATE PROFILE & ENTERPRISE PORTAL ACCESS                 */}
      {/* ========================================================================= */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="h-1.5 w-full bg-gradient-to-r from-[#9E7D47] via-[#DFCA9E] to-[#C5A46D]" />

            <div className="p-8 sm:p-10 lg:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                
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
                      <h3 className="text-xl font-extrabold text-[#101D35] tracking-tight">
                        DESTRIA GROUP INC.
                      </h3>
                      <span className="text-xs font-bold tracking-widest text-[#C5A46D] uppercase block">
                        Managing Holding Entity · NAICS 551114
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    DESTRIA GROUP INC. operates under the Wyoming Business Corporation Act as a domestic managing enterprise (Charter #WY-2024-001482910). We maintain continuous statutory compliance, active corporate records, and dual-control executive authorization.
                  </p>

                  <div className="flex items-center gap-3 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Domicile: 30 N Gould Street Ste N, Sheridan, WY 82801, USA</span>
                  </div>
                </div>

                {/* Right Side: Enterprise Command Center Portal Access */}
                <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-xl border border-slate-200 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#101D35]">
                      Enterprise Command Center
                    </span>
                    <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">
                      Authorized Access Only
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    Corporate officers, directors, and institutional auditors may authenticate into the private command center for board resolution approvals, legal ledger inspection, and maker-checker authorizations.
                  </p>

                  <button
                    onClick={onOpenAuth}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded-md transition-all cursor-pointer shadow-sm group active:scale-[0.98]"
                  >
                    <Lock className="w-4 h-4 text-[#C5A46D] group-hover:scale-110 transition-transform" />
                    <span>Enter Enterprise Command Center →</span>
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

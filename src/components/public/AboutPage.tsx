/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  Building2,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Scale
} from 'lucide-react';
import { ENTERPRISE_USERS } from '../../data/corporateStore';
import { assetUrl } from '../../utils/assetPath';
import { GovernanceArchitecture } from './GovernanceArchitecture';

export const AboutPage: React.FC = () => {
  const { setPublicPage } = useEnterprise();

  return (
    <div className="bg-white py-14 sm:py-20">
      {/* Maximum content width of 1200–1280 px (1260px) */}
      <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-20">
        
        {/* ========================================================================= */}
        {/* 1. Header Kicker & Title                                                  */}
        {/* ========================================================================= */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Corporate Dossier</span>
            <span>·</span>
            <span>NAICS 551114</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            About DESTRIA GROUP INC.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            DESTRIA GROUP INC. operates as a premier domestic management holding corporation registered in the State of Wyoming. The organization exercises strategic governance, treasury management, compliance oversight, and capital stewardship over essential operating enterprises.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 2. Executive Headquarters & Leadership Visual                             */}
        {/* ========================================================================= */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-[21/9] sm:aspect-[16/7]">
          <img
            src={assetUrl('/images/corporate/about_corporate_foundation.jpg')}
            alt="DESTRIA GROUP INC. Executive Boardroom and Corporate Leadership Foundation"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* ========================================================================= */}
        {/* 3. Core Identity & Classification Matrix                                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#101D35] tracking-tight">
              Institutional Holding Framework
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Unlike speculative venture entities or passive conglomerates, DESTRIA GROUP INC. is purpose-structured around NAICS 551114 (Corporate, Subsidiary, and Regional Managing Offices). We provide our subsidiaries with institutional debt and equity capitalization, centralized risk and compliance systems, and executive stewardship.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our operating philosophy is defined by our foundational motto: <em>"Strength in Foundation. Excellence in Growth."</em> We deploy capital exclusively into tangible, asset-backed sectors with predictable long-term utility: advanced precision manufacturing, clean energy grid modernization, cold-chain freight logistics, and private credit intermediation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block mb-1">
                  Primary Classification
                </span>
                <span className="text-xs font-bold text-[#101D35] block">
                  NAICS 551114 Managing Office
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block leading-normal">
                  Executive management &amp; operational coordination across subsidiaries.
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block mb-1">
                  Statutory Domicile
                </span>
                <span className="text-xs font-bold text-[#101D35] block">
                  Sheridan, Wyoming, USA
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block leading-normal">
                  Charter WY-2024-001482910 in continuous Good Standing.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] text-[#101D35] p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
            <div className="h-1 w-full bg-gradient-to-r from-[#9E7D47] via-[#DFCA9E] to-[#C5A46D] absolute top-0 left-0 right-0" />

            <h3 className="text-xs font-bold uppercase tracking-widest text-[#9E7D47]">
              Corporate Domicile Details
            </h3>

            <div className="space-y-4 text-xs text-slate-600">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#101D35] block font-semibold">Corporate Headquarters:</strong>
                  30 N Gould Street Ste N, Sheridan, WY 82801, USA
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#101D35] block font-semibold">Corporate Structure:</strong>
                  Domestic For-Profit Corporation under Wyoming Business Corporation Act
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Scale className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#101D35] block font-semibold">Supervisory Regime:</strong>
                  Wyoming Secretary of State Commercial Division, IRS Federal Corporate Tax Filing
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#101D35] block font-semibold">Statutory Agent of Record:</strong>
                  Registered Agents Inc. (Sheridan, WY)
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Incorporated: January 14, 2024</span>
              <span className="text-emerald-700 font-mono font-semibold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Good Standing
              </span>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. Institutional Holding & Governance Architecture (Responsive Component) */}
        {/* ========================================================================= */}
        <section className="pt-2">
          {/* Section Header */}
          <div className="max-w-3xl mb-7 sm:mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2.5">
              Enterprise Governance Framework
            </span>
            <h2 className="text-[28px] sm:text-[32px] font-extrabold text-[#101D35] tracking-tight leading-tight">
              Institutional Holding &amp; Governance Architecture
            </h2>
            <p className="mt-3 sm:mt-4 text-[15px] sm:text-[17px] text-slate-600 leading-relaxed">
              An integrated framework for capital allocation, fiduciary oversight, and AI-assisted enterprise decision support.
            </p>
          </div>

          {/* Reusable Responsive HTML/SVG Component */}
          <GovernanceArchitecture />
        </section>

        {/* ========================================================================= */}
        {/* 5. Executive Committee & Corporate Officers                                */}
        {/* ========================================================================= */}
        <section className="pt-2">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2.5">
              Leadership
            </span>
            <h2 className="text-[28px] sm:text-[30px] font-extrabold text-[#101D35] tracking-tight leading-tight">
              Executive Committee &amp; Corporate Officers
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] text-slate-600 leading-relaxed">
              Fiduciary leadership steering capital allocation, enterprise risk, corporate compliance, and subsidiary governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENTERPRISE_USERS.slice(0, 4).map(user => (
              <div
                key={user.id}
                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-[#C5A46D] transition-colors shadow-xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#101D35] text-[#C5A46D] flex items-center justify-center font-bold text-base mb-4 font-mono shadow-xs">
                    {user.avatarInitials}
                  </div>
                  <h3 className="text-base font-bold text-[#101D35]">
                    {user.name}
                  </h3>
                  <span className="text-xs font-semibold text-[#C5A46D] block mt-0.5">
                    {user.title}
                  </span>
                  <p className="text-xs text-slate-500 mt-3">
                    Department: <span className="text-slate-700 font-medium">{user.department}</span>
                  </p>
                </div>
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Role: {user.role.replace(/_/g, ' ')}</span>
                  <span className="text-emerald-600 font-medium">MFA Active</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. Investment & Management Principles                                     */}
        {/* ========================================================================= */}
        <section className="bg-slate-50 p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
              Management Principles
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-[#101D35] tracking-tight">
              Capital Stewardship &amp; Institutional Governance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block">01 / LONG-TERM HORIZON</span>
              <h4 className="text-sm font-bold text-[#101D35]">Permanent Capital Discipline</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We avoid short-term speculative market pressures, prioritizing durable operational cash flows and compounding capital asset value over multi-decade cycles.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block">02 / MAKER-CHECKER INTEGRITY</span>
              <h4 className="text-sm font-bold text-[#101D35]">Dual-Control Governance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero single-point financial failure. All intercompany asset transfers and corporate resolutions require dual authorized signatures and cryptographic verification.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block">03 / REAL TANGIBLE ASSETS</span>
              <h4 className="text-sm font-bold text-[#101D35]">High-Barrier Infrastructure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our portfolio focuses strictly on mission-critical manufacturing tools, clean electric generation, intermodal distribution yards, and secured senior credit.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

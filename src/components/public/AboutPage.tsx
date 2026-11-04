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
  Briefcase,
  MapPin,
  Scale
} from 'lucide-react';
import { ENTERPRISE_USERS } from '../../data/corporateStore';
import { assetUrl } from '../../utils/assetPath';

export const AboutPage: React.FC = () => {
  const { setPublicPage } = useEnterprise();

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Kicker */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Corporate Dossier</span>
            <span>·</span>
            <span>NAICS 551114</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            About DESTRIA GROUP INC.
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            DESTRIA GROUP INC. operates as a premier domestic management holding corporation registered in the State of Wyoming. The organization exercises strategic governance, treasury management, compliance oversight, and capital stewardship over essential operating enterprises.
          </p>
        </div>

        {/* Executive Headquarters & Leadership Visual */}
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

        {/* Core Identity & Classification Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-[#101D35] tracking-tight">
              Institutional Holding Framework
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Unlike speculative venture entities or passive conglomerates, DESTRIA GROUP INC. is purpose-structured around NAICS 551114 (Corporate, Subsidiary, and Regional Managing Offices). We provide our subsidiaries with institutional debt and equity capitalization, centralized risk and compliance systems, and executive stewardship.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our operating philosophy is defined by our foundational motto: <em>"Strength in Foundation. Excellence in Growth."</em> We deploy capital exclusively into tangible, asset-backed sectors with predictable long-term utility: advanced precision manufacturing, clean energy grid modernization, cold-chain freight logistics, and private credit intermediation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block mb-1">
                  Primary Classification
                </span>
                <span className="text-xs font-bold text-[#101D35] block">
                  NAICS 551114 Managing Office
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Executive management & operational coordination across subsidiaries.
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block mb-1">
                  Statutory Domicile
                </span>
                <span className="text-xs font-bold text-[#101D35] block">
                  Sheridan, Wyoming, USA
                </span>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Charter WY-2024-001482910 in continuous Good Standing.
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] text-[#101D35] p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 relative overflow-hidden">
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

        {/* Institutional Architecture Visual Diagram */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                Enterprise Blueprint
              </span>
              <h2 className="text-2xl font-bold text-[#101D35] tracking-tight">
                Institutional Holding &amp; Governance Architecture
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-slate-100 px-3 py-1 rounded">
              NAICS 551114 Managing Framework
            </span>
          </div>

          <div className="bg-[#0A1628] p-4 sm:p-6 rounded-2xl border border-[#C5A46D]/30 shadow-lg overflow-hidden">
            <img
              src={assetUrl('/images/corporate/about_enterprise_framework.svg')}
              alt="DESTRIA GROUP Institutional Enterprise Framework"
              className="w-full h-auto max-h-[460px] object-contain mx-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Executive Committee */}
        <div className="space-y-8 pt-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
              Leadership
            </span>
            <h2 className="text-2xl font-bold text-[#101D35] tracking-tight">
              Executive Committee & Corporate Officers
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl">
              Fiduciary leadership steering capital allocation, enterprise risk, corporate compliance, and subsidiary governance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ENTERPRISE_USERS.slice(0, 4).map(user => (
              <div
                key={user.id}
                className="p-6 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-colors"
              >
                <div className="w-12 h-12 rounded-md bg-[#101D35] text-[#C5A46D] flex items-center justify-center font-bold text-base mb-4 font-mono">
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
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Role: {user.role.replace(/_/g, ' ')}</span>
                  <span className="text-emerald-600 font-medium">MFA Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment & Management Principles */}
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-2">
              Management Principles
            </span>
            <h3 className="text-xl font-bold text-[#101D35]">
              Capital Stewardship & Institutional Governance
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded border border-slate-200">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block mb-2">01 / LONG-TERM HORIZON</span>
              <h4 className="text-sm font-bold text-[#101D35] mb-2">Permanent Capital Discipline</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We avoid short-term speculative market pressures, prioritizing durable operational cash flows and compounding capital asset value over multi-decade cycles.
              </p>
            </div>

            <div className="p-5 bg-white rounded border border-slate-200">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block mb-2">02 / MAKER-CHECKER INTEGRITY</span>
              <h4 className="text-sm font-bold text-[#101D35] mb-2">Dual-Control Governance</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero single-point financial failure. All intercompany asset transfers and corporate resolutions require dual authorized signatures and cryptographic verification.
              </p>
            </div>

            <div className="p-5 bg-white rounded border border-slate-200">
              <span className="text-xs font-bold font-mono text-[#C5A46D] block mb-2">03 / REAL TANGIBLE ASSETS</span>
              <h4 className="text-sm font-bold text-[#101D35] mb-2">High-Barrier Infrastructure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our portfolio focuses strictly on mission-critical manufacturing tools, clean electric generation, intermodal distribution yards, and secured senior credit.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

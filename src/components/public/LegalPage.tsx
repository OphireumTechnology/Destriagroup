/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Scale,
  ShieldCheck,
  FileCheck2,
  Building2,
  Lock,
  Download
} from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

export const LegalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'naics' | 'terms' | 'privacy' | 'fincen'>('naics');

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Statutory Compliance</span>
            <span>·</span>
            <span>Legal Disclosures</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Legal & Regulatory Disclosures
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            Statutory profile, NAICS 551114 compliance documentation, anti-money laundering frameworks, and corporate terms governing DESTRIA GROUP INC. and its operating entities.
          </p>
        </div>

        {/* Regulatory Intelligence & Corporate Compliance Visual */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-[21/9] sm:aspect-[16/7]">
          <img
            src={assetUrl('/images/corporate/legal_regulatory_compliance.jpg')}
            alt="Corporate Legal Secretariat and Statutory Compliance Executive Office"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Legal Charter Visual Diagram */}
        <div className="bg-[#081220] p-4 sm:p-6 rounded-2xl border border-[#C5A46D]/30 shadow-lg overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Wyoming Corporate Charter &amp; Statutory Authority
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded">
              Charter #WY-2024-001482910
            </span>
          </div>
          <img
            src={assetUrl('/images/corporate/legal_statutory_charter.svg')}
            alt="Wyoming Domestic Management Holding Entity Charter"
            className="w-full h-auto max-h-[440px] object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 pb-4">
          {[
            { id: 'naics', label: 'NAICS 551114 Documentation' },
            { id: 'fincen', label: 'FinCEN & AML Compliance' },
            { id: 'terms', label: 'Corporate Terms of Use' },
            { id: 'privacy', label: 'Data Governance & Privacy' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-colors cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#101D35] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:text-[#101D35]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="space-y-8 text-xs text-slate-700 leading-relaxed">
          
          {activeTab === 'naics' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block">
                  Official Federal Business Classification
                </span>
                <h3 className="text-base font-bold text-[#101D35]">
                  NAICS Code 551114 — Corporate, Subsidiary, and Regional Managing Offices
                </h3>
                <p>
                  This industry comprises establishments (except government establishments) primarily engaged in the administration, management, and strategic oversight of other establishments of the same enterprise. Establishments in this industry typically undertake executive, legislative, and supervisory functions for all or part of the parent enterprise.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  1. Statutory Mandate & Scope of Operations
                </h4>
                <p>
                  DESTRIA GROUP INC. is incorporated under the Wyoming Business Corporation Act (Wyo. Stat. § 17-16-101 et seq.) as a domestic profit corporation. Pursuant to its Articles of Incorporation on file with the Wyoming Secretary of State (Charter #WY-2024-001482910), the primary corporate purpose of DESTRIA GROUP INC. is to own, manage, finance, and oversee corporate subsidiaries, limited liability companies, and joint venture partnerships.
                </p>

                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  2. Centralized Executive Functions Performed
                </h4>
                <p>
                  In satisfaction of NAICS 551114 classifications, the parent enterprise conducts the following centralized operations from its managing offices at 30 N Gould Street Ste N, Sheridan, WY 82801:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                  <li><strong>Strategic Capital Allocation:</strong> Managing intercompany revolvers, equity contributions, and debt covenant compliance.</li>
                  <li><strong>Statutory Risk & Legal Counsel:</strong> Corporate resolution drafting, trademark management, state franchise filings, and regulatory compliance.</li>
                  <li><strong>Dual-Control Fiduciary Approvals:</strong> Strict Maker-Checker governance on all capital commitments exceeding authorized thresholds.</li>
                  <li><strong>Consolidated Financial Accounting:</strong> GAAP reporting, independent external audits, and tax consolidation under IRS rules.</li>
                </ul>

                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  3. Registered Agent & Domicile Verification
                </h4>
                <p>
                  The registered office and agent for DESTRIA GROUP INC. in Wyoming is Registered Agents Inc., located at 30 N Gould Street Ste N, Sheridan, WY 82801. Statutory notices and legal process may be formally served at this address during ordinary business hours.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'fincen' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block">
                  Federal Regulatory Adherence
                </span>
                <h3 className="text-base font-bold text-[#101D35]">
                  Anti-Money Laundering (AML) & Corporate Transparency Act (CTA)
                </h3>
                <p>
                  DESTRIA GROUP INC. maintains rigorous Know-Your-Customer (KYC) and Anti-Money Laundering controls across all subsidiary accounts and co-investment syndicates, fulfilling all requirements under 31 C.F.R. Part 1010.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  Beneficial Ownership Information Reporting (BOIR)
                </h4>
                <p>
                  Pursuant to the Corporate Transparency Act enacted under the National Defense Authorization Act, DESTRIA GROUP INC. maintains up-to-date Beneficial Ownership Information reports filed with the Financial Crimes Enforcement Network (FinCEN). All controlling beneficial owners holding 25% or greater equity, or individuals exercising substantial executive control, are registered and verified.
                </p>

                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  Dual-Control Treasury Screening
                </h4>
                <p>
                  All outbound treasury transfers and intercompany funding movements are screened in real time against the Office of Foreign Assets Control (OFAC) Specially Designated Nationals (SDN) and Consolidated Sanctions lists prior to execution by the secondary authorized checker.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block">
                  Institutional Terms
                </span>
                <h3 className="text-base font-bold text-[#101D35]">
                  Terms of Corporate & Information Use
                </h3>
                <p>
                  The public pages of this web portal are provided solely for informational and institutional verification purposes. Nothing herein constitutes an offer to sell or the solicitation of an offer to purchase any security.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  1. Fiduciary Disclaimer & Non-Reliance
                </h4>
                <p>
                  Information regarding subsidiary operations and financial metrics is compiled from verified audits and internal records. Prospective co-investors or institutional partners must conduct independent due diligence under signed non-disclosure agreements prior to entering binding obligations.
                </p>

                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  2. Intellectual Property & Trademark Protection
                </h4>
                <p>
                  "DESTRIA GROUP INC.", the metallic gold geometric crest, and related marks are proprietary trademarks of DESTRIA GROUP INC. Unauthorized reproduction, scraping, or misrepresentation of affiliation is strictly prohibited under federal and state law.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-6 max-w-4xl">
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
                <span className="text-[10px] uppercase font-bold text-[#C5A46D] block">
                  Enterprise Security
                </span>
                <h3 className="text-base font-bold text-[#101D35]">
                  Data Governance & Cryptographic Log Retention
                </h3>
                <p>
                  In accordance with institutional standards, DESTRIA GROUP INC. collects minimal telemetry on public visitors while enforcing immutable cryptographic audit logging for all Enterprise Command Center interactions.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                  Command Center Audit Trail
                </h4>
                <p>
                  All logins, maker submissions, checker reviews, and document downloads within the Enterprise Command Center are recorded with timestamp, originating IP address, actor identifier, and cryptographic block hash. These records are retained for a minimum statutory period of seven (7) years.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

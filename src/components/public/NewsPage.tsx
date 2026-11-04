/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  FileCheck2,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter
} from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

export const NewsPage: React.FC = () => {
  const { claims } = useEnterprise();
  const [filterVerifiedOnly, setFilterVerifiedOnly] = useState(true);

  const pressReleases = [
    {
      id: 'pr-2026-04',
      date: 'November 01, 2026',
      title: 'DESTRIA GROUP INC. Authorizes FY2026 Consolidated Liquidity Facility of $125M',
      category: 'Treasury & Capital Directives',
      summary: 'Pursuant to Board Resolution RES-WY-2026-08, the parent corporation has formalized an expanded centralized revolving treasury pool to fund expansion across industrial robotics and renewable storage subsidiaries.',
      source: 'Board Resolution RES-WY-2026-08 Signed Record',
      verifiedBy: 'Eleanor Vance, Esq. (General Counsel)',
      verificationCode: 'VRF-2026-WY-9912'
    },
    {
      id: 'pr-2026-03',
      date: 'October 18, 2026',
      title: 'Destria CleanTech Reaches 420 MW Cumulative Operating Capacity in North American Grid Hubs',
      category: 'Operational Milestones',
      summary: 'Destria CleanTech & Grid Infrastructure LLC completes interconnection on its 80MW Laramie Basin battery stabilization facility under long-term utility power purchase agreements.',
      source: 'Utility Off-Take Agreements & PPA Docket',
      verifiedBy: 'Dr. Evelyn Morales, CPA (Audit Committee)',
      verificationCode: 'VRF-2026-CLT-4102'
    },
    {
      id: 'pr-2026-02',
      date: 'September 28, 2026',
      title: 'Independent Certified Audit Confirms Clean Opinion on FY2026 Consolidated Statements',
      category: 'Regulatory Filings',
      summary: 'Independent audit report confirms consolidated subsidiary capitalization, audited operating controls, and full compliance with statutory financial covenants and Wyoming administrative statutes.',
      source: 'Independent Auditor Report FY2026',
      verifiedBy: 'Marcus Thorne, CFA (VP of Finance)',
      verificationCode: 'VRF-2026-FIN-8840'
    },
    {
      id: 'pr-2026-01',
      date: 'August 14, 2026',
      title: 'Destria Industrial Dynamics Secures $45M Tier-1 Aerospace Supply Commitment',
      category: 'Commercial Contracts',
      summary: 'Destria Industrial Dynamics Corp. enters multi-year covenant to supply high-tolerance multi-axis titanium robotics assemblies conforming with AS9100D aerospace quality regimes.',
      source: 'Master Commercial Agreement DOC-IND-2026-44',
      verifiedBy: 'Eleanor Vance, Esq. (General Counsel)',
      verificationCode: 'VRF-2026-IND-3391'
    }
  ];

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Corporate Disclosures</span>
            <span>·</span>
            <span>Verified Press Registry</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            News, Releases &amp; Institutional Disclosures
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            In compliance with our institutional governance charter, all corporate releases, quantitative assertions, and subsidiary disclosures undergo formal legal review and maker-checker audit before publication.
          </p>
        </div>

        {/* Transparent Financial Reporting & Secure Corporate Records Visual */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-900 aspect-[21/9] sm:aspect-[16/7]">
          <img
            src={assetUrl('/images/corporate/disclosures_statutory_ledger.jpg')}
            alt="Institutional Digital Audit Treasury and High-Security Corporate Archive"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1324]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Regulatory Disclosure Visual Diagram */}
        <div className="bg-[#081220] p-4 sm:p-6 rounded-2xl border border-[#C5A46D]/30 shadow-lg overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Regulatory Disclosure &amp; Audit Trail
            </span>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded">
              Immutable Verification
            </span>
          </div>
          <img
            src={assetUrl('/images/corporate/disclosures_statutory_ledger.svg')}
            alt="Statutory Disclosures & Compliance Audit Ledger"
            className="w-full h-auto max-h-[440px] object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Controlled Content Verification Banner */}
        <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-6 h-6 text-[#C5A46D] shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-[#101D35]">
                Content Approval System (CMS) &amp; Verification Standard
              </h3>
              <p className="text-xs text-slate-600 mt-1 max-w-2xl leading-relaxed">
                DESTRIA GROUP INC. enforces strict zero-fabrication standards. Every numerical metric, revenue milestone, or capacity claim is cryptographically linked to an underlying legal document in the Enterprise Vault.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200 shrink-0 font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>100% Claims Pre-Audited</span>
          </div>
        </div>

        {/* Releases Grid */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#101D35]">
              Published Releases
            </h2>
            <span className="text-xs text-slate-500 font-mono">
              Displaying {pressReleases.length} Verified Releases
            </span>
          </div>

          <div className="space-y-6">
            {pressReleases.map(release => (
              <article
                key={release.id}
                className="p-7 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-colors space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#101D35] uppercase tracking-wider">
                      {release.category}
                    </span>
                    <span>·</span>
                    <span>{release.date}</span>
                  </div>
                  <div className="font-mono text-[11px] text-[#C5A46D] bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
                    Docket: {release.verificationCode}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-[#101D35] hover:text-[#C5A46D] transition-colors">
                  {release.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {release.summary}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="text-slate-500">
                    Substantiating Source: <span className="font-mono text-slate-700">{release.source}</span>
                  </div>
                  <div className="text-emerald-700 font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Verified by: {release.verifiedBy}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Controlled Public Claims Register */}
        <div className="bg-slate-50 p-8 rounded-lg border border-slate-200 space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
              Audit Transparency
            </span>
            <h3 className="text-lg font-bold text-[#101D35]">
              Active Public Claims Ledger (Legal Review Log)
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Live status of sensitive corporate statements displayed across public portals, authenticated by the General Counsel.
            </p>
          </div>

          <div className="divide-y divide-slate-200 bg-white rounded border border-slate-200 overflow-hidden text-xs">
            {claims.map(claim => (
              <div key={claim.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1 max-w-2xl">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500">
                    <span className="font-bold text-[#101D35]">{claim.pageContext}</span>
                    <span>·</span>
                    <span>Audited {claim.effectiveDate}</span>
                  </div>
                  <p className="text-slate-800 font-medium">"{claim.statement}"</p>
                  <span className="text-[10px] text-slate-500 block">Source: {claim.substantiatingSource}</span>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {claim.approvalStatus}
                  </span>
                  <span className="block text-[10px] text-slate-500 mt-1">Reviewer: {claim.legalReviewer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Handshake,
  Building,
  ShieldCheck,
  CheckCircle2,
  Send,
  Globe2,
  TrendingUp
} from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

export const PartnershipsPage: React.FC = () => {
  const [partnerType, setPartnerType] = useState('equity');
  const [formData, setFormData] = useState({
    institution: '',
    contactName: '',
    email: '',
    jurisdiction: '',
    targetSector: 'Advanced Precision Manufacturing',
    capitalRange: '$10M - $50M',
    proposalSummary: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.institution || !formData.contactName || !formData.email || !formData.proposalSummary) {
      setErrorMsg('Please complete all mandatory institutional inquiry fields.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Capital Syndication</span>
            <span>·</span>
            <span>Institutional Alliances</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Strategic Alliances & Co-Investment
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            DESTRIA GROUP INC. structures high-conviction joint ventures and institutional co-investments alongside global sovereign entities, Tier-1 industrial conglomerates, and regulated infrastructure funds.
          </p>
        </div>

        {/* Global Syndicate Visual Diagram */}
        <div className="bg-[#081426] p-4 sm:p-6 rounded-2xl border border-[#C5A46D]/30 shadow-lg overflow-hidden">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D]">
              Global Co-Investment Corridors
            </span>
            <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800 px-2.5 py-0.5 rounded">
              Tier-1 Clearing Network
            </span>
          </div>
          <img
            src={assetUrl('/images/corporate/partnerships_enterprise_syndicate.svg')}
            alt="Strategic Alliances and Syndicate Network"
            className="w-full h-auto max-h-[440px] object-contain mx-auto"
            loading="lazy"
          />
        </div>

        {/* Alliance Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Institutional Equity Co-Investment
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Direct minority and mezzanine co-investment alongside our operating subsidiaries with structured liquidation preferences, board observation rights, and quarterly audit disclosures.
            </p>
          </div>

          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Industrial Supply Consortiums
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Long-term multi-year master supply covenants for defense aerospace precision robotics, grid-scale lithium storage infrastructure, and intermodal freight yards.
            </p>
          </div>

          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <Globe2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Regional Managing Partnerships
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Operating within the NAICS 551114 charter to establish regional administrative offices and multi-jurisdictional joint ventures across North America and select allied trade jurisdictions.
            </p>
          </div>

        </div>

        {/* Institutional Intake Form */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-xl border border-slate-200">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
              Institutional Inquiry Intake
            </span>
            <h2 className="text-2xl font-bold text-[#101D35]">
              Submit Strategic Proposal or Co-Investment Brief
            </h2>
            <p className="text-xs text-slate-600 mt-2">
              Proposals are reviewed directly by the Office of the Chairman and Corporate General Counsel under strict confidentiality protocols.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-white border border-emerald-300 rounded-lg text-center space-y-4 max-w-xl mx-auto">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-lg font-bold text-[#101D35]">
                Inquiry Successfully Logged & Encrypted
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Thank you, <strong>{formData.contactName}</strong>. Your co-investment brief for <strong>{formData.institution}</strong> has been assigned tracking docket <span className="font-mono font-bold text-[#101D35]">PRT-2026-{(Math.random() * 9000 + 1000).toFixed(0)}</span>. The Corporate Legal Officer will respond within two business days.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    institution: '',
                    contactName: '',
                    email: '',
                    jurisdiction: '',
                    targetSector: 'Advanced Precision Manufacturing',
                    capitalRange: '$10M - $50M',
                    proposalSummary: ''
                  });
                }}
                className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] rounded"
              >
                Submit Additional Brief
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Institution / Organization Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={e => setFormData({ ...formData, institution: e.target.value })}
                    placeholder="e.g. Apex Sovereign Asset Management"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Authorized Representative Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactName}
                    onChange={e => setFormData({ ...formData, contactName: e.target.value })}
                    placeholder="e.g. Elena Rostova, Managing Partner"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Institutional Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@institution.com"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Jurisdiction of Domicile
                  </label>
                  <input
                    type="text"
                    value={formData.jurisdiction}
                    onChange={e => setFormData({ ...formData, jurisdiction: e.target.value })}
                    placeholder="e.g. New York, United States / Zurich, Switzerland"
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Target Operating Sector
                  </label>
                  <select
                    value={formData.targetSector}
                    onChange={e => setFormData({ ...formData, targetSector: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="Advanced Precision Manufacturing">Destria Industrial Dynamics (Precision Mfg)</option>
                    <option value="Renewable Power & Grid Storage">Destria CleanTech & Grid Infrastructure</option>
                    <option value="Intermodal Logistics">Destria Global Mobility & Logistics</option>
                    <option value="Structured Private Credit">Destria Strategic Capital Partners</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                    Capital Deployment Tranche
                  </label>
                  <select
                    value={formData.capitalRange}
                    onChange={e => setFormData({ ...formData, capitalRange: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="$5M - $10M">$5,000,000 – $10,000,000</option>
                    <option value="$10M - $50M">$10,000,000 – $50,000,000</option>
                    <option value="$50M - $150M">$50,000,000 – $150,000,000</option>
                    <option value=">$150M">$150,000,000+ Structured Facility</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Executive Brief & Strategic Mandate *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.proposalSummary}
                  onChange={e => setFormData({ ...formData, proposalSummary: e.target.value })}
                  placeholder="Outline the structure, rationale, and target timelines for the alliance..."
                  className="w-full px-4 py-2.5 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <button
                type="submit"
                className="px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all flex items-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#C5A46D]" />
                Transmit Strategic Brief
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

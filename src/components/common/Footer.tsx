/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { ShieldCheck, MapPin, Building2, Lock } from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

export const Footer: React.FC<{ onOpenAuth: () => void }> = ({ onOpenAuth }) => {
  const { setPublicPage } = useEnterprise();

  return (
    <footer className="bg-[#101D35] text-white border-t border-[#C5A46D]/30 pt-16 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-white/10">
          
          {/* Col 1: Corporate Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={assetUrl('/images/branding/destria-official-logo.png')}
                alt="DESTRIA GROUP INC."
                referrerPolicy="no-referrer"
                className="h-10 w-auto object-contain brightness-110"
              />
              <div>
                <span className="font-bold text-base tracking-tight text-white block">
                  DESTRIA GROUP INC.
                </span>
                <span className="text-[10px] tracking-widest text-[#C5A46D] uppercase font-semibold">
                  NAICS 551114 Holding
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed font-light">
              A Diversified Holding Corporation — Building, Managing, and Growing Strategic Enterprises for a Sustainable Future.
            </p>
            <div className="pt-2 text-xs text-[#C5A46D] font-medium tracking-wide italic">
              "Strength in Foundation. Excellence in Growth."
            </div>
          </div>

          {/* Col 2: Corporate Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] mb-4">
              Institutional Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={() => { setPublicPage('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Corporate Profile & Mandate
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setPublicPage('businesses'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Subsidiary Operating Entities
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setPublicPage('governance'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Board & Governance Charters
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setPublicPage('partnerships'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Strategic Alliances & JVs
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setPublicPage('news'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Verified Corporate Disclosures
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory Domicile */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] mb-4">
              Statutory Domicile & Registry
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  30 N Gould Street Ste N<br />
                  Sheridan, WY 82801, USA
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  Wyoming SOS Charter #WY-2024-001482910<br />
                  Entity Type: Domestic Profit Corporation
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#C5A46D] shrink-0 mt-0.5" />
                <span>
                  NAICS: 551114 — Corporate, Subsidiary, and Regional Managing Offices
                </span>
              </div>
            </div>
          </div>

          {/* Col 4: Private Enterprise Access */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] mb-4">
              Enterprise Access
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Access to the Enterprise Command Center is restricted to authorized directors, executive officers, and institutional compliance personnel.
            </p>
            <button
              onClick={onOpenAuth}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1A2E50] hover:bg-[#233C66] border border-[#C5A46D]/50 rounded transition-all cursor-pointer"
            >
              <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
              Enterprise Portal Sign In
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} DESTRIA GROUP INC. All rights reserved. Registered under the laws of the State of Wyoming.
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() => { setPublicPage('legal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-200 transition-colors"
            >
              Statutory Disclosures
            </button>
            <span>·</span>
            <button
              onClick={() => { setPublicPage('legal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-200 transition-colors"
            >
              NAICS 551114 Documentation
            </button>
            <span>·</span>
            <button
              onClick={() => { setPublicPage('legal'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="hover:text-slate-200 transition-colors"
            >
              Privacy & Compliance
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  Lock,
  Scale,
  Users,
  Award
} from 'lucide-react';
import { BoardResolution } from '../../types';

export const GovernancePage: React.FC = () => {
  const { resolutions } = useEnterprise();
  const [selectedResolution, setSelectedResolution] = useState<BoardResolution | null>(null);

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Corporate Oversight</span>
            <span>·</span>
            <span>Fiduciary Mandate</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Institutional Corporate Governance
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            DESTRIA GROUP INC. operates under institutional governance charters ensuring clear delegation of corporate powers, dual-authorization capital controls, and tamper-evident corporate resolutions.
          </p>
        </div>

        {/* Governance Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Maker-Checker Dual Controls
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              No unilateral financial transfer exceeding $500,000, subsidiary capitalization, or legal restructuring can be authorized by a single officer. The maker initiates; an independent checker verifies and digitally countersigns.
            </p>
          </div>

          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Standing Board Committees
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Permanent oversight maintained through three statutory committees: Audit & Risk Committee, Capital Allocation Committee, and the Fiduciary & Governance Committee, meeting quarterly under formal quorum rules.
            </p>
          </div>

          <div className="p-7 bg-slate-50 border border-slate-200 rounded-lg space-y-4">
            <div className="w-10 h-10 rounded bg-[#101D35] text-[#C5A46D] flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101D35]">
              Tamper-Evident Resolution Ledger
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every adopted board resolution and statutory amendment is cryptographically sealed into an immutable append-only ledger, enabling mathematical verification by independent enterprise auditors.
            </p>
          </div>

        </div>

        {/* Public Disclosed Resolutions */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                Public Record
              </span>
              <h2 className="text-2xl font-bold text-[#101D35]">
                Board Resolutions & Ratifications
              </h2>
            </div>
            <div className="text-xs text-slate-500 font-medium">
              Supervised under Wyoming Business Corporation Act
            </div>
          </div>

          <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 bg-white shadow-sm overflow-hidden">
            {resolutions.map(resolution => (
              <div
                key={resolution.id}
                className="p-6 hover:bg-slate-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#101D35] bg-slate-100 px-2.5 py-1 rounded">
                      {resolution.resolutionNumber}
                    </span>
                    <span className="text-xs text-[#C5A46D] font-semibold">
                      {resolution.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">
                      Proposed: {resolution.dateProposed}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#101D35]">
                    {resolution.title}
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {resolution.text}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <span className={`text-xs font-bold uppercase block ${
                      resolution.status === 'Adopted' ? 'text-emerald-700' : 'text-amber-700'
                    }`}>
                      {resolution.status}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      {resolution.signatories.length} Signatures
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedResolution(resolution)}
                    className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] border border-slate-300 hover:border-[#C5A46D] rounded bg-white transition-colors cursor-pointer"
                  >
                    View Text & Sigs
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resolution Details Modal */}
        {selectedResolution && (
          <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="font-mono text-xs font-bold text-[#C5A46D]">
                    {selectedResolution.resolutionNumber}
                  </span>
                  <h3 className="text-lg font-bold text-[#101D35]">
                    {selectedResolution.title}
                  </h3>
                  <span className="text-xs text-slate-500">
                    Sponsor: {selectedResolution.sponsor}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedResolution(null)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-bold"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="p-4 bg-slate-50 rounded border border-slate-200 font-serif leading-relaxed italic text-slate-800">
                  {selectedResolution.text}
                </div>

                <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-1">
                  <div className="font-bold text-[#101D35]">Voting Ledger & Quorum:</div>
                  <div className="text-slate-600">
                    Quorum Threshold: {selectedResolution.quorumRequired}
                  </div>
                  <div className="text-slate-600">
                    Votes Recorded: {selectedResolution.votesInFavor} In Favor, {selectedResolution.votesAgainst} Against, {selectedResolution.votesAbstain} Abstain
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D35] mb-2">
                    Verified Digital Signatories
                  </h4>
                  {selectedResolution.signatories.length === 0 ? (
                    <div className="text-slate-400 italic">No signatures affixed yet. Under active board consideration.</div>
                  ) : (
                    <div className="space-y-2">
                      {selectedResolution.signatories.map((sig, sIdx) => (
                        <div key={sIdx} className="p-3 bg-white rounded border border-slate-200 flex items-center justify-between">
                          <div>
                            <span className="font-bold text-slate-900 block">{sig.name}</span>
                            <span className="text-[11px] text-slate-500">{sig.title}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] font-mono text-emerald-700 block">Signed: {new Date(sig.signedAt).toLocaleDateString()}</span>
                            <span className="text-[9px] font-mono text-slate-400">Hash: {sig.signatureHash.substring(0, 16)}...</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedResolution(null)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#101D35] text-white rounded hover:bg-[#1A2E50]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { BoardResolution } from '../../types';
import {
  FileText,
  CheckCircle2,
  Plus,
  PenTool,
  ShieldCheck,
  Scale,
  X
} from 'lucide-react';

export const GovernanceTab: React.FC = () => {
  const { resolutions, createResolution, signResolution, currentUser } = useEnterprise();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<BoardResolution['category']>('Capital Allocation');
  const [newText, setNewText] = useState('');
  const [newQuorum, setNewQuorum] = useState('80% Supermajority');
  const [inspectResolution, setInspectResolution] = useState<BoardResolution | null>(null);

  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newText) return;
    createResolution(newTitle, newCategory, newText, newQuorum);
    setIsCreateOpen(false);
    setNewTitle('');
    setNewText('');
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Board Resolutions & Governance Ledgers
          </h2>
          <p className="text-xs text-slate-500">
            Formal board actions, voting records, and cryptographic signatures recorded under Wyoming corporate statutes.
          </p>
        </div>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm"
        >
          <Plus className="w-4 h-4 text-[#C5A46D]" />
          Table New Resolution
        </button>
      </div>

      {/* Resolutions List */}
      <div className="space-y-4">
        {resolutions.map(res => {
          const hasUserSigned = res.signatories.some(s => s.name === currentUser.name);

          return (
            <div
              key={res.id}
              className="p-6 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all shadow-sm space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs">
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-[#101D35] bg-slate-100 px-2 py-0.5 rounded">
                    {res.resolutionNumber}
                  </span>
                  <span className="font-semibold text-[#C5A46D]">{res.category}</span>
                  <span className="text-slate-400">·</span>
                  <span className="text-slate-500">Proposed: {res.dateProposed}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                    res.status === 'Adopted'
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                      : 'bg-amber-50 text-amber-800 border border-amber-200'
                  }`}>
                    {res.status}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-[#101D35] mb-2">{res.title}</h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed font-serif italic bg-slate-50 p-3 rounded border border-slate-100">
                  "{res.text}"
                </p>
              </div>

              {/* Signatories & Quorum Tracker */}
              <div className="pt-2 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs border-t border-slate-100">
                <div className="space-y-1">
                  <div className="text-slate-500 text-[11px]">
                    Sponsor: <span className="font-semibold text-slate-700">{res.sponsor}</span>
                  </div>
                  <div className="text-[11px] text-slate-600">
                    Signatures Affixed: <span className="font-mono font-bold text-[#101D35]">{res.signatories.length}</span> (Quorum: {res.quorumRequired})
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setInspectResolution(res)}
                    className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded"
                  >
                    View Details
                  </button>

                  {res.status !== 'Adopted' && (
                    <button
                      disabled={hasUserSigned}
                      onClick={() => signResolution(res.id)}
                      className={`px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center gap-1.5 ${
                        hasUserSigned
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-[#101D35] text-white hover:bg-[#1A2E50] cursor-pointer'
                      }`}
                    >
                      <PenTool className="w-3.5 h-3.5 text-[#C5A46D]" />
                      {hasUserSigned ? 'Signed by You' : 'Affix Digital Signature'}
                    </button>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Table New Resolution Modal */}
      {isCreateOpen && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-5 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-[#101D35]">
                Table Corporate Board Resolution
              </h3>
              <button onClick={() => setIsCreateOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Resolution Title *
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Authorization of Subsidiary Facility Expansion"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="Capital Allocation">Capital Allocation</option>
                    <option value="Corporate Governance">Corporate Governance</option>
                    <option value="Executive Appointment">Executive Appointment</option>
                    <option value="Statutory Filing">Statutory Filing</option>
                    <option value="Asset Acquisition">Asset Acquisition</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Quorum Threshold
                  </label>
                  <select
                    value={newQuorum}
                    onChange={e => setNewQuorum(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="80% Supermajority">80% Supermajority</option>
                    <option value="Unanimous Consent">Unanimous Consent</option>
                    <option value="Simple Majority">Simple Majority</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Formal Resolution Text (Legal Language) *
                </label>
                <textarea
                  rows={4}
                  required
                  value={newText}
                  onChange={e => setNewText(e.target.value)}
                  placeholder="BE IT RESOLVED, that the Board of Directors of DESTRIA GROUP INC. hereby authorizes..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-600">
                Tabling as: <strong>{currentUser.name}</strong> ({currentUser.title}). An initial affirmative vote will be automatically registered.
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsCreateOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#101D35] text-white rounded font-bold uppercase tracking-wider"
                >
                  Table Resolution
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Inspect Resolution Details Modal */}
      {inspectResolution && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-xl w-full p-6 space-y-5 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-[#C5A46D]">{inspectResolution.resolutionNumber}</span>
                <h3 className="text-base font-bold text-[#101D35]">{inspectResolution.title}</h3>
              </div>
              <button onClick={() => setInspectResolution(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded font-serif italic text-slate-800 leading-relaxed">
                {inspectResolution.text}
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-[#101D35] mb-2">
                  Affixed Digital Signatures
                </h4>
                <div className="space-y-2">
                  {inspectResolution.signatories.map((sig, idx) => (
                    <div key={idx} className="p-3 bg-white border border-slate-200 rounded flex items-center justify-between">
                      <div>
                        <div className="font-bold text-[#101D35]">{sig.name}</div>
                        <div className="text-[11px] text-slate-500">{sig.title}</div>
                      </div>
                      <div className="text-right font-mono text-[10px] text-emerald-700">
                        {sig.signatureHash.substring(0, 16)}...
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setInspectResolution(null)}
                className="px-4 py-2 bg-[#101D35] text-white rounded text-xs font-bold uppercase"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

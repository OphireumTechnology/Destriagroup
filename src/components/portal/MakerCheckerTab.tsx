/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { MakerCheckerAction } from '../../types';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Plus,
  Lock,
  ArrowRight,
  UserCheck,
  FileCheck2,
  X
} from 'lucide-react';

export const MakerCheckerTab: React.FC = () => {
  const {
    makerCheckerQueue,
    processMakerChecker,
    submitMakerAction,
    currentUser,
    switchRole
  } = useEnterprise();

  const [activeItemToReview, setActiveItemToReview] = useState<MakerCheckerAction | null>(null);
  const [reviewNotes, setReviewNotes] = useState('');
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  // New Maker action form
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [newActionType, setNewActionType] = useState<MakerCheckerAction['actionType']>('TREASURY_TRANSFER');
  const [newDesc, setNewDesc] = useState('');
  const [newEntity, setNewEntity] = useState('Destria Industrial Dynamics Corp.');
  const [newAmount, setNewAmount] = useState('1800000');

  const pendingItems = makerCheckerQueue.filter(i => i.status === 'PENDING_SECOND_APPROVAL');
  const pastItems = makerCheckerQueue.filter(i => i.status !== 'PENDING_SECOND_APPROVAL');

  const handleReviewSubmit = (decision: 'APPROVED' | 'REJECTED') => {
    if (!activeItemToReview) return;
    const res = processMakerChecker(activeItemToReview.id, decision, reviewNotes);
    if (res.success) {
      setFeedback({ type: 'success', message: res.message });
      setActiveItemToReview(null);
      setReviewNotes('');
    } else {
      setFeedback({ type: 'error', message: res.message });
    }
  };

  const handleCreateMakerAction = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newDesc) return;
    const amt = parseFloat(newAmount);
    submitMakerAction(newActionType, newDesc, newEntity, isNaN(amt) ? undefined : amt);
    setIsSubmitOpen(false);
    setNewDesc('');
    setFeedback({
      type: 'success',
      message: 'New corporate action submitted as Maker. Now waiting for independent Checker countersignature.'
    });
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Maker-Checker Dual-Control Approvals
          </h2>
          <p className="text-xs text-slate-500">
            Enforcing strict two-party authorization for high-value treasury transfers, entity restructuring, and resolution ratification.
          </p>
        </div>

        <button
          onClick={() => { setIsSubmitOpen(true); setFeedback(null); }}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm"
        >
          <Plus className="w-4 h-4 text-[#C5A46D]" />
          Submit Action as Maker
        </button>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg text-xs flex items-center justify-between gap-3 ${
          feedback.type === 'success'
            ? 'bg-emerald-50 border border-emerald-300 text-emerald-800'
            : 'bg-red-50 border border-red-300 text-red-800'
        }`}>
          <div className="flex items-center gap-2">
            {feedback.type === 'success' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
            )}
            <span>{feedback.message}</span>
          </div>
          <button onClick={() => setFeedback(null)} className="text-slate-500 hover:text-slate-800 font-bold">
            ✕
          </button>
        </div>
      )}

      {/* Maker-Checker Governance Principles Banner */}
      <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-6 h-6 text-[#C5A46D] shrink-0 mt-0.5" />
          <div className="text-xs text-slate-700 leading-relaxed">
            <strong className="text-[#101D35] block font-semibold mb-0.5">
              Current Active Persona: {currentUser.name} ({currentUser.title})
            </strong>
            The initiator of any action cannot approve their own submission. High-value disbursements require an authorized checker with Executive Committee clearance (CEO, General Counsel, or VP Finance).
          </div>
        </div>

        <div className="text-xs text-slate-500 shrink-0">
          Want to test both sides? Switch persona in the header dropdown.
        </div>
      </div>

      {/* Pending Items Queue */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold uppercase tracking-wider text-[#101D35]">
            Pending Dual-Control Action Queue ({pendingItems.length})
          </h3>
          <span className="text-xs text-amber-700 font-semibold font-mono">
            Awaiting Second Signature
          </span>
        </div>

        {pendingItems.length === 0 ? (
          <div className="p-8 bg-white border border-slate-200 rounded-lg text-center text-xs text-slate-500">
            No actions currently pending secondary approval. All dual-control items are up to date.
          </div>
        ) : (
          <div className="space-y-3">
            {pendingItems.map(item => {
              const isMaker = item.makerId === currentUser.id;

              return (
                <div
                  key={item.id}
                  className="p-6 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="font-mono font-bold text-[#101D35] bg-slate-100 px-2 py-0.5 rounded">
                        {item.id}
                      </span>
                      <span className="font-bold text-[#C5A46D]">
                        {item.actionType.replace(/_/g, ' ')}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-500">{item.entity}</span>
                    </div>

                    <h4 className="text-sm font-bold text-[#101D35]">{item.description}</h4>

                    <div className="text-xs text-slate-500 flex flex-wrap items-center gap-4">
                      <span>Maker: <strong className="text-slate-800">{item.makerName}</strong> ({item.makerRole})</span>
                      {item.amount && (
                        <span>Amount: <strong className="font-mono text-[#101D35]">${(item.amount / 1000000).toFixed(2)}M</strong></span>
                      )}
                      <span>Submitted: {new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {isMaker ? (
                      <div className="text-right">
                        <span className="text-[11px] font-bold text-amber-800 bg-amber-50 px-3 py-1.5 rounded border border-amber-200 block">
                          You are the Maker
                        </span>
                        <span className="text-[10px] text-slate-500 block mt-1">
                          Another officer must countersign
                        </span>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          setActiveItemToReview(item);
                          setFeedback(null);
                        }}
                        className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm flex items-center gap-1.5"
                      >
                        <UserCheck className="w-4 h-4 text-[#C5A46D]" />
                        Review as Checker
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Historical Executed / Rejected Queue */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-4">
        <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide border-b border-slate-100 pb-3">
          Executed & Audited Dual-Control History
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Docket</th>
                <th className="px-4 py-3">Action Description</th>
                <th className="px-4 py-3">Maker (Initiator)</th>
                <th className="px-4 py-3">Checker (Countersigner)</th>
                <th className="px-4 py-3">Digital Signature / Proof</th>
                <th className="px-4 py-3 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pastItems.map(item => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono font-bold text-[#101D35]">{item.id}</td>
                  <td className="px-4 py-3 text-slate-800 max-w-xs">{item.description}</td>
                  <td className="px-4 py-3 text-slate-600">{item.makerName}</td>
                  <td className="px-4 py-3 text-slate-800 font-semibold">{item.checkerName || '—'}</td>
                  <td className="px-4 py-3 font-mono text-[10px] text-slate-500">
                    {item.cryptographicSignature ? item.cryptographicSignature.substring(0, 16) + '...' : '—'}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.status === 'APPROVED_AND_EXECUTED'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {item.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Review & Countersign Modal */}
      {activeItemToReview && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-5 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="font-mono text-xs font-bold text-[#C5A46D]">{activeItemToReview.id}</span>
                <h3 className="text-base font-bold text-[#101D35]">
                  Checker Dual-Control Verification
                </h3>
              </div>
              <button onClick={() => setActiveItemToReview(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded space-y-1">
                <div><span className="text-slate-500">Action Type:</span> <strong>{activeItemToReview.actionType}</strong></div>
                <div><span className="text-slate-500">Entity:</span> <strong>{activeItemToReview.entity}</strong></div>
                <div><span className="text-slate-500">Maker:</span> <strong>{activeItemToReview.makerName}</strong> ({activeItemToReview.makerRole})</div>
                {activeItemToReview.amount && (
                  <div><span className="text-slate-500">Amount:</span> <strong className="font-mono text-base text-[#101D35]">${(activeItemToReview.amount / 1000000).toFixed(2)}M USD</strong></div>
                )}
                <div><span className="text-slate-500">Description:</span> <p className="text-slate-800 mt-1">{activeItemToReview.description}</p></div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Checker Rationale / Compliance Notes
                </label>
                <textarea
                  rows={3}
                  value={reviewNotes}
                  onChange={e => setReviewNotes(e.target.value)}
                  placeholder="Record verification of statutory quorum, balance availability, or due diligence..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-[11px] text-emerald-800 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  Affixing your signature as <strong>{currentUser.name}</strong> will execute this action and seal a cryptographic proof into the immutable audit ledger.
                </span>
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={() => handleReviewSubmit('REJECTED')}
                className="px-4 py-2 bg-rose-50 text-rose-700 hover:bg-rose-100 rounded text-xs font-bold uppercase border border-rose-200"
              >
                Reject Action
              </button>
              <button
                type="button"
                onClick={() => handleReviewSubmit('APPROVED')}
                className="px-5 py-2 bg-[#101D35] text-white hover:bg-[#1A2E50] rounded text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
                Countersign & Execute
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Submit Action as Maker Modal */}
      {isSubmitOpen && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-[#101D35]">
                Submit Action into Maker-Checker Queue
              </h3>
              <button onClick={() => setIsSubmitOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateMakerAction} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Action Classification *
                </label>
                <select
                  value={newActionType}
                  onChange={e => setNewActionType(e.target.value as any)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                >
                  <option value="TREASURY_TRANSFER">Treasury Transfer / Capital Call</option>
                  <option value="RESOLUTION_RATIFICATION">Resolution Ratification</option>
                  <option value="ENTITY_AMENDMENT">Entity Amendment / Restructuring</option>
                  <option value="EXECUTIVE_GRANT">Executive Grant / Compensation Directive</option>
                </select>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Corporate Entity Scope *
                </label>
                <input
                  type="text"
                  required
                  value={newEntity}
                  onChange={e => setNewEntity(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              {newActionType === 'TREASURY_TRANSFER' && (
                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Disbursement Amount (USD)
                  </label>
                  <input
                    type="number"
                    value={newAmount}
                    onChange={e => setNewAmount(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded font-mono font-bold focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>
              )}

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Operational Description & Justification *
                </label>
                <textarea
                  rows={3}
                  required
                  value={newDesc}
                  onChange={e => setNewDesc(e.target.value)}
                  placeholder="Detail the corporate purpose, authorization baseline, and urgency..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded text-[11px] text-slate-600">
                Initiating Maker: <strong>{currentUser.name}</strong> ({currentUser.title})
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsSubmitOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#101D35] text-white rounded font-bold uppercase tracking-wider"
                >
                  Submit Action
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

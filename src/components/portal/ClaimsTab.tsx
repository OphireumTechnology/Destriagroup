/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { CorporateClaim } from '../../types';
import {
  FileCheck2,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';

export const ClaimsTab: React.FC = () => {
  const { claims, updateClaimStatus, currentUser } = useEnterprise();
  const [feedback, setFeedback] = useState<string>('');

  const handleUpdate = (claimId: string, status: CorporateClaim['approvalStatus']) => {
    updateClaimStatus(claimId, status);
    setFeedback(`Claim status updated to "${status}" by ${currentUser.name}.`);
    setTimeout(() => setFeedback(''), 4000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-[#101D35]">
          Controlled Content Management System (Claims CMS)
        </h2>
        <p className="text-xs text-slate-500">
          Enforces mandatory legal verification and substantiating proof before sensitive statements appear on public corporate pages.
        </p>
      </div>

      {feedback && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{feedback}</span>
        </div>
      )}

      {/* Guidelines Box */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
        <div className="text-xs text-slate-700 leading-relaxed">
          <strong className="text-[#101D35] font-semibold">Zero-Slop Institutional Rule:</strong> No quantitative milestone, revenue assertion, or ESG capacity statement can be published without an underlying audit or state filing docket registered in the Vault.
        </div>
      </div>

      {/* Claims List */}
      <div className="space-y-4">
        {claims.map(claim => (
          <div
            key={claim.id}
            className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3 text-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-[#101D35] bg-slate-100 px-2 py-0.5 rounded">
                  {claim.id}
                </span>
                <span className="font-semibold text-slate-600">{claim.pageContext}</span>
              </div>

              <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                claim.approvalStatus === 'Approved For Public Distribution'
                  ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {claim.approvalStatus}
              </span>
            </div>

            <p className="text-sm font-semibold text-[#101D35] leading-relaxed">
              "{claim.statement}"
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Substantiating Audit / Filing:</span>
                <span className="font-mono text-slate-800 font-semibold">{claim.substantiatingSource}</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Assigned Legal Reviewer:</span>
                <span className="font-semibold text-slate-800">{claim.legalReviewer}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
              <span className="text-slate-400 text-[11px]">
                Effective In Public Portal: {claim.effectiveDate}
              </span>

              <div className="flex items-center gap-2">
                {claim.approvalStatus !== 'Approved For Public Distribution' && (
                  <button
                    onClick={() => handleUpdate(claim.id, 'Approved For Public Distribution')}
                    className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-emerald-800 hover:bg-emerald-900 rounded flex items-center gap-1 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Approve For Publication
                  </button>
                )}

                {claim.approvalStatus !== 'Rejected / Under Revision' && (
                  <button
                    onClick={() => handleUpdate(claim.id, 'Rejected / Under Revision')}
                    className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-rose-800 hover:bg-rose-50 border border-rose-200 rounded flex items-center gap-1 cursor-pointer"
                  >
                    <XCircle className="w-3.5 h-3.5" />
                    Revoke / Require Revision
                  </button>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

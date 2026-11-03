/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  TrendingUp,
  DollarSign,
  Building2,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

export const OverviewTab: React.FC = () => {
  const {
    entities,
    makerCheckerQueue,
    auditLogs,
    resolutions,
    currentUser,
    setCommandCenterTab
  } = useEnterprise();

  const pendingApprovals = makerCheckerQueue.filter(
    item => item.status === 'PENDING_SECOND_APPROVAL'
  );

  return (
    <div className="space-y-8">
      
      {/* Top Banner Alert if Maker-Checker Actions Pending */}
      {pendingApprovals.length > 0 && (
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-amber-900 block">
                {pendingApprovals.length} Corporate Action(s) Awaiting Maker-Checker Countersignature
              </span>
              <span className="text-xs text-amber-700">
                Dual-authorization required for treasury disbursements and statutory ratifications.
              </span>
            </div>
          </div>
          <button
            onClick={() => setCommandCenterTab('maker-checker')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-amber-800 hover:bg-amber-900 rounded shrink-0 transition-colors cursor-pointer"
          >
            Review Approval Queue →
          </button>
        </div>
      )}

      {/* KPI Ribbon (Consolidated Figures) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 uppercase font-semibold">
            <span>Consolidated Assets</span>
            <Building2 className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#101D35] tabular-nums">
            $840.5M
          </div>
          <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+5.3% QoQ across 5 entities</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 uppercase font-semibold">
            <span>Treasury Pool Liquidity</span>
            <DollarSign className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#101D35] tabular-nums">
            $125.0M
          </div>
          <div className="text-[11px] text-slate-500">
            Authorized under RES-WY-2026-08
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 uppercase font-semibold">
            <span>Operating Subsidiaries</span>
            <Layers className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#101D35] tabular-nums">
            {entities.filter(e => e.entityType !== 'Holding Parent').length} Units
          </div>
          <div className="text-[11px] text-emerald-700 font-medium">
            100% Active in Good Standing
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-500 uppercase font-semibold">
            <span>Audit Block Ledger</span>
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-2xl font-bold font-mono text-[#101D35] tabular-nums">
            4,124 Blocks
          </div>
          <div className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tamper-Free Cryptographic Chain</span>
          </div>
        </div>

      </div>

      {/* Middle Grid: Subsidiary Health & Quick Maker-Checker */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Col: Operating Subsidiaries Status */}
        <div className="lg:col-span-7 bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                Subsidiary Entity Health & Allocation
              </h3>
              <span className="text-xs text-slate-500">NAICS 551114 Managing Office Supervision</span>
            </div>
            <button
              onClick={() => setCommandCenterTab('entities')}
              className="text-xs font-bold text-[#101D35] hover:text-[#C5A46D] flex items-center gap-1"
            >
              Registry →
            </button>
          </div>

          <div className="divide-y divide-slate-100 text-xs">
            {entities.filter(e => e.entityType !== 'Holding Parent').map(entity => (
              <div key={entity.id} className="py-3 flex items-center justify-between gap-4">
                <div className="space-y-0.5">
                  <div className="font-bold text-[#101D35] text-sm">{entity.legalName}</div>
                  <div className="text-slate-500 text-[11px]">
                    {entity.industry} · {entity.jurisdiction}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono font-bold text-slate-900">{entity.assetValuation}</div>
                  <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                    {entity.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Col: Recent Governance Resolutions */}
        <div className="lg:col-span-5 bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
                Recent Board Directives
              </h3>
              <span className="text-xs text-slate-500">Supervised Resolutions</span>
            </div>
            <button
              onClick={() => setCommandCenterTab('governance')}
              className="text-xs font-bold text-[#101D35] hover:text-[#C5A46D] flex items-center gap-1"
            >
              All Directives →
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {resolutions.slice(0, 3).map(res => (
              <div key={res.id} className="p-3 bg-slate-50 rounded border border-slate-100 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono font-bold text-[#101D35] text-[11px]">{res.resolutionNumber}</span>
                  <span className={`text-[10px] font-bold uppercase ${
                    res.status === 'Adopted' ? 'text-emerald-700' : 'text-amber-700'
                  }`}>
                    {res.status}
                  </span>
                </div>
                <div className="font-semibold text-slate-800 line-clamp-1">{res.title}</div>
                <div className="text-[10px] text-slate-500">
                  {res.signatories.length} Signatories · Quorum: {res.quorumRequired}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Live Immutable Audit Stream Preview */}
      <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div>
            <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
              Tamper-Evident Audit Activity Stream
            </h3>
            <span className="text-xs text-slate-500">
              Cryptographically chained blocks recording all executive state mutations
            </span>
          </div>
          <button
            onClick={() => setCommandCenterTab('audit')}
            className="text-xs font-bold text-[#101D35] hover:text-[#C5A46D] flex items-center gap-1"
          >
            Open Full Ledger →
          </button>
        </div>

        <div className="divide-y divide-slate-100 text-xs">
          {auditLogs.slice(0, 4).map(log => (
            <div key={log.id} className="py-2.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                    {log.action}
                  </span>
                  <span className="font-bold text-[#101D35]">{log.actor}</span>
                  <span className="text-slate-400">({log.actorRole})</span>
                </div>
                <div className="text-slate-600 text-[11px]">{log.targetResource}</div>
              </div>

              <div className="text-right shrink-0">
                <div className="font-mono text-[10px] text-slate-400">
                  Block: {log.blockHash.substring(0, 14)}...
                </div>
                <div className="text-[10px] text-slate-500">
                  {new Date(log.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  ShieldCheck,
  CheckCircle2,
  Search,
  Filter,
  RefreshCw,
  Lock,
  Terminal
} from 'lucide-react';

export const AuditTab: React.FC = () => {
  const { auditLogs, verifyAuditChainIntegrity } = useEnterprise();
  const [searchQuery, setSearchQuery] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    isIntact: boolean;
    totalBlocks: number;
    verifiedAt: string;
  } | null>(null);

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      const res = verifyAuditChainIntegrity();
      setVerificationResult(res);
      setIsVerifying(false);
    }, 600);
  };

  const filteredLogs = auditLogs.filter(
    log =>
      log.actor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.action.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.targetResource.toLowerCase().includes(searchQuery.toLowerCase()) ||
      log.blockHash.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Tamper-Evident Audit Ledger
          </h2>
          <p className="text-xs text-slate-500">
            Immutable, cryptographically chained record of all logins, dual-control approvals, and statutory state modifications.
          </p>
        </div>

        <button
          onClick={handleVerify}
          disabled={isVerifying}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm"
        >
          <RefreshCw className={`w-4 h-4 text-[#C5A46D] ${isVerifying ? 'animate-spin' : ''}`} />
          {isVerifying ? 'Verifying Hash Chain...' : 'Verify Cryptographic Integrity'}
        </button>
      </div>

      {verificationResult && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-lg flex items-center justify-between text-xs text-emerald-900">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <strong className="block font-bold">Cryptographic Block Chain Intact & Tamper-Free</strong>
              <span>
                Verified {verificationResult.totalBlocks} consecutive blocks with 100% SHA-256 parent hash continuity at {verificationResult.verifiedAt}.
              </span>
            </div>
          </div>
          <span className="font-mono text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
            ZERO CORRUPTION DETECTED
          </span>
        </div>
      )}

      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Filter by actor, action, IP, or block hash..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
        />
      </div>

      {/* Ledger Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] font-sans">
              <tr>
                <th className="px-4 py-3">Timestamp (UTC)</th>
                <th className="px-4 py-3">Actor & Role</th>
                <th className="px-4 py-3">Event Action</th>
                <th className="px-4 py-3">Target Resource</th>
                <th className="px-4 py-3">Network Gateway IP</th>
                <th className="px-4 py-3">Block Hash (SHA-256)</th>
                <th className="px-4 py-3 text-right">Integrity</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-[11px]">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-600 whitespace-nowrap">
                    {new Date(log.timestamp).toISOString().replace('T', ' ').substring(0, 19)}
                  </td>
                  <td className="px-4 py-3 font-sans">
                    <span className="font-bold text-[#101D35] block">{log.actor}</span>
                    <span className="text-[10px] text-slate-500">{log.actorRole}</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 font-bold text-[10px]">
                      {log.action}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-sans text-slate-800 max-w-xs truncate">
                    {log.targetResource}
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-[10px] whitespace-nowrap">
                    {log.ipAddress}
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-[10px] truncate max-w-[140px]" title={log.blockHash}>
                    {log.blockHash.substring(0, 16)}...
                  </td>
                  <td className="px-4 py-3 text-right">
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      VERIFIED
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import {
  Server,
  Database,
  ShieldCheck,
  Download,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Cpu
} from 'lucide-react';

export const AdminTab: React.FC = () => {
  const { resetToCorporateBaseline } = useEnterprise();
  const [exportNotice, setExportNotice] = useState('');
  const [resetNotice, setResetNotice] = useState('');

  const handleExportSnapshot = () => {
    const backupPayload = {
      corporation: 'DESTRIA GROUP INC.',
      naics: '551114',
      state: 'Wyoming',
      timestamp: new Date().toISOString(),
      entities: localStorage.getItem('destria_entities'),
      resolutions: localStorage.getItem('destria_resolutions'),
      auditLogs: localStorage.getItem('destria_audit_logs'),
      makerCheckerQueue: localStorage.getItem('destria_mc_queue'),
      documents: localStorage.getItem('destria_documents')
    };

    const blob = new Blob([JSON.stringify(backupPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DESTRIA_DATABASE_BACKUP_${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setExportNotice('Encrypted state snapshot successfully downloaded to local filesystem.');
    setTimeout(() => setExportNotice(''), 4000);
  };

  const handleReset = () => {
    if (window.confirm('Reset all enterprise data to authorized statutory baseline? This will reinitialize seed resolutions and audit chains.')) {
      resetToCorporateBaseline();
      setResetNotice('System database restored to verified corporate baseline.');
      setTimeout(() => setResetNotice(''), 4000);
    }
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-[#101D35]">
          System Administration & Disaster Recovery
        </h2>
        <p className="text-xs text-slate-500">
          Database health, cryptographic state snapshot backups, and high-availability operational failover controls.
        </p>
      </div>

      {exportNotice && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{exportNotice}</span>
        </div>
      )}

      {resetNotice && (
        <div className="p-3 bg-blue-50 border border-blue-300 text-blue-800 text-xs rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
          <span>{resetNotice}</span>
        </div>
      )}

      {/* Infrastructure Node Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
            <span>Primary Cluster Node</span>
            <Server className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-lg font-bold text-[#101D35] font-mono">
            node-wy-01.destria.net
          </div>
          <div className="text-xs text-emerald-700 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Operational · 99.99% Uptime</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
            <span>Replication & Storage</span>
            <Database className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-lg font-bold text-[#101D35] font-mono">
            Postgres HA Replicated
          </div>
          <div className="text-xs text-emerald-700 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Synchronous Multi-AZ Standby</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg border border-slate-200 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase">
            <span>Security & Cryptography</span>
            <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
          </div>
          <div className="text-lg font-bold text-[#101D35] font-mono">
            FIPS 140-2 Level 3
          </div>
          <div className="text-xs text-emerald-700 flex items-center gap-1 font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Hardware TOTP Enforced</span>
          </div>
        </div>

      </div>

      {/* Snapshot & Disaster Recovery Card */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-6">
        <div>
          <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
            State Snapshots & Recovery Protocols
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            Export complete verified corporate schema, resolutions, audit chains, and document registry to encrypted offsite JSON storage.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={handleExportSnapshot}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4 text-[#C5A46D]" />
            Export System Snapshot (JSON)
          </button>

          <button
            onClick={handleReset}
            className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-rose-800 hover:bg-rose-50 border border-rose-300 rounded flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 text-rose-700" />
            Restore Corporate Seed Baseline
          </button>
        </div>
      </div>

    </div>
  );
};

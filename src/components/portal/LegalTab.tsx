/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { INITIAL_COMPLIANCE_FILINGS } from '../../data/corporateStore';
import {
  Scale,
  Building2,
  CheckCircle2,
  Calendar,
  AlertCircle,
  FileCheck2,
  ShieldCheck
} from 'lucide-react';

export const LegalTab: React.FC = () => {
  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="pb-4 border-b border-slate-200">
        <h2 className="text-xl font-bold text-[#101D35]">
          Legal & Statutory Compliance Management
        </h2>
        <p className="text-xs text-slate-500">
          Supervision of corporate charters, Secretary of State annual reports, and FinCEN beneficial ownership transparency.
        </p>
      </div>

      {/* Domicile & Statutory Agent Summary Banner */}
      <div className="p-6 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <span className="text-[10px] font-bold uppercase text-[#C5A46D] block mb-1">
            Parent Jurisdiction
          </span>
          <span className="text-sm font-bold text-[#101D35] block">
            State of Wyoming, USA
          </span>
          <span className="text-xs text-slate-500 mt-1 block">
            Charter ID: WY-2024-001482910 · Domestic Profit Corp
          </span>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase text-[#C5A46D] block mb-1">
            Registered Agent of Record
          </span>
          <span className="text-sm font-bold text-[#101D35] block">
            Registered Agents Inc.
          </span>
          <span className="text-xs text-slate-500 mt-1 block">
            30 N Gould Street Ste N, Sheridan, WY 82801
          </span>
        </div>

        <div>
          <span className="text-[10px] font-bold uppercase text-[#C5A46D] block mb-1">
            Standing & Regulatory Health
          </span>
          <span className="text-sm font-bold text-emerald-700 flex items-center gap-1.5 mt-0.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Active / Continuous Good Standing
          </span>
          <span className="text-xs text-slate-500 mt-1 block">
            Zero outstanding tax liens or statutory encumbrances
          </span>
        </div>
      </div>

      {/* Compliance Filings Matrix */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
            Statutory Filings & Regulatory Calendar
          </h3>
          <span className="text-xs text-slate-500">Supervised by Corporate General Counsel</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Reporting Entity</th>
                <th className="px-4 py-3">Filing & Obligation Type</th>
                <th className="px-4 py-3">Supervisory Authority</th>
                <th className="px-4 py-3">Statutory Due Date</th>
                <th className="px-4 py-3">Confirmation / Docket</th>
                <th className="px-4 py-3 text-right">Standing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {INITIAL_COMPLIANCE_FILINGS.map(filing => (
                <tr key={filing.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3.5 font-bold text-[#101D35]">
                    {filing.entityName}
                  </td>
                  <td className="px-4 py-3.5 text-slate-700 font-medium">
                    {filing.filingType}
                  </td>
                  <td className="px-4 py-3.5 text-slate-500">
                    {filing.jurisdiction}
                  </td>
                  <td className="px-4 py-3.5 font-mono text-slate-800">
                    {filing.dueDate}
                  </td>
                  <td className="px-4 py-3.5 font-mono text-[11px] text-[#C5A46D]">
                    {filing.confirmationCode}
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {filing.status}
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

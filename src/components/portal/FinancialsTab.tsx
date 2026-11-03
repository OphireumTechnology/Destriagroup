/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { FINANCIAL_HISTORICAL_DATA } from '../../data/corporateStore';
import {
  DollarSign,
  TrendingUp,
  ArrowRightLeft,
  FileCheck2,
  Plus,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

export const FinancialsTab: React.FC = () => {
  const { transactions, entities, submitMakerAction, currentUser } = useEnterprise();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [targetEntity, setTargetEntity] = useState(entities[1]?.legalName || '');
  const [amount, setAmount] = useState('2500000');
  const [facilityType, setFacilityType] = useState('Subordinated Revolver');
  const [memo, setMemo] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleInitiate = (e: React.FormEvent) => {
    e.preventDefault();
    const parsedAmount = parseFloat(amount);
    if (!parsedAmount || parsedAmount <= 0) return;

    submitMakerAction(
      'TREASURY_TRANSFER',
      `Intercompany ${facilityType} of $${(parsedAmount / 1000000).toFixed(2)}M to ${targetEntity}. Memo: ${memo || 'Strategic Capital Allocation'}`,
      targetEntity,
      parsedAmount
    );

    setSuccessMsg('Transfer submitted into Maker-Checker Queue. Requires secondary countersignature before release.');
    setIsModalOpen(false);
    setMemo('');
  };

  return (
    <div className="space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Financial Reporting & Treasury Capital Allocation
          </h2>
          <p className="text-xs text-slate-500">
            Consolidated GAAP figures, quarterly financial performance, and intercompany liquidity facilities.
          </p>
        </div>

        <button
          onClick={() => { setIsModalOpen(true); setSuccessMsg(''); }}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm"
        >
          <Plus className="w-4 h-4 text-[#C5A46D]" />
          Initiate Intercompany Transfer
        </button>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Historical Performance Table */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden space-y-4 p-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
              Consolidated Quarterly Performance Ledger
            </h3>
            <span className="text-xs text-slate-500">Audited figures in Millions USD ($M)</span>
          </div>
          <span className="text-xs font-mono font-bold text-[#C5A46D]">U.S. GAAP Compliant</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Quarter</th>
                <th className="px-4 py-3 text-right">Consolidated Revenue</th>
                <th className="px-4 py-3 text-right">EBITDA</th>
                <th className="px-4 py-3 text-right">Net Income</th>
                <th className="px-4 py-3 text-right">Free Cash Flow</th>
                <th className="px-4 py-3 text-right">Total Assets</th>
                <th className="px-4 py-3 text-right">Liabilities</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-mono">
              {FINANCIAL_HISTORICAL_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-sans font-bold text-[#101D35]">{row.period}</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-900">${row.revenue.toFixed(1)}M</td>
                  <td className="px-4 py-3 text-right tabular-nums text-emerald-700 font-semibold">${row.ebitda.toFixed(1)}M</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-900">${row.netIncome.toFixed(1)}M</td>
                  <td className="px-4 py-3 text-right tabular-nums text-[#C5A46D] font-bold">${row.freeCashFlow.toFixed(1)}M</td>
                  <td className="px-4 py-3 text-right tabular-nums font-bold text-[#101D35]">${row.assets.toFixed(1)}M</td>
                  <td className="px-4 py-3 text-right tabular-nums text-slate-500">${row.liabilities.toFixed(1)}M</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Intercompany Transactions Register */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-sm font-bold text-[#101D35] uppercase tracking-wide">
              Central Intercompany Facilities & Transfer Register
            </h3>
            <span className="text-xs text-slate-500">Dual-authorized intra-group capital movements</span>
          </div>
          <span className="text-xs text-slate-500">Threshold: $500,000+ Requires Checker</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px]">
              <tr>
                <th className="px-4 py-3">Docket ID</th>
                <th className="px-4 py-3">Originating Entity</th>
                <th className="px-4 py-3">Receiving Entity</th>
                <th className="px-4 py-3">Facility Type</th>
                <th className="px-4 py-3 text-right">Amount</th>
                <th className="px-4 py-3">Maker / Checker</th>
                <th className="px-4 py-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map(tx => (
                <tr key={tx.id} className="hover:bg-slate-50">
                  <td className="px-4 py-3 font-mono font-bold text-[#101D35]">{tx.id}</td>
                  <td className="px-4 py-3 text-slate-700 font-medium">{tx.originatingEntity}</td>
                  <td className="px-4 py-3 text-slate-700 font-medium">{tx.receivingEntity}</td>
                  <td className="px-4 py-3 text-slate-600">{tx.facilityType}</td>
                  <td className="px-4 py-3 text-right font-mono font-bold text-slate-900 tabular-nums">
                    ${(tx.amount / 1000000).toFixed(2)}M
                  </td>
                  <td className="px-4 py-3 text-slate-500 text-[11px]">
                    <div>M: {tx.maker}</div>
                    {tx.checker && <div className="text-emerald-700 font-medium">C: {tx.checker}</div>}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      tx.status === 'Executed'
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Transfer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-5 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-[#101D35]">
                Initiate Intercompany Treasury Transfer
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleInitiate} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Originating Account
                </label>
                <input
                  type="text"
                  readOnly
                  value="DESTRIA GROUP INC. — Central Treasury Pool ($125.0M Liquidity)"
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded font-semibold text-slate-700"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Receiving Operating Subsidiary *
                </label>
                <select
                  value={targetEntity}
                  onChange={e => setTargetEntity(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                >
                  {entities.filter(e => e.entityType !== 'Holding Parent').map(e => (
                    <option key={e.id} value={e.legalName}>
                      {e.legalName} ({e.jurisdiction})
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Transfer Amount (USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min={10000}
                    step={100000}
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded font-mono font-bold focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Facility Type
                  </label>
                  <select
                    value={facilityType}
                    onChange={e => setFacilityType(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="Subordinated Revolver">Subordinated Revolver</option>
                    <option value="Equity Contribution">Equity Contribution</option>
                    <option value="Equipment Financing">Equipment Financing</option>
                    <option value="Operating Credit">Operating Credit</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Justification Memo & Purpose
                </label>
                <textarea
                  rows={3}
                  value={memo}
                  onChange={e => setMemo(e.target.value)}
                  placeholder="e.g. Funding Phase II production line equipment acquisition..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="p-3 bg-amber-50 border border-amber-200 rounded text-[11px] text-amber-800 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Maker-Checker Enforcement:</strong> You will be logged as the Maker. The disbursement will remain in escrow until approved and countersigned by the CEO or General Counsel.
                </span>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#101D35] text-white rounded font-bold uppercase tracking-wider"
                >
                  Submit for Dual Approval
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

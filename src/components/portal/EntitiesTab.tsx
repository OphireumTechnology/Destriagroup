/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { CorporateEntity } from '../../types';
import {
  Building2,
  CheckCircle2,
  Plus,
  ShieldCheck,
  Search,
  ExternalLink,
  Edit2,
  X
} from 'lucide-react';

export const EntitiesTab: React.FC = () => {
  const { entities, currentUser } = useEnterprise();
  const [selectedEntity, setSelectedEntity] = useState<CorporateEntity | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = entities.filter(
    e =>
      e.legalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.naicsCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      e.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Corporate Entity & Subsidiary Registry
          </h2>
          <p className="text-xs text-slate-500">
            Official statutory registry of parent holding and operating units under NAICS 551114.
          </p>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search entity registry..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
          />
        </div>
      </div>

      {/* Table of Entities */}
      <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="px-5 py-3.5">Entity Name & Registration</th>
                <th className="px-5 py-3.5">Classification & NAICS</th>
                <th className="px-5 py-3.5">Jurisdiction</th>
                <th className="px-5 py-3.5">Equity Share</th>
                <th className="px-5 py-3.5">Valuation</th>
                <th className="px-5 py-3.5">Compliance Status</th>
                <th className="px-5 py-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map(entity => (
                <tr key={entity.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="px-5 py-4">
                    <div className="font-bold text-[#101D35] text-sm">{entity.legalName}</div>
                    <div className="font-mono text-[11px] text-slate-400">{entity.registrationNumber}</div>
                  </td>
                  <td className="px-5 py-4">
                    <span className="font-semibold text-slate-700 block">{entity.entityType}</span>
                    <span className="text-[10px] text-slate-500">{entity.naicsCode}</span>
                  </td>
                  <td className="px-5 py-4 text-slate-600">
                    {entity.jurisdiction}
                  </td>
                  <td className="px-5 py-4 font-mono font-bold text-[#101D35]">
                    {entity.ownershipPercentage}%
                  </td>
                  <td className="px-5 py-4 font-mono font-bold text-slate-900">
                    {entity.assetValuation}
                  </td>
                  <td className="px-5 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase rounded bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      {entity.status}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => setSelectedEntity(entity)}
                      className="px-3 py-1.5 text-xs font-semibold text-[#101D35] hover:text-[#C5A46D] bg-slate-100 hover:bg-slate-200 rounded transition-colors"
                    >
                      Dossier
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Entity Modal */}
      {selectedEntity && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-[10px] uppercase font-bold text-[#C5A46D]">
                  Corporate Entity Record
                </span>
                <h3 className="text-xl font-bold text-[#101D35]">
                  {selectedEntity.legalName}
                </h3>
                <span className="text-xs text-slate-500 font-mono">
                  Registry Code: {selectedEntity.registrationNumber}
                </span>
              </div>
              <button
                onClick={() => setSelectedEntity(null)}
                className="text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="grid grid-cols-2 gap-4 p-4 bg-slate-50 rounded border border-slate-200">
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Jurisdiction</span>
                  <span className="font-bold text-[#101D35]">{selectedEntity.jurisdiction}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Equity Capitalization</span>
                  <span className="font-bold text-[#101D35]">{selectedEntity.ownershipPercentage}% Holding Stake</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Managing Director</span>
                  <span className="font-bold text-[#101D35]">{selectedEntity.managingDirector}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[10px] uppercase">Annual Report Due</span>
                  <span className="font-bold text-[#101D35]">{selectedEntity.annualFilingDue}</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D35] mb-1">
                  Mandate & Operations
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {selectedEntity.summary}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D35] mb-2">
                  Portfolio Assets & Facilities
                </h4>
                <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
                  {selectedEntity.keyAssets.map((asset, i) => (
                    <li key={i}>{asset}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setSelectedEntity(null)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#101D35] text-white rounded hover:bg-[#1A2E50]"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

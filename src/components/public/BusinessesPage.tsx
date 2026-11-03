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
  Users,
  DollarSign,
  MapPin,
  ExternalLink,
  Search,
  X
} from 'lucide-react';

export const BusinessesPage: React.FC = () => {
  const { entities } = useEnterprise();
  const [selectedSector, setSelectedSector] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalEntity, setActiveModalEntity] = useState<CorporateEntity | null>(null);

  const operatingEntities = entities.filter(e => e.entityType !== 'Holding Parent');

  const filteredEntities = operatingEntities.filter(entity => {
    const matchesSector =
      selectedSector === 'all' ||
      entity.industry.toLowerCase().includes(selectedSector.toLowerCase());
    const matchesSearch =
      entity.legalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entity.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entity.naicsCode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSector && matchesSearch;
  });

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Title & Scope */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Portfolio Registry</span>
            <span>·</span>
            <span>Operating Subsidiaries</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Subsidiary Operating Companies
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            DESTRIA GROUP INC. exercises controlling and majority ownership stakes across specialized operating subsidiaries in advanced manufacturing, renewable infrastructure, supply chain mobility, and private credit.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          
          {/* Segmented sector filter buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'All Sectors' },
              { id: 'manufacturing', label: 'Advanced Precision' },
              { id: 'power', label: 'CleanTech & Grid' },
              { id: 'freight', label: 'Supply Chain Logistics' },
              { id: 'credit', label: 'Strategic Credit' }
            ].map(sector => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  selectedSector === sector.id
                    ? 'bg-[#101D35] text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:text-[#101D35] border border-slate-200'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search entity, NAICS, or asset..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D] transition-colors"
            />
          </div>

        </div>

        {/* Entities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredEntities.map(entity => (
            <div
              key={entity.id}
              className="p-8 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all hover:shadow-sm flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A46D] block mb-1">
                      {entity.entityType} · {entity.jurisdiction}
                    </span>
                    <h3 className="text-xl font-bold text-[#101D35]">
                      {entity.legalName}
                    </h3>
                    <span className="text-xs text-slate-500 font-mono mt-0.5 block">
                      {entity.naicsCode}
                    </span>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Holding Equity</span>
                    <span className="text-xl font-bold font-mono text-[#101D35]">
                      {entity.ownershipPercentage}%
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-600 leading-relaxed my-5">
                  {entity.summary}
                </p>

                {/* Key Assets */}
                <div className="space-y-2 mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                    Strategic Infrastructure & Assets
                  </span>
                  {entity.keyAssets.map((asset, aIdx) => (
                    <div key={aIdx} className="text-xs text-slate-700 flex items-start gap-2">
                      <span className="text-[#C5A46D] mt-0.5">•</span>
                      <span>{asset}</span>
                    </div>
                  ))}
                </div>

                {/* Fast Metrics */}
                <div className="grid grid-cols-3 gap-2 p-3 bg-slate-50 border border-slate-100 rounded text-center">
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Valuation</span>
                    <span className="text-xs font-bold font-mono text-[#101D35]">{entity.assetValuation}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Revenue</span>
                    <span className="text-xs font-bold font-mono text-[#101D35]">{entity.consolidatedRevenue}</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-slate-400 block">Headcount</span>
                    <span className="text-xs font-bold font-mono text-[#101D35]">{entity.employeeCount}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500">
                  Director: <strong className="text-slate-800">{entity.managingDirector}</strong>
                </span>

                <button
                  onClick={() => setActiveModalEntity(entity)}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101D35] hover:text-[#C5A46D] hover:bg-slate-50 rounded border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Inspect Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Entity Deep Dossier Modal */}
        {activeModalEntity && (
          <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
              
              <div className="flex items-start justify-between border-b border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#C5A46D]">
                    Subsidiary Corporate Dossier
                  </span>
                  <h3 className="text-xl font-bold text-[#101D35]">
                    {activeModalEntity.legalName}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    Registration No: {activeModalEntity.registrationNumber}
                  </span>
                </div>
                <button
                  onClick={() => setActiveModalEntity(null)}
                  className="p-1 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="p-4 bg-slate-50 rounded border border-slate-200 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Holding Ownership:</span>
                    <span className="font-bold text-[#101D35]">{activeModalEntity.ownershipPercentage}% Majority Interest</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Managing Director:</span>
                    <span className="font-bold text-[#101D35]">{activeModalEntity.managingDirector}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Statutory Domicile:</span>
                    <span className="font-bold text-[#101D35]">{activeModalEntity.jurisdiction}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">NAICS Industry:</span>
                    <span className="font-bold text-[#101D35]">{activeModalEntity.naicsCode}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Headquarters / Plant:</span>
                    <span className="font-bold text-[#101D35]">{activeModalEntity.headquarters}</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D35] mb-2">
                    Executive Overview & Operations
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    {activeModalEntity.summary}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#101D35] mb-2">
                    Key Portfolio Assets & Intercompany Facilities
                  </h4>
                  <ul className="space-y-1.5 pl-4 list-disc text-slate-600">
                    {activeModalEntity.keyAssets.map((asset, idx) => (
                      <li key={idx}>{asset}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded text-emerald-800 text-[11px] flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Statutory compliance and annual reporting verified with state authority. Status: <strong>{activeModalEntity.status}</strong></span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setActiveModalEntity(null)}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#101D35] text-white rounded hover:bg-[#1A2E50] cursor-pointer"
                >
                  Close Dossier
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

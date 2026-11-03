/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { VaultDocument } from '../../types';
import {
  Lock,
  FileText,
  Search,
  Upload,
  Download,
  Eye,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';

export const VaultTab: React.FC = () => {
  const { documents, uploadDocument, currentUser } = useEnterprise();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClassification, setSelectedClassification] = useState<string>('all');
  const [previewDoc, setPreviewDoc] = useState<VaultDocument | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState('');

  // Upload Form State
  const [title, setTitle] = useState('');
  const [docNumber, setDocNumber] = useState('');
  const [category, setCategory] = useState<VaultDocument['category']>('Regulatory Certificates');
  const [classification, setClassification] = useState<VaultDocument['classification']>('Restricted Corporate');
  const [entityRelated, setEntityRelated] = useState('DESTRIA GROUP INC.');
  const [summary, setSummary] = useState('');
  const [contentSnippet, setContentSnippet] = useState('');

  const filtered = documents.filter(doc => {
    const matchesSearch =
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.documentNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.entityRelated.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass =
      selectedClassification === 'all' || doc.classification === selectedClassification;
    return matchesSearch && matchesClass;
  });

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !docNumber || !contentSnippet) return;

    uploadDocument({
      title,
      documentNumber: docNumber,
      category,
      classification,
      entityRelated,
      fileSize: `${(Math.random() * 4 + 1.5).toFixed(1)} MB`,
      summary: summary || 'Confidential corporate document deposited into vault.',
      contentSnippet
    });

    setIsUploadOpen(false);
    setTitle('');
    setDocNumber('');
    setContentSnippet('');
    setSummary('');
  };

  const handleSimulatedDownload = (doc: VaultDocument) => {
    // Generate text/plain file with SHA-256 seal
    const fileContent = `DESTRIA GROUP INC. — CLASSIFIED DOCUMENT VAULT
Document Docket: ${doc.documentNumber}
Title: ${doc.title}
Entity: ${doc.entityRelated}
Classification: ${doc.classification}
SHA-256 Checksum: ${doc.sha256Checksum}
Deposited By: ${doc.uploader} on ${doc.dateUploaded}

------------------------------------------------------------------------
EXECUTIVE SUMMARY:
${doc.summary}

LEGAL BODY / CERTIFICATE TEXT:
${doc.contentSnippet}

------------------------------------------------------------------------
End of Document. Certified authentic under Wyoming statutory records.`;

    const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${doc.documentNumber}_CERTIFIED.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(`Downloaded certified copy of ${doc.documentNumber} with verified checksum.`);
    setTimeout(() => setDownloadSuccess(''), 5000);
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div>
          <h2 className="text-xl font-bold text-[#101D35]">
            Secure Corporate Document Vault
          </h2>
          <p className="text-xs text-slate-500">
            Encrypted repository of corporate articles, audited filings, board minutes, and master supply agreements.
          </p>
        </div>

        <button
          onClick={() => setIsUploadOpen(true)}
          className="flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all cursor-pointer shadow-sm"
        >
          <Upload className="w-4 h-4 text-[#C5A46D]" />
          Deposit Encrypted Document
        </button>
      </div>

      {downloadSuccess && (
        <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>{downloadSuccess}</span>
        </div>
      )}

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-lg">
        <div className="flex flex-wrap items-center gap-2">
          {['all', 'Board Confidential', 'Privileged & Secret', 'Restricted Corporate', 'Public Disclosure'].map(cls => (
            <button
              key={cls}
              onClick={() => setSelectedClassification(cls)}
              className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                selectedClassification === cls
                  ? 'bg-[#101D35] text-white'
                  : 'bg-white text-slate-600 hover:text-[#101D35] border border-slate-200'
              }`}
            >
              {cls === 'all' ? 'All Classifications' : cls}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search documents or checksum..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
          />
        </div>
      </div>

      {/* Documents Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map(doc => (
          <div
            key={doc.id}
            className="p-6 bg-white rounded-lg border border-slate-200 hover:border-[#C5A46D] transition-all shadow-sm flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-3 text-xs">
                <div>
                  <span className="font-mono font-bold text-[#101D35] text-xs bg-slate-100 px-2 py-0.5 rounded">
                    {doc.documentNumber}
                  </span>
                  <span className="text-[11px] text-slate-500 block mt-1">{doc.entityRelated}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                  doc.classification === 'Privileged & Secret'
                    ? 'bg-rose-50 text-rose-800 border border-rose-200'
                    : doc.classification === 'Board Confidential'
                    ? 'bg-amber-50 text-amber-800 border border-amber-200'
                    : 'bg-slate-100 text-slate-700'
                }`}>
                  {doc.classification}
                </span>
              </div>

              <h3 className="text-base font-bold text-[#101D35] line-clamp-1">{doc.title}</h3>
              <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{doc.summary}</p>

              <div className="p-2.5 bg-slate-50 rounded border border-slate-100 font-mono text-[10px] text-slate-500 truncate">
                SHA-256: {doc.sha256Checksum}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">
                {doc.fileSize} · Deposited {doc.dateUploaded}
              </span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPreviewDoc(doc)}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded flex items-center gap-1 cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5" />
                  Preview
                </button>
                <button
                  onClick={() => handleSimulatedDownload(doc)}
                  className="px-3 py-1.5 text-xs font-bold text-white bg-[#101D35] hover:bg-[#1A2E50] rounded flex items-center gap-1 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-[#C5A46D]" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200">
            <div className="flex items-start justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="font-mono text-xs font-bold text-[#C5A46D]">{previewDoc.documentNumber}</span>
                <h3 className="text-lg font-bold text-[#101D35]">{previewDoc.title}</h3>
                <span className="text-xs text-slate-500">Related: {previewDoc.entityRelated}</span>
              </div>
              <button onClick={() => setPreviewDoc(null)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3 bg-slate-50 rounded border border-slate-200 grid grid-cols-2 gap-2">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Classification</span>
                  <span className="font-bold text-[#101D35]">{previewDoc.classification}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase">Uploaded By</span>
                  <span className="font-bold text-[#101D35]">{previewDoc.uploader}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 block text-[10px] uppercase">SHA-256 Checksum</span>
                  <span className="font-mono text-[10px] text-slate-800 block truncate">{previewDoc.sha256Checksum}</span>
                </div>
              </div>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-[#101D35] mb-2">
                  Certified Text Extract
                </h4>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded font-serif italic text-slate-800 leading-relaxed max-h-60 overflow-y-auto">
                  {previewDoc.contentSnippet}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
              <button
                onClick={() => handleSimulatedDownload(previewDoc)}
                className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#101D35] text-white rounded hover:bg-[#1A2E50] flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5 text-[#C5A46D]" />
                Download Certified Record
              </button>
              <button
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-700 rounded hover:bg-slate-200"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {isUploadOpen && (
        <div className="fixed inset-0 z-50 bg-[#101D35]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-6 space-y-4 border border-slate-200">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="text-base font-bold text-[#101D35]">
                Deposit Encrypted Document into Vault
              </h3>
              <button onClick={() => setIsUploadOpen(false)} className="text-slate-400 hover:text-slate-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpload} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Document Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  placeholder="e.g. Master Operating Agreement Amendment"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Document Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={docNumber}
                    onChange={e => setDocNumber(e.target.value)}
                    placeholder="e.g. DOC-WY-2026-99"
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded font-mono focus:outline-none focus:border-[#C5A46D]"
                  />
                </div>

                <div>
                  <label className="block font-bold uppercase text-slate-700 mb-1">
                    Classification Level
                  </label>
                  <select
                    value={classification}
                    onChange={e => setClassification(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                  >
                    <option value="Restricted Corporate">Restricted Corporate</option>
                    <option value="Board Confidential">Board Confidential</option>
                    <option value="Privileged & Secret">Privileged & Secret</option>
                    <option value="Public Disclosure">Public Disclosure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Related Corporate Entity
                </label>
                <input
                  type="text"
                  value={entityRelated}
                  onChange={e => setEntityRelated(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Executive Summary
                </label>
                <input
                  type="text"
                  value={summary}
                  onChange={e => setSummary(e.target.value)}
                  placeholder="Brief high-level description"
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase text-slate-700 mb-1">
                  Document Body / Certified Excerpt *
                </label>
                <textarea
                  rows={4}
                  required
                  value={contentSnippet}
                  onChange={e => setContentSnippet(e.target.value)}
                  placeholder="Enter full legal provisions, resolution text, or contract clause..."
                  className="w-full px-3 py-2 bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsUploadOpen(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#101D35] text-white rounded font-bold uppercase tracking-wider"
                >
                  Encrypt & Deposit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

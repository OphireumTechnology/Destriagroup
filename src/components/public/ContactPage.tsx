/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  MapPin,
  Building2,
  Mail,
  Phone,
  CheckCircle2,
  Send,
  ShieldCheck,
  Clock
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    department: 'Investor Relations & Capital Allocation',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Please complete all required fields.');
      return;
    }
    setErrorMessage('');
    setSubmitted(true);
  };

  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="border-b border-slate-200 pb-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#C5A46D] uppercase mb-3">
            <span>Corporate Communications</span>
            <span>·</span>
            <span>Statutory Domicile</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#101D35] tracking-tight">
            Contact DESTRIA GROUP INC.
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-3xl leading-relaxed">
            Direct communications to the Corporate Managing Office in Sheridan, Wyoming. Formal institutional inquiries, service of process, and investor communications are processed according to statutory governance protocols.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Headquarters Details & Statutory Info */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-8 bg-[#101D35] text-white rounded-lg border border-[#C5A46D]/40 space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-[#C5A46D]">
                Principal Executive Office
              </h3>

              <div className="space-y-5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-semibold mb-1">
                      Statutory & Managing Headquarters:
                    </strong>
                    <span>
                      DESTRIA GROUP INC.<br />
                      30 N Gould Street Ste N<br />
                      Sheridan, WY 82801, USA
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-semibold mb-1">
                      Classification & Charter:
                    </strong>
                    <span>
                      NAICS 551114 — Corporate Managing Offices<br />
                      Wyoming SOS ID: WY-2024-001482910
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-semibold mb-1">
                      Institutional Dispatch:
                    </strong>
                    <span>
                      general.counsel@destriagroup.com<br />
                      investor.relations@destriagroup.com
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#C5A46D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm font-semibold mb-1">
                      Executive Business Hours:
                    </strong>
                    <span>
                      Monday – Friday: 08:30 – 17:30 Mountain Time (MT)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 text-[11px] text-slate-400">
                Statutory Agent of Record: Registered Agents Inc., Sheridan, WY. For legal service of process, address directly to Office of the General Counsel.
              </div>
            </div>

            {/* Fiduciary Notice Box */}
            <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#101D35] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                <span>Confidentiality & Communications Policy</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                All communications sent to DESTRIA GROUP INC. are received under strict corporate confidentiality. Unsolicited non-public trade secrets or unverified transaction solicitations will be logged in accordance with SEC and Wyoming statutory record retention schedules.
              </p>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 bg-white border border-slate-200 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#101D35] mb-2">
                Executive & Institutional Inquiry
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Please complete the form below. Inquiries are routed immediately to the relevant corporate division.
              </p>

              {submitted ? (
                <div className="p-8 bg-slate-50 border border-emerald-300 rounded text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-lg font-bold text-[#101D35]">
                    Inquiry Docket Assigned
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Thank you, <strong>{formData.fullName}</strong>. Your communication regarding <strong>{formData.subject}</strong> has been logged with corporate reference <span className="font-mono font-bold text-[#101D35]">INQ-WY-2026-{(Math.random() * 90000 + 10000).toFixed(0)}</span>.
                  </p>
                  <p className="text-[11px] text-slate-500">
                    A formal acknowledgment has been dispatched to <strong>{formData.email}</strong>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        organization: '',
                        email: '',
                        phone: '',
                        department: 'Investor Relations & Capital Allocation',
                        subject: '',
                        message: ''
                      });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] rounded"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMessage && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Robert H. Vance"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Organization / Firm
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={e => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Horizon Trust & Credit Corp"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@organization.com"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Direct Telephone
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Target Corporate Division
                    </label>
                    <select
                      value={formData.department}
                      onChange={e => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                    >
                      <option value="Investor Relations & Capital Allocation">Office of Capital Allocation & Investor Relations</option>
                      <option value="Office of the General Counsel">Office of the General Counsel & Legal Affairs</option>
                      <option value="Subsidiary Operational Inquiry">Subsidiary Management & Commercial Partnership</option>
                      <option value="Institutional Audit & Compliance">Institutional Compliance & Statutory Registry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Subject / Docket Matter *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={e => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Concise summary of institutional matter"
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Detailed Communication *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please articulate the full particulars of your inquiry..."
                      className="w-full px-3.5 py-2 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#C5A46D]" />
                    Dispatch Formal Inquiry
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

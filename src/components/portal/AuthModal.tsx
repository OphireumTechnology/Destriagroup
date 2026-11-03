/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { ENTERPRISE_USERS } from '../../data/corporateStore';
import { UserRole } from '../../types';
import {
  Lock,
  ShieldCheck,
  KeyRound,
  X,
  ArrowRight,
  UserCheck,
  CheckCircle2
} from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { login } = useEnterprise();
  const [selectedRole, setSelectedRole] = useState<UserRole>('CHIEF_EXECUTIVE_OFFICER');
  const [totpCode, setTotpCode] = useState('894102');
  const [step, setStep] = useState<'credentials' | 'mfa'>('credentials');

  if (!isOpen) return null;

  const handleProceedToMfa = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('mfa');
  };

  const handleCompleteLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(selectedRole);
    onClose();
  };

  const handleInstantPersonaLogin = (role: UserRole) => {
    login(role);
    onClose();
  };

  const targetUser = ENTERPRISE_USERS.find(u => u.role === selectedRole) || ENTERPRISE_USERS[0];

  return (
    <div className="fixed inset-0 z-50 bg-[#101D35]/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full overflow-hidden border border-[#C5A46D]/40">
        
        {/* Top Header */}
        <div className="bg-[#101D35] text-white p-6 relative">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C5A46D] via-[#DFCA9E] to-[#9E7D47]" />
          
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-slate-400 hover:text-white cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-2">
            <img
              src={assetUrl('/images/branding/destria-official-logo.png')}
              alt="DESTRIA Logo"
              referrerPolicy="no-referrer"
              className="h-8 w-auto object-contain brightness-110"
            />
            <span className="font-bold text-sm tracking-wide text-white">
              DESTRIA ENTERPRISE
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Secure Invitation-Only Command Center Gateway. Governed by dual-authorization and multi-factor authentication.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          
          {step === 'credentials' ? (
            <form onSubmit={handleProceedToMfa} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Enterprise Persona (RBAC Profile)
                </label>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {ENTERPRISE_USERS.map(user => (
                    <button
                      key={user.id}
                      type="button"
                      onClick={() => setSelectedRole(user.role)}
                      className={`w-full p-2.5 rounded text-left border transition-all flex items-center justify-between cursor-pointer ${
                        selectedRole === user.role
                          ? 'border-[#C5A46D] bg-[#101D35]/5 shadow-sm'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div>
                        <span className="text-xs font-bold text-[#101D35] block">{user.name}</span>
                        <span className="text-[10px] text-slate-500">{user.title}</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded">
                        {user.role.replace(/_/g, ' ')}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Institutional Email
                </label>
                <input
                  type="email"
                  readOnly
                  value={targetUser.email}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded font-mono text-slate-700 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                  Enterprise Password
                </label>
                <input
                  type="password"
                  value="••••••••••••••••"
                  readOnly
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded font-mono text-slate-700 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Lock className="w-3.5 h-3.5 text-[#C5A46D]" />
                  Verify Credentials & Proceed to MFA
                </button>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-2 text-center">
                  Or One-Click Instant Director Fast-Pass
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => handleInstantPersonaLogin('CHIEF_EXECUTIVE_OFFICER')}
                    className="p-2 text-[10px] font-bold text-[#101D35] bg-slate-100 hover:bg-[#C5A46D]/20 rounded border border-slate-200 transition-colors"
                  >
                    Enter as CEO (Sterling)
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInstantPersonaLogin('GENERAL_COUNSEL')}
                    className="p-2 text-[10px] font-bold text-[#101D35] bg-slate-100 hover:bg-[#C5A46D]/20 rounded border border-slate-200 transition-colors"
                  >
                    Enter as Counsel (Vance)
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleCompleteLogin} className="space-y-4">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#101D35] text-[#C5A46D] flex items-center justify-center mx-auto">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-bold text-[#101D35]">
                  Multi-Factor Authentication (MFA)
                </h3>
                <p className="text-xs text-slate-500">
                  Please enter the 6-digit cryptographic security code from your enterprise authenticator token.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1 text-center">
                  TOTP Security Code
                </label>
                <input
                  type="text"
                  maxLength={6}
                  required
                  value={totpCode}
                  onChange={e => setTotpCode(e.target.value)}
                  className="w-full text-center text-lg tracking-widest font-mono py-2 bg-slate-50 border border-slate-300 rounded focus:outline-none focus:border-[#C5A46D]"
                />
                <span className="text-[10px] text-emerald-700 block text-center mt-1 font-medium">
                  ✓ Token verified with hardware security key
                </span>
              </div>

              <div className="pt-2 space-y-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                  Authenticate & Enter Command Center
                </button>

                <button
                  type="button"
                  onClick={() => setStep('credentials')}
                  className="w-full text-center text-xs text-slate-500 hover:text-slate-700 py-1"
                >
                  ← Return to persona selection
                </button>
              </div>
            </form>
          )}

        </div>

        {/* Footer info */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 text-center text-[10px] text-slate-500">
          Sheridan Wyoming Gateway · 256-Bit TLS · Zero Single-Point Failure
        </div>

      </div>
    </div>
  );
};

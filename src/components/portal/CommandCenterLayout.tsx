/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { ENTERPRISE_USERS } from '../../data/corporateStore';
import { UserRole } from '../../types';
import {
  ShieldCheck,
  LayoutDashboard,
  Building2,
  FileText,
  DollarSign,
  Scale,
  Lock,
  UserCheck,
  FileCheck2,
  ListFilter,
  Settings,
  LogOut,
  Globe2,
  Menu,
  X,
  ChevronDown,
  User
} from 'lucide-react';

import { OverviewTab } from './OverviewTab';
import { EntitiesTab } from './EntitiesTab';
import { GovernanceTab } from './GovernanceTab';
import { FinancialsTab } from './FinancialsTab';
import { LegalTab } from './LegalTab';
import { VaultTab } from './VaultTab';
import { MakerCheckerTab } from './MakerCheckerTab';
import { ClaimsTab } from './ClaimsTab';
import { AuditTab } from './AuditTab';
import { AdminTab } from './AdminTab';

export const CommandCenterLayout: React.FC = () => {
  const {
    currentUser,
    switchRole,
    logout,
    setActiveView,
    commandCenterTab,
    setCommandCenterTab,
    makerCheckerQueue
  } = useEnterprise();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const pendingMcCount = makerCheckerQueue.filter(
    i => i.status === 'PENDING_SECOND_APPROVAL'
  ).length;

  const navItems = [
    { id: 'overview', label: 'Executive Overview', icon: LayoutDashboard },
    { id: 'entities', label: 'Subsidiary Registry', icon: Building2 },
    { id: 'governance', label: 'Board Resolutions', icon: FileText },
    { id: 'financials', label: 'Financial Oversight', icon: DollarSign },
    { id: 'legal', label: 'Legal & Compliance', icon: Scale },
    { id: 'vault', label: 'Secure Document Vault', icon: Lock },
    {
      id: 'maker-checker',
      label: 'Maker-Checker Approvals',
      icon: UserCheck,
      badge: pendingMcCount > 0 ? pendingMcCount : undefined
    },
    { id: 'claims-cms', label: 'Controlled Claims CMS', icon: FileCheck2 },
    { id: 'audit', label: 'Audit Hash Ledger', icon: ShieldCheck },
    { id: 'admin', label: 'System Administration', icon: Settings }
  ];

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      
      {/* Top Bar for Command Center */}
      <header className="sticky top-0 z-40 bg-[#101D35] text-white border-b border-[#C5A46D]/40 shadow-md">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Left: Brand Identity & Subtitle */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                className="lg:hidden p-1.5 text-slate-300 hover:text-white"
              >
                <Menu className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3">
                <img
                  src="/images/branding/destria-official-logo.png"
                  alt="DESTRIA Logo"
                  referrerPolicy="no-referrer"
                  className="h-8 w-auto object-contain brightness-110"
                />
                <div className="hidden sm:block">
                  <span className="font-bold text-sm tracking-tight text-white block leading-tight">
                    DESTRIA GROUP INC.
                  </span>
                  <span className="text-[10px] tracking-widest text-[#C5A46D] uppercase font-semibold">
                    Enterprise Command Center · NAICS 551114
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Persona Switcher, MFA & Navigation to Public */}
            <div className="flex items-center gap-3 sm:gap-5">
              
              {/* Persona Switcher Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-[#1A2E50] hover:bg-[#233C66] border border-[#C5A46D]/50 rounded text-left transition-colors cursor-pointer"
                >
                  <div className="w-6 h-6 rounded bg-[#101D35] text-[#C5A46D] font-mono text-[10px] font-bold flex items-center justify-center shrink-0">
                    {currentUser.avatarInitials}
                  </div>
                  <div className="hidden md:block">
                    <span className="text-xs font-bold text-white block leading-tight">
                      {currentUser.name}
                    </span>
                    <span className="text-[9px] text-[#C5A46D] block">
                      {currentUser.role.replace(/_/g, ' ')}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                </button>

                {roleDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-slate-200 py-2 z-50 text-slate-800">
                    <div className="px-3 py-2 border-b border-slate-100 text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Switch Active Persona (Test Dual Controls)
                    </div>
                    {ENTERPRISE_USERS.map(u => (
                      <button
                        key={u.id}
                        onClick={() => {
                          switchRole(u.role);
                          setRoleDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer ${
                          currentUser.role === u.role ? 'bg-slate-100 font-bold text-[#101D35]' : 'text-slate-600'
                        }`}
                      >
                        <div>
                          <div className="font-semibold">{u.name}</div>
                          <div className="text-[10px] text-slate-500">{u.title}</div>
                        </div>
                        {currentUser.role === u.role && (
                          <span className="text-[10px] text-[#C5A46D] font-bold">Active</span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Public Website Button */}
              <button
                onClick={() => setActiveView('public')}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded border border-white/10 transition-colors cursor-pointer"
              >
                <Globe2 className="w-3.5 h-3.5 text-[#C5A46D]" />
                <span>Public Site</span>
              </button>

              {/* Logout */}
              <button
                onClick={logout}
                title="Sign out of Command Center"
                className="p-2 text-slate-300 hover:text-rose-400 transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Main Workspace: Sidebar + Content */}
      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 flex gap-6">
        
        {/* Desktop Left Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0 space-y-1">
          <div className="p-3 bg-white rounded-lg border border-slate-200 shadow-sm mb-4 space-y-1">
            <div className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">
              Supervisory Seat
            </div>
            <div className="text-xs font-bold text-[#101D35]">
              Sheridan Headquarters
            </div>
            <div className="text-[10px] text-emerald-700 flex items-center gap-1 font-semibold">
              <ShieldCheck className="w-3 h-3 text-emerald-600" />
              <span>TLS 256-Bit Authenticated</span>
            </div>
          </div>

          <nav className="space-y-1">
            {navItems.map(item => {
              const Icon = item.icon;
              const isActive = commandCenterTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => setCommandCenterTab(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#101D35] text-white shadow-sm font-bold'
                      : 'text-slate-700 hover:bg-white hover:text-[#101D35]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#C5A46D]' : 'text-slate-500'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge !== undefined && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono font-bold rounded-full bg-amber-500 text-white">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Mobile Drawer */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 lg:hidden bg-[#101D35]/70 backdrop-blur-sm flex">
            <div className="w-72 bg-white h-full p-4 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b pb-3">
                <span className="font-bold text-sm text-[#101D35]">Enterprise Navigation</span>
                <button onClick={() => setMobileSidebarOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-1">
                {navItems.map(item => {
                  const Icon = item.icon;
                  const isActive = commandCenterTab === item.id;

                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCommandCenterTab(item.id);
                        setMobileSidebarOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold rounded ${
                        isActive ? 'bg-[#101D35] text-white' : 'text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="w-4 h-4" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge !== undefined && (
                        <span className="px-1.5 py-0.5 text-[10px] bg-amber-500 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button
                  onClick={() => {
                    setActiveView('public');
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full py-2 text-xs font-bold text-center text-[#101D35] bg-slate-100 rounded"
                >
                  Return to Public Website
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main className="flex-1 min-w-0">
          {commandCenterTab === 'overview' && <OverviewTab />}
          {commandCenterTab === 'entities' && <EntitiesTab />}
          {commandCenterTab === 'governance' && <GovernanceTab />}
          {commandCenterTab === 'financials' && <FinancialsTab />}
          {commandCenterTab === 'legal' && <LegalTab />}
          {commandCenterTab === 'vault' && <VaultTab />}
          {commandCenterTab === 'maker-checker' && <MakerCheckerTab />}
          {commandCenterTab === 'claims-cms' && <ClaimsTab />}
          {commandCenterTab === 'audit' && <AuditTab />}
          {commandCenterTab === 'admin' && <AdminTab />}
        </main>

      </div>

    </div>
  );
};

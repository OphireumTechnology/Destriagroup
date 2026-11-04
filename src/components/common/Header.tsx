/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { useEnterprise } from '../../context/EnterpriseContext';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';
import { assetUrl } from '../../utils/assetPath';

interface HeaderProps {
  onOpenAuth: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenAuth }) => {
  const { publicPage, setPublicPage, isAuthenticated, setActiveView } = useEnterprise();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'businesses', label: 'Businesses' },
    { id: 'governance', label: 'Governance' },
    { id: 'partnerships', label: 'Partnerships' },
    { id: 'news', label: 'Disclosures' },
    { id: 'contact', label: 'Contact' },
    { id: 'legal', label: 'Legal' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-colors">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Single Brand element */}
          <button
            onClick={() => {
              setPublicPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 shrink-0 text-left focus:outline-none group cursor-pointer"
          >
            <img
              src={assetUrl('/images/branding/destria-official-logo.png')}
              alt="DESTRIA GROUP INC."
              referrerPolicy="no-referrer"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <span className="text-base font-bold tracking-tight text-[#101D35] block leading-tight">
                DESTRIA GROUP INC.
              </span>
              <span className="text-[10px] tracking-widest text-[#C5A46D] uppercase font-semibold">
                Holding & Enterprise Management
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (single-line, clean typography, responsive breakpoint) */}
          <nav className="hidden min-[1180px]:flex items-center gap-5 xl:gap-7">
            {navLinks.map(link => {
              const isActive = publicPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setPublicPage(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-xs font-semibold tracking-wider uppercase whitespace-nowrap shrink-0 transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#101D35] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#C5A46D]'
                      : 'text-slate-600 hover:text-[#101D35]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {isAuthenticated ? (
              <button
                onClick={() => setActiveView('command-center')}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                Command Center
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] hover:bg-[#1A2E50] border border-[#C5A46D]/60 rounded-md transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
              >
                <span>Enterprise Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </button>
            )}
          </div>

          {/* Mobile & Tablet Menu Button */}
          <div className="flex min-[1180px]:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#101D35] focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu Drawer */}
      {mobileMenuOpen && (
        <div className="min-[1180px]:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
          {navLinks.map(link => (
            <button
              key={link.id}
              onClick={() => {
                setPublicPage(link.id);
                setMobileMenuOpen(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`block w-full text-left py-2.5 text-sm font-semibold tracking-wide uppercase ${
                publicPage === link.id ? 'text-[#C5A46D]' : 'text-slate-700 hover:text-[#101D35]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-slate-100">
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setActiveView('command-center');
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] rounded-md"
              >
                <ShieldCheck className="w-4 h-4 text-[#C5A46D]" />
                Open Command Center
              </button>
            ) : (
              <button
                onClick={() => {
                  onOpenAuth();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-wider text-white bg-[#101D35] rounded-md"
              >
                Enterprise Portal Login
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A46D]" />
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

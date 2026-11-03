/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { EnterpriseProvider, useEnterprise } from './context/EnterpriseContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomePage } from './components/public/HomePage';
import { AboutPage } from './components/public/AboutPage';
import { BusinessesPage } from './components/public/BusinessesPage';
import { GovernancePage } from './components/public/GovernancePage';
import { PartnershipsPage } from './components/public/PartnershipsPage';
import { NewsPage } from './components/public/NewsPage';
import { ContactPage } from './components/public/ContactPage';
import { LegalPage } from './components/public/LegalPage';
import { CommandCenterLayout } from './components/portal/CommandCenterLayout';
import { AuthModal } from './components/portal/AuthModal';

const MainApp: React.FC = () => {
  const { activeView, publicPage } = useEnterprise();
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  if (activeView === 'command-center') {
    return <CommandCenterLayout />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#101D35]">
      <Header onOpenAuth={() => setIsAuthOpen(true)} />

      <main className="flex-1">
        {publicPage === 'home' && <HomePage onOpenAuth={() => setIsAuthOpen(true)} />}
        {publicPage === 'about' && <AboutPage />}
        {publicPage === 'businesses' && <BusinessesPage />}
        {publicPage === 'governance' && <GovernancePage />}
        {publicPage === 'partnerships' && <PartnershipsPage />}
        {publicPage === 'news' && <NewsPage />}
        {publicPage === 'contact' && <ContactPage />}
        {publicPage === 'legal' && <LegalPage />}
      </main>

      <Footer onOpenAuth={() => setIsAuthOpen(true)} />
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default function App() {
  return (
    <EnterpriseProvider>
      <MainApp />
    </EnterpriseProvider>
  );
}

'use client';

import React, { memo } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayout = memo(function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}); 
// src/app/layout.tsx

import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar/page';
import Footer from './Footer/page';

interface LayoutProps {
  children: ReactNode;
  metadata: Metadata;
}

const fontSans = Inter({ subsets: ['latin'] });

const Layout: React.FC<LayoutProps> = ({ children, metadata }) => {
  return (
    <>
      <html lang="en" className="flex-col">
        <Navbar />
        <body
          className={`min-h-screen bg-background font-sans antialiased mt-24 flex-grow`}
        >
          {children}
        </body>
        <Footer />
      </html>
    </>
  );
};

export default Layout;

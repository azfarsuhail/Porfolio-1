import React, { ReactNode } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './Navbar/page';
import Footer from './Footer/page';

interface LayoutProps {
  children: ReactNode;
  metadata: Metadata;
}

const fontSans = Inter({ subsets: ['latin'] }); // Specify subsets here

const Layout = ({ children, metadata }: LayoutProps) => {
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
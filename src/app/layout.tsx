import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import type { Metadata } from 'next';
import * as React from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
            {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}

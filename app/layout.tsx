import type { Metadata } from "next";
import "./globals.css";
import { IBM_Plex_Sans as IBMPlexSans} from 'next/font/google';
import React from "react";

const ibmPlexSans = IBMPlexSans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Coffee Connoisseur',
  description: 'Discover your local coffee shops',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSans.className}>{children}</body>
    </html>
  );
}

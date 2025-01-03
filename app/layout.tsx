import type { Metadata, Viewport } from "next";
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from "react";
import dynamic from 'next/dynamic';

import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";
import { SafeHydration } from "@/components/safeHydration";

import "./globals.css";

// Dynamically import StarsCanvas with SSR disabled
const StarsCanvas = dynamic(
  () => import('@/components/main/star-background').then((mod) => mod.StarsCanvas),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.jpg" type="image/jpg" />
      </head>
      <body
        className={cn(
          "bg-[#030014] overflow-y-scroll overflow-x-hidden",
          inter.className
        )}
      >
        <SafeHydration>
          <StarsCanvas />
        </SafeHydration>
        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}


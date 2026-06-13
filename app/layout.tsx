import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Climate_Crisis } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';


const inter = Inter({subsets:['latin'],variable:'--font-sans'});
const climateCrisis = Climate_Crisis({ subsets: ['latin'], variable: '--font-climate-crisis' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hack the Arts",
  description: "Hack the Arts is a one-month online creative hackathon for high school students. Invent entirely new ways of creating art that wouldn't exist without technology.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable, climateCrisis.variable)}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
        <Script src="https://scripts.simpleanalyticscdn.com/latest.js"  />
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { PORTFOLIO } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
  description: PORTFOLIO.bio,
  keywords: ["Trịnh Quang Tâm", "Full-Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: PORTFOLIO.name }],
  openGraph: {
    title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
    description: PORTFOLIO.bio,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${PORTFOLIO.name} — ${PORTFOLIO.role}`,
    description: PORTFOLIO.bio,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

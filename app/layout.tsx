import type { Metadata } from "next";
import { Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PORTFOLIO } from "@/lib/data";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

const BASE_URL = "https://tamagok4.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${PORTFOLIO.name} - ${PORTFOLIO.role}`,
    template: `%s - ${PORTFOLIO.name}`,
  },
  description: PORTFOLIO.bio,
  keywords: ["Trịnh Quang Tâm", "Full-Stack Developer", "React", "Next.js", "Node.js", "ASP.NET Core", "Portfolio"],
  authors: [{ name: PORTFOLIO.name, url: BASE_URL }],
  creator: PORTFOLIO.name,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${PORTFOLIO.name} - ${PORTFOLIO.role}`,
    description: PORTFOLIO.bio,
    url: BASE_URL,
    siteName: PORTFOLIO.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO.name} - ${PORTFOLIO.role}`,
    description: PORTFOLIO.bio,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO.name,
    jobTitle: PORTFOLIO.role,
    description: PORTFOLIO.bio,
    url: BASE_URL,
    email: `mailto:${PORTFOLIO.socials.email}`,
    sameAs: [PORTFOLIO.socials.github, PORTFOLIO.socials.linkedin].filter(Boolean),
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "FPT University",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          <ScrollProgress />
          {children}
        </Providers>
      </body>
    </html>
  );
}

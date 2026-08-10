import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SITE, TEAM } from "@/lib/site";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  icons: {
    icon: [{ url: "/brand/whispervolt-logo.png", type: "image/png" }],
    apple: [{ url: "/brand/whispervolt-logo.png", type: "image/png" }],
    shortcut: "/brand/whispervolt-logo.png",
  },
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    images: [{ url: SITE.logo }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [SITE.logo],
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  url: SITE.url,
  email: SITE.email,
  description: SITE.description,
  logo: `${SITE.url}${SITE.logo}`,
  sameAs: [
    TEAM.darya.github,
    TEAM.darya.linkedin,
    TEAM.nima.github,
    TEAM.nima.linkedin,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.title,
  url: SITE.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className={`${GeistSans.className} flex min-h-full flex-col`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

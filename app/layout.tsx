import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dannyok.com"),
  title: "Danny O'Kelley — Technical Marketer & Builder",
  description: "Danny O'Kelley works where technology, customer behavior, and business meet. A personal site about the path, the work, and occasional notes.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Danny O'Kelley — Technical Marketer & Builder",
    description: "Marketing brain. Systems instincts. Builder's curiosity.",
    url: "https://dannyok.com",
    siteName: "Danny O'Kelley",
    type: "website",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Danny O'Kelley — Marketing brain. Systems instincts. Builder's curiosity." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danny O'Kelley — Technical Marketer & Builder",
    description: "Marketing brain. Systems instincts. Builder's curiosity.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png" },
};

export const viewport: Viewport = {
  themeColor: "#f2efe6",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Danny O'Kelley",
    url: "https://dannyok.com",
    email: "mailto:danny@dannyok.com",
    sameAs: ["https://www.linkedin.com/in/dkokelley", "https://github.com/dkokelley"],
    homeLocation: { "@type": "Place", name: "Southern California" },
    knowsAbout: ["Search marketing", "Technology", "Business systems", "Web development"],
  };

  return (
    <html lang="en">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}

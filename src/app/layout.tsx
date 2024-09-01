import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from '@/components/shared/Footer';
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smada Store",
  description: "An e-commerce platform for listing and managing products.",
  openGraph: {
    title: "Smada Store",
    description: "An e-commerce platform for listing and managing products.",
    images: ["/images/og-image.jpg"],
    url: "https://smada-store.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="robots" href="/robots.txt" />
      </Head>
      <body className={`${montserrat.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

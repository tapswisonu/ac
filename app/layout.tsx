import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import Footer from "@/components/layout/Footer";
import ChatbotWidget from "@/components/chatbot/ChatbotWidget";
import GlobalConsultationModal from "@/components/modals/GlobalConsultationModal";
import MobileStickyCTA from "@/components/layout/MobileStickyCTA";

const inter = Inter({ subsets: ["latin"] });

import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col bg-gray-50`}>
        <SiteHeader />
        <main className="flex-1 pt-[112px]">
          {children}
        </main>
        <Footer />
        <GlobalConsultationModal />
        <MobileStickyCTA />
        <ChatbotWidget />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import BackgroundEffects from "@/components/BackgroundEffects";
import AnimatedCursor from "@/components/AnimatedCursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ChatbotWidget from "@/components/ChatbotWidget";
import ToastContainer from "@/components/ToastContainer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "Manish Talla | AI & Software Developer",
  description: "Portfolio of Manish Talla, AI Developer and Software Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-white selection:bg-blue-500/30 selection:text-white`}>
        <AnimatedCursor />
        <BackgroundEffects />

        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>

        {/* Global Chatbot Widget */}
        <ChatbotWidget />
        <ToastContainer />
      </body>
    </html>
  );
}

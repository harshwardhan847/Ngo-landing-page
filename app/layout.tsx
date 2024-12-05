import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Strings } from "@/constants/strings";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `${Strings.ORGANIZATION_NAME} - Sheltering Dreams, Building Futures`,
  description: `${Strings.ORGANIZATION_NAME} provides shelter and support for homeless children and hardworking individuals, helping them build a better future.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Toaster richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}

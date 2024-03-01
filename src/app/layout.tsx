import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Providers from "./providers";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "This is IMDb clone website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

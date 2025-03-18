import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeModeScript } from "flowbite-react";
import "./globals.css";
import Header from "./components/ui/header";
import Footer from "./components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Try 3D - Gdje vaše ideju postaju stvarnost!",
  description:
    "Usluge 3D Printanja. Uskršnji popust na modele zeca i još mnogo toga. Javite nam se!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeModeScript />
      </head>
      <body className={(inter.className = "bg-white dark:bg-gray-900")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

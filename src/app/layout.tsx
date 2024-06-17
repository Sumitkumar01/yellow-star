import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { BackToTop, Footer, Navbar } from "./Components";
import Whatsapp from "./Components/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yellow Star",
  description: "Yellow Star - Your premier destination for top-quality hotel kitchen equipment and display solutions. From ovens to tables, we build everything your hotel kitchen needs.",
  keywords:"Yellow Star kitchen equipment, Hotel kitchen solutions, Professional ovens, Commercial kitchen tables, Display solutions for hotels, Kitchen equipment for hotels",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}  className={inter.className}>
        <Navbar />
        {children}
        <Footer/>
        <BackToTop/>
        <Whatsapp/>
      </body>
    </html>
  );
}

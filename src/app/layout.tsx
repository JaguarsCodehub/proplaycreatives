import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display, Poppins, Montserrat, Cormorant, Cormorant_SC } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import HeroPill from '@/components/hero-pill';
import AdminLink from '@/components/admin-link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const merriweather = Cormorant({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "400","500", "700"], // Add weights as needed
});

export const metadata: Metadata = {
  title: "Pro Play Creatives",
  description: "Brought to you by world class brands & Creatives",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${playfairDisplay.variable} ${poppins.variable} ${merriweather.variable} antialiased`}
      >
        <Navbar />
        <AdminLink />
        {/* <HeroPill
          href='https://badget.tech/blog/introducing-Badget-ai'
          label='Introducing Badget.ai'
          announcement='📣 Announcement'
          isExternal
          className='bg-[hsl(187,80.8%,34.7%)]/20 ring-[hsl(210,40%,96.1%)] [&_div]:bg-[hsl(210,40%,96.1%)] [&_div]:text-[hsl(187,80.8%,34.7%)] [&_p]:text-[hsl(187,80.8%,34.7%)] [&_svg_path]:fill-[hsl(187,80.8%,34.7%)]'
        /> */}
        <main className='pt-16'>{children}</main>
      </body>
    </html>
  );
}

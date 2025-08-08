import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Logo from "@/components/Logo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KeyBored",
  description: "Learn touch typing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 flex justify-center`}
      >
        <div className="max-w-maxScreen h-screen w-full flex justify-center maxScreen:border-x-1">
          <div className="w-full max-w-[1600px] flex flex-col gap-4 py-10 sm:px-20 sm:py-2">
            <Logo />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
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
        <div className="max-w-maxScreen h-screen w-full flex justify-center">
          <div className="w-full max-w-[1600px] flex flex-col gap-4 py-10 px-6 sm:px-28 sm:pt-6 sm:pb-10 maxScreen:border-x-1 border-dashed border-gray-400 selection:bg-indigo-500 selection:text-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

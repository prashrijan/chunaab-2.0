import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Chunaab - One Stop Online Voting System | Secure & Easy Elections",
    description: "Chunaab.com is a one-stop online voting system designed for secure, transparent, and hassle-free elections. Create, manage, and participate in elections from anywhere with ease.",
    keywords: "online voting, election platform, secure elections, vote online, manage elections, easy voting system, chunaab",
    authors: [{ name: "Chunaab Team" }],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

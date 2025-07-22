import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/Sidebar"

const  poppins = Poppins({
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets  : ["latin"]
})

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
        className={`${poppins.variable} antialiased`}
      >
      <SidebarProvider>
          <AppSidebar />
          <main>
              <SidebarTrigger />
              {children}
          </main>
      </SidebarProvider>
      </body>
    </html>
  );
}

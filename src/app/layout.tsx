import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beechworth Pizza & Takeaway | Handcrafted Pizzas, Pastas & Meal Deals Beechworth",
  description: "Beechworth's favourite pizzeria on Camp Street. Handcrafted hand-stretched pizzas, custom interactive pizza builder, hearty pastas, crispy wings, and direct pickup family meal deals. Call (03) 5728 1062.",
  keywords: [
    "Beechworth Pizza",
    "Beechworth Pizza & Takeaway",
    "Pizza Beechworth VIC",
    "Camp Street Beechworth",
    "Takeaway Beechworth",
    "Pizza delivery Beechworth",
    "High Country pizza"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

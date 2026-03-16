import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcopolo Cafe - Premium Coffee & Dining in Koramangala",
  description: "Experience the finest coffee and exquisite menu at Marcopolo Cafe in Koramangala, Bangalore. Open 9 AM to 11 PM. Reserve your table today.",
  keywords: "cafe, premium restaurant, Koramangala, Bangalore, artisanal coffee, fine dining",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

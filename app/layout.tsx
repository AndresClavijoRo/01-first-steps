import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const geistSans = Lato({
  variable: "--font-geist-sans",
  weight: ["100", "300", "900"],
  subsets: ["latin"],
});
const geistMono = Lato({
  variable: "--font-geist-mono",
  weight: ["100", "300", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andres Home Page",
  description: "Andres Home Page",
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

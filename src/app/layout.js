import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Jerin’s Portfolio",
  description: "A modern developer portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* client-side layout render hocche...*/}
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}

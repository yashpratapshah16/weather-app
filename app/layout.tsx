import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "This Web app show the current weather and 5 days forecast based on city name provided.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased p-5 h-[100vh] flex flex-col bg-black text-[#809EA1]`}
      >
        <Toaster
          toastOptions={
            {
              className:'border border-white',
              style: {
                background: '#000000',
                color: '#809EA1'
              }
            }
          } />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

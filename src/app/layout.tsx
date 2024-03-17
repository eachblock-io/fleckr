import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AquaTrack",
  description: "Revolutionize yor Catfish Farming Experience with AquaTrack",
  openGraph: {
    type: "website",
    url: "https://aquatrack-landingpage.vercel.app",
    title: "AquaTrack",
    description: "Revolutionize yor Catfish Farming Experience with AquaTrack",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1710679187/seo-card1.png",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AquaTrack",
    description: "Revolutionize yor Catfish Farming Experience with AquaTrack",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1710679187/seo-card1.png",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

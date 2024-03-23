import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fleckr",
  description:
    "Crafting Your Digital Presence: Building Websites That Speak Your Brand's Language",
  openGraph: {
    type: "website",
    url: "https://fleckr.vercel.app/",
    title: "Fleckr",
    description:
      "Crafting Your Digital Presence: Building Websites That Speak Your Brand's Language",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1711226372/favicon.png",
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fleckr",
    description:
      "Crafting Your Digital Presence: Building Websites That Speak Your Brand's Language",
    images: [
      {
        url: "https://res.cloudinary.com/calebcloud/image/upload/v1711226372/favicon.png",
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

import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: "Sujal Singh Portfolio",
  description: "AI/ML Developer and Software Engineer.",
  openGraph: {
    title: "Sujal Singh Portfolio",
    description: "AI/ML Developer and Software Engineer.",
    url: "https://your-portfolio.com",
    siteName: "Sujal Portfolio",
    images: [
      {
        url: "https://your-portfolio.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const calSans = LocalFont({ src: "../public/fonts/CalSans-SemiBold.ttf", variable: "--font-calsans" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>
      <body className="bg-black">{children}</body>
    </html>
  );
}

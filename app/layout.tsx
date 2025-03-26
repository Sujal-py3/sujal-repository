"use client";
import "../global.css";
import { Github, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Sujal Singh | Portfolio",
    template: "%s | Sujal Singh",
  },
  description: "AI/ML Developer, Researcher, and Software Engineer.",
  openGraph: {
    title: "Sujal Singh | Portfolio",
    description:
      "AI/ML Developer, Researcher, and Software Engineer specializing in NLP, Computer Vision, and Distributed Systems.",
    url: "https://sujalsingh.com",
    siteName: "Sujal Singh Portfolio",
    images: [
      {
        url: "https://sujalsingh.com/og.png",
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
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Sujal Singh",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};

const socials = [
  {
    icon: <Linkedin size={20} />, 
    href: "https://linkedin.com/in/sujal-singh-413264252/",
    label: "LinkedIn",
    handle: "Sujal Singh",
  },
  {
    icon: <Mail size={20} />, 
    href: "mailto:sujal3177@gmail.com",
    label: "Email",
    handle: "sujal3177@gmail.com",
  },
  {
    icon: <Github size={20} />, 
    href: "https://github.com/Sujal-py3",
    label: "Github",
    handle: "Sujal-py3",
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Analytics />
      </head>
      <body className="bg-black">
        <Navigation />
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                >
                  <span
                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                    aria-hidden="true"
                  />
                  <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                    {s.icon}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Lora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk-fallback",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora-fallback",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono-fallback",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jon Doe | Lead Creative Technologist & Full-Stack Developer",
  description: "Zine-style Neo-Brutalist portfolio of Jon Doe, featuring interactive creative coding, retro web experiments, and full-stack systems engineering.",
  keywords: ["Jon Doe", "Creative Technologist", "Full-Stack Developer", "Neo-Brutalism", "Next.js Portfolio", "GSAP", "Framer Motion"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lora.variable} ${jetbrainsMono.variable}`}>
      <body>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}


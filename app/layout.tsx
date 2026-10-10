import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "John L. Palangeo — Minimalist Futuristic Portfolio",
  description:
    "Portfolio of John L. Palangeo, Information Technology specialist, creative developer, full-stack software engineer, and UI/UX designer based in Tabuk City, Kalinga, Philippines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-electric-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}

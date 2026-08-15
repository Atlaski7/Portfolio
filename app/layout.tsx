import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RJSD — Creative Workspace",
  description: "RJSD is a creative workspace for web development, game development, animation, 3D modeling, and media.",
  metadataBase: new URL("https://atlaski7.github.io/Roel-John-Delute-portfolio/"),
  openGraph: {
    title: "RJSD - Creative Workspace",
    description: "Creative work across web, games, animation, 3D modeling, and media. Featuring Kazam.",
    images: [{ url: "/og.png", width: 1729, height: 910, alt: "RJSD Media - Featured Project: Kazam" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RJSD - Creative Workspace",
    description: "Creative work across web, games, animation, 3D modeling, and media. Featuring Kazam.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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

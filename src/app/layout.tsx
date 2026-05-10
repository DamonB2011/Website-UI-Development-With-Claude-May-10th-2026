import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luminary — Design systems that move",
  description:
    "A living design system platform with animated components, real-time tokens, and AI-assisted motion so every product feels alive.",
  openGraph: {
    title: "Luminary — Design systems that move",
    description: "Animated design systems for modern product teams.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-ink-950 text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

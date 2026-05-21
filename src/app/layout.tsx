import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Savour — Restaurant-quality food, at your door in 30 minutes",
  description:
    "Chef-curated meals from the city's finest kitchens. Real-time tracking, zero compromise on quality.",
  openGraph: {
    title: "Savour — Restaurant-quality food, at your door",
    description: "Chef-curated meals delivered in 30 minutes.",
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
      <body className="bg-ink-950 text-cream-50 antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

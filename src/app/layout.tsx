import type { Metadata } from "next";
import { Open_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-OpenSans",
});
const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfairDisplay",
});

export const metadata: Metadata = {
  title: "Learnify",
  description: "Plateforme d’apprentissage en ligne",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${openSans.variable} ${playfairDisplay.variable} font-openSans`}>{children}</body>
    </html>
  );
}

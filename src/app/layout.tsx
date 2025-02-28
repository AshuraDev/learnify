import type { Metadata } from "next";
import { Playfair_Display, Open_Sans } from "next/font/google";
import "./globals.css";

const playfair_Display = Playfair_Display({
  variable: "--font-playfair_Display",
  subsets: ["latin"],
});

const open_Sans = Open_Sans({
  variable: "--font-open_Sans",
  subsets: ["latin"],
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
    <html lang="en">
      <body
        className={`${playfair_Display.variable} ${open_Sans.variable} font-openSans`}
      >
        {children}
      </body>
    </html>
  );
}

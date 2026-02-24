import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"], // Outfit has good Latin support, wait on Cyrillic if it fails
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Gold Fish Life — Персональные ассистенты",
  description: "Удаленный сервис личных и бизнес-ассистентов. Делегируйте рутинные задачи профессионалам.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${outfit.variable} ${manrope.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

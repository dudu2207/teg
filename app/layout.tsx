import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PetTag — Identificação inteligente para pets",
  description: "Tag NFC para ajudar seu pet a voltar para casa."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
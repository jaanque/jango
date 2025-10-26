import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

const lora = Lora({
  subsets: ["latin"],
  variable: '--font-lora',
});

export const metadata: Metadata = {
  title: "Jango | La Liga de Programadores",
  description: "La plataforma de programación competitiva para gamificar tu aprendizaje y llevar tus habilidades al siguiente nivel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${lora.variable} font-sans`}>
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
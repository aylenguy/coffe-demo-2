import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Brunch & Co — Cafetería en Rosario",
    template: "%s | Brunch & Co",
  },
  description:
    "Café de especialidad y pastelería artesanal en Rosario, Argentina. Brunch, desayunos y meriendas en un espacio con identidad.",
  keywords: ["café", "brunch", "Rosario", "pastelería", "especialidad", "desayuno"],
  openGraph: {
    title: "Brunch & Co",
    description: "Café de especialidad en Rosario, Argentina.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

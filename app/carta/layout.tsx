import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carta",
  description: "Explorá nuestra carta de brunch, desayunos y café de especialidad en Brunch & Co, Rosario.",
};

export default function CartaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservas",
  description: "Reservá tu mesa en Brunch & Co, Rosario.",
};

export default function ReservasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
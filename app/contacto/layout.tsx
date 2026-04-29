import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactanos por WhatsApp o visitanos en Paraná y Salta, Rosario. Horarios y ubicación de Brunch & Co.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
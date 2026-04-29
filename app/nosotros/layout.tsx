import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description: "Conocé la historia de Brunch & Co, nuestra propuesta de café de especialidad y pastelería artesanal en Rosario.",
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
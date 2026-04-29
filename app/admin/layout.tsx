import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin",
  description: "Panel de administración de Brunch & Co.",
  robots: "noindex, nofollow",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
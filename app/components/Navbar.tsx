"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { User } from "lucide-react";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/carta", label: "Carta" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[#f0e6db] bg-[#f7f1eb] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-5">

        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-[#1d4448] transition duration-300 hover:opacity-70"
        >
          Brunch <span className="text-[#d97c97]">&</span> Co
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden items-center gap-10 md:flex">
          <div className="flex items-center gap-8 text-sm font-medium">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative transition duration-300 hover:text-[#d97c97] ${
                    isActive ? "text-[#1d4448]" : "text-[#6f7c7a]"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#d97c97] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Ícono admin con tooltip */}
            <div className="relative">
              <Link
                href="/admin"
                onMouseEnter={() => setShowTooltip(true)}
                onMouseLeave={() => setShowTooltip(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e0d9d0] bg-white text-[#1d4448] transition duration-300 hover:border-[#d97c97] hover:text-[#d97c97]"
              >
                <User size={16} />
              </Link>

              {showTooltip && (
                <div className="absolute right-0 top-11 w-36 rounded-2xl border border-[#f0e6db] bg-white px-3 py-2 shadow-md">
                  <p className="text-center text-xs text-[#4d5b59]">
                    Acceso solo para administradores
                  </p>
                </div>
              )}
            </div>

            <Link
              href="/reservas"
              className="rounded-full bg-[#d97c97] px-6 py-2.5 text-sm font-bold text-white shadow-md shadow-[#d97c97]/20 transition duration-300 hover:scale-105 hover:bg-[#c66a85]"
            >
              Reservar
            </Link>
          </div>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f0e6db] bg-white text-[#1d4448] transition duration-300 hover:bg-[#f7f1eb] md:hidden"
          aria-label="Abrir menú"
        >
          <span className="text-xl">
            {mobileMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="border-t border-[#f0e6db] bg-[#faf8f6] px-6 py-8 md:hidden">
          <div className="flex flex-col gap-6 text-center">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold transition duration-300 ${
                    isActive ? "text-[#d97c97]" : "text-[#1d4448]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/reservas"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 inline-block rounded-full bg-[#1d4448] px-5 py-3 text-sm font-bold text-white transition duration-300"
            >
              Reservar ahora
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
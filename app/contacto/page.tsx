"use client";

import Link from "next/link";
import { ArrowRight, MapPin, MessageCircle, Clock3, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function ContactoPage() {
  return (
    <main className="bg-white text-[#1d4448] min-h-screen">

      {/* HERO SECTION */}
      <section className="px-6 pt-16 pb-10 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#d97c97]">
              Contacto
            </p>
            {/* FIX 1: título más chico en mobile */}
            <h1 className="text-3xl font-bold leading-[1.1] sm:text-4xl md:text-7xl mb-5 md:mb-6">
              Vení a compartir{" "}
              <br className="hidden sm:block" />
              <span className="italic font-light text-[#d97c97]">un buen momento.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:gap-10 lg:grid-cols-12">

            {/* COLUMNA IZQUIERDA: WhatsApp */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* FIX 2: padding y border-radius más chico en mobile */}
              <div className="group relative overflow-hidden rounded-[32px] md:rounded-[48px] bg-[#1d4448] p-8 sm:p-10 md:p-16 text-white h-full shadow-2xl">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d97c97]/10 blur-3xl transition-all group-hover:bg-[#d97c97]/20" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-8 md:mb-12 inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                    <MessageCircle size={28} className="text-[#f2a9c0]" />
                  </div>
{/* Título */}
<h2 className="mb-4 md:mb-6 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
  Consultas
</h2>

{/* Descripción */}
<p className="mb-8 md:mb-12 max-w-md text-base md:text-lg text-white/70 leading-relaxed">
  ¿Planeás visitarnos o querés organizar un evento especial? 
  Escribinos y te ayudamos con reservas, consultas y propuestas a medida.
</p>

                  <div className="mt-auto">
                    {/* FIX 4: botón full-width en mobile */}
                    <Link
                      href="https://wa.me/54341XXXXXXX"
                      className="inline-flex w-full justify-center items-center gap-4 rounded-full bg-[#d97c97] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 hover:bg-[#c66a85] shadow-lg sm:w-auto sm:px-10 sm:py-5"
                    >
                      WhatsApp Zona Norte
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: Info & Links */}
            <motion.div
              className="lg:col-span-5 flex flex-col gap-6 md:gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* UBICACIÓN */}
              {/* FIX 5: padding y border-radius más chico en mobile */}
              <div className="rounded-[28px] md:rounded-[40px] border border-[#f0e6db] bg-white p-7 md:p-10 shadow-sm">
                <div className="space-y-6 md:space-y-8">
                  <div className="flex gap-5 md:gap-6">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1eb] text-[#1d4448]">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#d97c97] mb-1 md:mb-2">
                        Visitanos
                      </h3>
                      <p className="text-lg md:text-xl font-bold">Paraná y Salta</p>
                      <p className="text-[#6a7a78]">Rosario, Santa Fe</p>
                    </div>
                  </div>

                  <div className="flex gap-5 md:gap-6 border-t border-[#f0e6db] pt-6 md:pt-8">
                    <div className="flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1eb] text-[#1d4448]">
                      <Clock3 size={22} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#d97c97] mb-1 md:mb-2">
                        Horarios
                      </h3>
                      <p className="text-lg md:text-xl font-bold">08:00 — 20:00</p>
                      <p className="text-[#6a7a78]">Lunes a Domingos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID BOTONES SECUNDARIOS */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
               <Link
  href="/carta.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex flex-col items-center justify-center rounded-[24px] md:rounded-[32px] border border-[#f0e6db] bg-white p-6 md:p-8 text-center transition-all hover:border-[#d97c97] hover:shadow-xl hover:shadow-[#d97c97]/5"
>
  <FileText size={26} className="mb-3 md:mb-4 text-[#d97c97] transition-transform group-hover:scale-110" />
  <span className="text-sm md:text-base font-bold">Carta PDF</span>
</Link>
                <Link
                  href="https://instagram.com"
                  className="group flex flex-col items-center justify-center rounded-[24px] md:rounded-[32px] border border-[#f0e6db] bg-white p-6 md:p-8 text-center transition-all hover:border-[#d97c97] hover:shadow-xl hover:shadow-[#d97c97]/5"
                >
                  {/* Icono de Instagram en SVG para no depender de librería */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d97c97"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mb-3 md:mb-4 transition-transform group-hover:scale-110"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span className="text-sm md:text-base font-bold">Instagram</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}

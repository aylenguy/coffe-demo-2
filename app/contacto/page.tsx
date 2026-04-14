"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, MessageCircle, Clock3, FileText } from "lucide-react";

// Mantenemos tus variantes de animación que están muy bien
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactoPage() {
  return (
    <main className="bg-white text-[#1d4448] min-h-screen">
      
      {/* HERO SECTION - Más minimalista */}
      <section className="px-6 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="mx-auto max-w-7xl">
          <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-3xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.4em] text-[#d97c97]">
              Contacto
            </p>
            <h1 className="text-5xl font-bold leading-[1.1] md:text-7xl mb-6">
              Vení a compartir <br/> 
              <span className="italic font-light text-[#d97c97]">un buen momento.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12">
            
            {/* COLUMNA IZQUIERDA: Tarjeta Principal de WhatsApp */}
            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="group relative overflow-hidden rounded-[48px] bg-[#1d4448] p-10 md:p-16 text-white h-full shadow-2xl">
                {/* Decoración de fondo */}
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#d97c97]/10 blur-3xl transition-all group-hover:bg-[#d97c97]/20" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-12 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md">
                    <MessageCircle size={32} className="text-[#f2a9c0]" />
                  </div>
                  
                  <h2 className="mb-6 text-4xl font-bold md:text-5xl tracking-tight">
                    Reservas & <br/> Consultas
                  </h2>
                  <p className="mb-12 max-w-md text-lg text-white/70 leading-relaxed">
                    ¿Planeás visitarnos? Chateá con nosotros para asegurar tu mesa o consultarnos sobre eventos privados.
                  </p>

                  <div className="mt-auto">
                    <Link
                      href="https://wa.me/54341XXXXXXX"
                      className="inline-flex items-center gap-4 rounded-full bg-[#d97c97] px-10 py-5 text-sm font-bold uppercase tracking-widest text-white transition hover:scale-105 hover:bg-[#c66a85] shadow-lg"
                    >
                      WhatsApp Zona Norte
                      <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* COLUMNA DERECHA: Info & Links Rápidos */}
            <motion.div 
              className="lg:col-span-5 flex flex-col gap-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* UBICACIÓN */}
              <div className="rounded-[40px] border border-[#f0e6db] bg-white p-10 shadow-sm">
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1eb] text-[#1d4448]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#d97c97] mb-2">Visitanos</h3>
                      <p className="text-xl font-bold">Paraná y Salta</p>
                      <p className="text-[#6a7a78]">Rosario, Santa Fe</p>
                    </div>
                  </div>

                  <div className="flex gap-6 border-t border-[#f0e6db] pt-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f7f1eb] text-[#1d4448]">
                      <Clock3 size={24} />
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-widest text-[#d97c97] mb-2">Horarios</h3>
                      <p className="text-xl font-bold">08:00 — 20:00</p>
                      <p className="text-[#6a7a78]">Lunes a Domingos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GRID DE BOTONES SECUNDARIOS */}
              <div className="grid grid-cols-2 gap-6">
                <Link
                  href="/carta"
                  className="group flex flex-col items-center justify-center rounded-[32px] border border-[#f0e6db] bg-white p-8 text-center transition-all hover:border-[#d97c97] hover:shadow-xl hover:shadow-[#d97c97]/5"
                >
                  <FileText size={28} className="mb-4 text-[#d97c97] transition-transform group-hover:scale-110" />
                  <span className="font-bold">Carta PDF</span>
                </Link>

                <Link
                  href="https://instagram.com"
                  className="group flex flex-col items-center justify-center rounded-[32px] border border-[#f0e6db] bg-white p-8 text-center transition-all hover:border-[#d97c97] hover:shadow-xl hover:shadow-[#d97c97]/5"
                >
               
                  <span className="font-bold">Instagram</span>
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}
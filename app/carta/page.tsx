"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const menuItems = [
  {
  title: "Philly Cheesesteak",
  description: "Sándwich caliente de carne a la plancha con queso fundido y cebolla salteada.",
  image: "/images/sandwich.webp",
  badge: "Salado",
},
  {
    title: "Bowl de yogurt con frutas",
    description: "Yogurt natural con granola casera, frutas frescas de estación y miel.",
    image: "/images/bowl.webp",
    badge: "Dulce",
  },
  {
    title: "Brownies de chocolate",
    description: "Brownie húmedo de chocolate intenso, con interior suave y sabor casero.",
    image: "/images/Brownies.webp",
    badge: "Dulce",
  },
  {
    title: "Ice Latte",
    description: "Café espresso frío con leche y hielo, refrescante y suave.",
    image: "/images/ice.webp",
    badge: "Bebidas",
  },
  {
    title: "Cookie de Nutella",
    description: "Galleta artesanal rellena de Nutella, crocante por fuera y suave por dentro.",
    image: "/images/cookie.webp",
    badge: "Dulce",
  },
  {
    title: "Latte de lavanda",
    description: "Espresso con leche vaporizada y un toque delicado de lavanda.",
    image: "/images/latte.webp",
    badge: "Bebidas",
  },
 {
    title: "Bagel de salmón",
    description: "Bagel tostado con salmón ahumado, queso crema y alcaparras.",
    image: "/images/bagel.webp",
    badge: "Salado",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function CartaPage() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? menuItems.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === menuItems.length - 1 ? 0 : c + 1));

  const item = menuItems[current];

  return (
    <main className="overflow-hidden bg-white text-[#1d4448]">

      {/* ENCABEZADO */}
      <section className="px-6 pb-10 pt-24 md:pb-12 md:pt-28">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
              Nuestra carta
            </p>
            <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-bold leading-tight text-[#1d4448] md:text-5xl">
              Algunos de los más pedidos
            </h1>
            <p className="mx-auto max-w-2xl text-base leading-7 text-[#4d5b59] md:text-lg">
              Una selección de lo que más eligen nuestros clientes. Para ver todo, descargá la carta completa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARRUSEL */}
<section className="px-6 pb-16">
  <div className="mx-auto max-w-6xl">
    <div className="relative">

      {/* Track */}
      <div className="overflow-hidden">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {[0, 1, 2].map((offset) => {
            const index = (current + offset) % menuItems.length;
            const it = menuItems[index];
            return (
              <article
                key={index}
                className="overflow-hidden rounded-[32px] border border-[#f0e6db] bg-white shadow-sm"
              >
                <div className="overflow-hidden p-3">
                  <Image
                    src={it.image}
                    alt={it.title}
                    width={600}
                    height={400}
                    className="h-[200px] w-full rounded-[24px] object-cover"
                  />
                </div>
                <div className="p-5 pt-2">
                  <span className="mb-2 inline-block rounded-full bg-[#fce7ee] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d97c97]">
                    {it.badge}
                  </span>
                  <h3 className="mb-1 text-lg font-bold text-[#1d4448]">{it.title}</h3>
                  <p className="text-sm text-[#4d5b59]">{it.description}</p>
                </div>
              </article>
            );
          })}
        </motion.div>
      </div>

      {/* Controles */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e0d9d0] bg-white text-[#1d4448] transition hover:border-[#d97c97] hover:text-[#d97c97]"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {menuItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#d97c97]" : "w-2 bg-[#e0d9d0]"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e0d9d0] bg-white text-[#1d4448] transition hover:border-[#d97c97] hover:text-[#d97c97]"
        >
          <ChevronRight size={20} />
        </button>
      </div>

    </div>
  </div>
</section>

      {/* CTA PDF */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-6 text-[#4d5b59]">
              ¿Querés ver la carta completa con todos los precios?
            </p>
            <Link
              href="https://drive.google.com/file/..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#d97c97] px-10 py-4 text-sm font-bold text-white shadow-lg shadow-[#d97c97]/20 transition duration-300 hover:scale-105 hover:bg-[#c66a85]"
            >
              Ver carta completa (PDF)
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
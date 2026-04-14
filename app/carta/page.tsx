"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRef } from "react";

const carouselItems = [
  { title: "Bagel de salmón", image: "/images/menu-1.jpg" },
  { title: "Bowl de yogurt con frutas", image: "/images/menu-2.jpg" },
  { title: "Ensalada vegetariana", image: "/images/menu-3.jpg" },
  { title: "Meatball sandwich", image: "/images/menu-4.jpg" },
  { title: "Philly cheesesteak", image: "/images/menu-5.jpg" },
  { title: "Croissant artesanal", image: "/images/menu-1.jpg" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function MenuPage() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = 320;
    carouselRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

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
              Algunos favoritos de nuestra propuesta
            </h1>

            <p className="mx-auto max-w-2xl text-base leading-7 text-[#4d5b59] md:text-lg">
              Una selección visual de opciones dulces, saladas y brunch para que
              conozcas parte de la experiencia.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CARRUSEL */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-6 flex items-center justify-end gap-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Botones de navegación - Ahora con bordes visibles y colores de marca */}
            <button
              onClick={() => scrollCarousel("left")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f0e6db] bg-white text-[#1d4448] shadow-sm transition hover:bg-[#d97c97] hover:text-white"
              aria-label="Desplazar a la izquierda"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              onClick={() => scrollCarousel("right")}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#f0e6db] bg-white text-[#1d4448] shadow-sm transition hover:bg-[#d97c97] hover:text-white"
              aria-label="Desplazar a la derecha"
            >
              <ArrowRight size={20} />
            </button>
          </motion.div>

          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {carouselItems.map((item) => (
              <article
                key={item.title}
                className="group min-w-[300px] max-w-[300px] overflow-hidden rounded-[32px] bg-white border border-[#f0e6db] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="relative overflow-hidden p-3">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={900}
                    className="h-[340px] w-full rounded-[24px] object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 pt-2 text-center">
                  <h3 className="text-xl font-bold leading-tight text-[#1d4448]">
                    {item.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SIMPLE */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-3xl">
          <motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.2 }}
  className="text-center"
>
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
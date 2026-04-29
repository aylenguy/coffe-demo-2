"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const featuredItems = [
  {
    title: "Croissant de pistacho",
    description:
      "Croissant relleno con crema de pistacho, suave, cremoso y recién horneado.",
    image: "/images/pistacho-1.webp",
    tag: "Favorito",
  },
  {
    title: "Avocado Toast",
    description:
      "Tostadas con palta, huevo y mix fresco. Una opción abundante y bien equilibrada.",
    image: "/images/avocado-2.webp",
    tag: "Brunch",
  },
  {
    title: "French Toast",
    description:
      "Tostada francesa con frutas frescas y chantilly, ideal para quienes aman lo dulce.",
    image: "/images/toast.webp",
    tag: "Dulce",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Featured() {
  return (
    <section className="px-6 py-20 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#d97c97]">
              Destacados
            </p>
            <h2 className="text-4xl font-bold text-[#1d4448] md:text-5xl">
              Favoritos de la carta
            </h2>
          </div>

          <Link
            href="/carta"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d97c97] hover:text-[#1d4448] transition-colors"
          >
            Ver carta completa <ArrowRight size={16} />
          </Link>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {featuredItems.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ scale: 1.03 }}
              className="group overflow-hidden rounded-[32px] border border-[#f0e6dd] bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#1d4448]/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <div className="mb-4">
                  <span className="rounded-full bg-[#fce7ee] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d97c97]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-bold text-[#1d4448]">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#4d5b59]/80">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

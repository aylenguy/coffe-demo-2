"use client";

import { motion, Variants } from "framer-motion";
import { Coffee, Croissant, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Coffee,
    title: "Sabores que sorprenden",
    description:
      "Una carta pensada para disfrutar de verdad, con platos abundantes y una propuesta que se siente en cada detalle.",
  },
  {
    icon: Croissant,
    title: "Brunch sin apuro",
    description:
      "Opciones dulces, saladas y café de especialidad para desayunar, merendar o cortar el día con algo rico.",
  },
  {
    icon: Sparkles,
    title: "Un espacio con identidad",
    description:
      "Diseño, calidez y una estética moderna para que la experiencia se vea tan bien como se siente.",
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

export default function Benefits() {
  return (
    <section className="bg-[#f7f1eb] px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mb-16 max-w-3xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
            ¿Por qué elegirnos?
          </p>
          <h2 className="text-4xl font-bold text-[#1d4448] md:text-5xl">
            Una propuesta que combina sabor y buenos momentos
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="group rounded-[32px] bg-white p-8 shadow-sm transition-all hover:shadow-xl border border-transparent hover:border-[#f2a9c0]"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7ee] text-[#d97c97] transition-transform group-hover:rotate-12">
                  <Icon size={28} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-[#1d4448]">
                  {item.title}
                </h3>

                <p className="leading-relaxed text-[#4d5b59]">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

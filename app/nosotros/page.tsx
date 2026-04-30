"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Coffee, Sparkles, HeartHandshake } from "lucide-react";
import { motion, Variants } from "framer-motion";

const values = [
  {
    icon: Coffee,
    title: "Producto con personalidad",
    description:
      "Una propuesta pensada para disfrutar sabores reales, opciones abundantes y combinaciones que invitan a volver.",
  },
  {
    icon: Sparkles,
    title: "Ambiente cuidado",
    description:
      "Cada detalle del espacio busca transmitir calidez, estética y una experiencia visual atractiva desde que entrás.",
  },
  {
    icon: HeartHandshake,
    title: "Momentos para compartir",
    description:
      "Brunch & Co quiere ser ese lugar al que dan ganas de ir para comer rico, pasarla bien y quedarse un rato más.",
  },
];

const fadeUp: Variants = {
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

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
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

export default function NosotrosPage() {
  return (
    <main className="overflow-hidden bg-white text-[#1d4448]">

      {/* IMAGEN + TEXTO */}
      <section className="overflow-hidden bg-[#faf8f6] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-12">

            {/* LADO IZQUIERDO */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative lg:col-span-6"
            >
              <div className="relative z-10 overflow-hidden rounded-[48px] border border-[#f0e6db] shadow-2xl">
                <Image
                  src="/images/bar.webp"
                  alt="Atmósfera Brunch & Co"
                  width={900}
                  height={1100}
                  className="h-[550px] w-full object-cover transition duration-700 hover:scale-105 md:h-[650px]"
                />
              </div>

              <motion.div
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-12 -right-12 z-20 hidden w-64 overflow-hidden rounded-3xl border-8 border-[#faf8f6] shadow-2xl xl:block"
              >
                <Image
                  src="/images/detalle-cafe.webp"
                  alt="Detalle artesanal"
                  width={400}
                  height={400}
                  className="aspect-square object-cover"
                />
              </motion.div>
            </motion.div>

            {/* LADO DERECHO */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-6 lg:pl-10"
            >
              <header className="mb-10">
                <div className="mb-6 flex items-center gap-4">
                  <span className="h-[1px] w-12 bg-[#d97c97]" />
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-[#d97c97]">
                    Nuestra esencia
                  </p>
                </div>
                <h2 className="font-display text-5xl font-bold leading-[1.1] text-[#1d4448] md:text-7xl">
                  Donde el café se encuentra con{" "}
                  <span className="font-light italic text-[#d97c97]">la calma.</span>
                </h2>
              </header>

              <div className="space-y-8 text-lg leading-relaxed text-[#4d5b59]">
                <p className="text-xl font-semibold text-[#1d4448]">
                  "No solo servimos comida; creamos el escenario para tus mejores mañanas."
                </p>
                <p className="opacity-90">
                  En Brunch & Co, entendemos que el lujo está en los detalles: en el
                  aroma del grano recién molido, en la textura de nuestra pastelería
                  artesanal y en esa luz que entra por la ventana.
                </p>
              </div>

              <div className="mt-14 grid gap-10 border-t border-[#f0e6db] pt-12 sm:grid-cols-2">
                <article>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-widest text-[#1d4448]">
                    Ambiente consciente
                  </h4>
                  <p className="text-[15px] leading-relaxed text-[#6a7a78]">
                    Espacios pensados para desconectar del ruido de la ciudad y
                    reconectar con lo que importa.
                  </p>
                </article>
                <article>
                  <h4 className="mb-3 text-sm font-black uppercase tracking-widest text-[#1d4448]">
                    Cocina de autor
                  </h4>
                  <p className="text-[15px] leading-relaxed text-[#6a7a78]">
                    Ingredientes frescos, procesos lentos y sabores que cuentan
                    nuestra propia historia.
                  </p>
                </article>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-16 max-w-2xl"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
              Lo que nos define
            </p>
            <h2 className="text-4xl font-bold text-[#1d4448] md:text-5xl">
              Más que un café, una experiencia
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {values.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={fadeUp}
                  className="group rounded-[32px] border border-transparent bg-[#faf8f6] p-8 transition-all hover:border-[#f2a9c0] hover:shadow-xl"
                >
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7ee] text-[#d97c97] transition-transform group-hover:rotate-12">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1d4448]">{item.title}</h3>
                  <p className="leading-relaxed text-[#4d5b59]">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-24">
        <motion.div
          className="mx-auto max-w-7xl overflow-hidden rounded-[48px] bg-[#d97c97] px-8 py-16 text-white shadow-2xl md:px-20 md:py-24"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-[#fce7ee]">
                Tu momento Brunch & Co
              </p>
              <h2 className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
                Hacé de tu próximo desayuno algo especial
              </h2>
              <p className="max-w-xl text-lg font-medium text-[#fce7ee]">
                Vení a descubrir sabores auténticos y un ambiente diseñado para
                relajarte. Estamos en el corazón de Rosario esperándote.
              </p>
            </div>

            <div className="flex flex-col gap-4 min-[450px]:flex-row">
              <Link
                href="/carta"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#d97c97] transition duration-300 hover:scale-105 hover:bg-[#f7f1eb]"
              >
                Explorar la carta
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center rounded-full border-2 border-white/30 px-10 py-4 text-sm font-bold text-white transition duration-300 hover:border-white hover:bg-white/10"
              >
                Contacto
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/grain.png')]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:gap-16 lg:grid-cols-12">

          {/* TEXTO */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 text-center lg:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4 justify-center lg:justify-start">
              <div className="h-[1px] w-12 bg-[#d97c97]" />
              <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
                Establecido en Rosario
              </p>
            </div>

            <h1 className="font-display mb-6 text-5xl font-bold leading-[0.95] text-[#1d4448] sm:text-6xl md:text-7xl lg:text-[100px]">
              Brunch <br />
              <span className="relative">
                <span className="text-[#d97c97]">&</span> Co
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 20"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M5 15C50 5 150 5 295 15"
                    stroke="#d97c97"
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.3"
                  />
                </svg>
              </span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-[#4d5b59] md:text-xl max-w-md mx-auto lg:mx-0">
              No es solo la comida, es la pausa. Un refugio contemporáneo
              donde el sabor artesanal y el diseño se encuentran.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/carta"
                className="relative overflow-hidden group rounded-full bg-[#1d4448] px-10 py-4 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(29,68,72,0.3)] text-center"
              >
                <span className="relative z-10">Explorar Carta</span>
                <div className="absolute inset-0 translate-y-full bg-[#d97c97] transition-transform duration-300 group-hover:translate-y-0" />
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d4448]/20 px-10 py-4 text-sm font-bold text-[#1d4448] transition-all hover:border-[#1d4448]"
              >
                Contacto
              </Link>
            </div>
          </motion.div>

          {/* IMÁGENES — ocultas en mobile, visibles desde lg */}
          <div className="hidden lg:block relative lg:col-span-6">
            <div className="relative grid grid-cols-12 gap-4">

              {/* Imagen principal */}
              <motion.div
                className="col-span-8 overflow-hidden rounded-[60px] shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Image
                  src="/images/hero-1.webp"
                  alt="Plato de brunch"
                  width={600}
                  height={800}
                  className="h-[550px] w-full object-cover"
                />
              </motion.div>

              {/* Imagen secundaria flotante */}
              <motion.div
                className="absolute -right-4 top-1/4 w-[200px] overflow-hidden rounded-[40px] border-8 border-[#faf8f6] shadow-2xl"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <Image
                  src="/images/hero-2.webp"
                  alt="Detalle de café"
                  width={300}
                  height={400}
                  className="h-[250px] w-full object-cover"
                />
              </motion.div>

              {/* Sello giratorio */}
              <motion.div
                className="absolute -bottom-10 left-1/4 h-32 w-32"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="30" fill="#d97c97" />
                  <text fontSize="8" fontWeight="900" className="fill-[#1d4448] uppercase tracking-[0.1em]">
                    <textPath xlinkHref="#circlePath">
                      • PRODUCTO REAL • ARTESANAL • ROSARIO • BRUNCH & CO •
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </div>
          </div>

          {/* IMAGEN MOBILE — solo visible en mobile/tablet */}
          <div className="lg:hidden w-full">
            <motion.div
              className="overflow-hidden rounded-[32px] shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/images/hero-1.webp"
                alt="Plato de brunch"
                width={600}
                height={400}
                className="h-[280px] w-full object-cover sm:h-[360px]"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
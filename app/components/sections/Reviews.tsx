"use client";

import { motion, Variants } from "framer-motion";
import { Star } from "lucide-react";
import ReviewCarousel from "@/app/components/shared/ReviewCarousel";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Reviews() {
  return (
    <section className="bg-[#f7f1eb] px-6 py-24 text-[#1d4448]">
      <div className="mx-auto max-w-4xl text-center">

        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fce7ee] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d97c97]">
            <Star size={14} fill="#d97c97" />
            Opiniones reales
          </div>

          <h2 className="text-4xl font-bold md:text-5xl mb-6">
            Lo que dicen nuestros clientes
          </h2>

          <p className="text-[#4d5b59] max-w-2xl mx-auto mb-8">
            Experiencias auténticas de quienes ya disfrutan de nuestro café y pastelería artesanal.
          </p>
        </motion.div>

        <ReviewCarousel />

      </div>
    </section>
  );
}

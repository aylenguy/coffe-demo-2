"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Micaela Sturzo",
    time: "Hace 5 meses",
    text: "Un ambiente cálido y limpio. Sus empleados amables y atentos, al servicio que uno necesita.",
  },
  {
    name: "Gabriela Petrin",
    time: "Hace un mes",
    text: "Todo exquisito. El hojaldre de los croissant una delicia, súper crocante.",
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviews.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[30px] bg-white p-8 shadow-xl border border-[#e8dfd5]"
      >
        <div className="mb-4">
          <p className="font-bold">{reviews[index].name}</p>
          <p className="text-sm text-[#d97c97]">
            ⭐⭐⭐⭐⭐ · {reviews[index].time}
          </p>
        </div>

        <p className="text-sm italic text-[#4d5b59]">
          "{reviews[index].text}"
        </p>
      </motion.div>

      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Anterior reseña"
          className="px-4 py-2 border rounded-full"
        >
          ←
        </button>

        <button
          onClick={next}
          aria-label="Siguiente reseña"
          className="px-4 py-2 border rounded-full"
        >
          →
        </button>
      </div>
    </div>
  );
}

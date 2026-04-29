"use client";

import Link from "next/link";

export default function CTA() {
  return (
   <section className="px-6 pb-24 bg-white">
      <div className="mx-auto max-w-7xl rounded-[40px] bg-[#d97c97] p-12 text-white shadow-2xl relative overflow-hidden">
        
        {/* Glow decorativo */}
        <div className="absolute right-0 top-0 h-64 w-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-4xl font-bold md:text-5xl mb-4">
              ¿Te antojaste de algo rico?
            </h2>

            <p className="text-white/90 text-lg">
              Vení a disfrutar del mejor café de especialidad y nuestra
              pastelería artesanal.
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href="/carta"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#d97c97] transition duration-300 hover:scale-105 hover:bg-[#f7f1eb]"
            >
              Explorar carta
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

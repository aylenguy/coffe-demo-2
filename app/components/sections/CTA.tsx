"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="px-6 pb-16 md:pb-24 bg-white">
      <div className="mx-auto max-w-7xl rounded-[32px] bg-[#d97c97] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">

        <div className="absolute right-0 top-0 h-64 w-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-5xl mb-3">
              ¿Te antojaste de algo rico?
            </h2>
            <p className="text-white/90 text-base md:text-lg">
              Vení a disfrutar del mejor café de especialidad y nuestra pastelería artesanal.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <Link
              href="/carta"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#d97c97] transition duration-300 hover:scale-105 hover:bg-[#f7f1eb]"
            >
              Explorar carta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
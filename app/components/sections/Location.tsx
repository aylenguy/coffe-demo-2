"use client";

import { MapPin, Clock3, PhoneCall } from "lucide-react";

const locationData = [
  {
    Icon: MapPin,
    label: "Ubicación",
    title: "Rosario, Sta Fe",
    desc: "Barrio Pichincha, Rosario.",
  },
  {
    Icon: Clock3,
    label: "Horarios",
    title: "Todos los días",
    desc: "Lunes a Domingos de 08:00 a 20:00 hs.",
  },
  {
    Icon: PhoneCall,
    label: "Contacto",
    title: "Reservas",
    desc: "Escribinos por WhatsApp para reservar tu lugar.",
  },
];

export default function Location() {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {locationData.map((item, i) => {
          const Icon = item.Icon;
          return (
            <div
              key={i}
              className="rounded-[24px] bg-white p-7 shadow-sm border border-[#eee]"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fce7ee] text-[#d97c97]">
                <Icon size={24} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#d97c97] mb-2">
                {item.label}
              </p>
              <h3 className="text-xl font-bold text-[#1d4448] mb-2">{item.title}</h3>
              <p className="text-[#4d5b59] text-sm leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
"use client";

import { useState } from "react";


export default function ReservasPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    fecha: "",
    cantidadPersonas: 1,
  });
  const [estado, setEstado] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [mensajeError, setMensajeError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEstado("loading");
    setMensajeError("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Reservas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          cantidadPersonas: Number(form.cantidadPersonas),
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        // La API puede devolver { mensaje: "..." } o errores de validación
        if (data.mensaje) {
          setMensajeError(data.mensaje);
        } else {
          setMensajeError("Revisá los datos ingresados.");
        }
        setEstado("error");
        return;
      }

      setEstado("ok");
      setForm({ nombre: "", email: "", fecha: "", cantidadPersonas: 1 });
    } catch {
      setMensajeError("No se pudo conectar con el servidor. Intentá de nuevo.");
      setEstado("error");
    }
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-white px-6 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-[#d97c97]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
              Reservas
            </p>
            <div className="h-[1px] w-8 bg-[#d97c97]" />
          </div>
          <h1 className="text-5xl font-bold text-[#1d4448] md:text-6xl">
            Reservá tu lugar
          </h1>
          <p className="mt-4 text-lg text-[#4d5b59]">
            Asegurá tu mesa y llegá sin apuro.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="px-6 py-6">
        <div className="mx-auto max-w-lg">
          <div className="rounded-[32px] bg-white p-10 shadow-sm border border-[#f0e6db]">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-[#1d4448]">Nombre</label>
                <input
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-[#1d4448]">Email</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-[#1d4448]">Fecha y hora</label>
                <input
                  name="fecha"
                  type="datetime-local"
                  value={form.fecha}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-bold text-[#1d4448]">Cantidad de personas</label>
                <input
                  name="cantidadPersonas"
                  type="number"
                  min={1}
                  max={20}
                  value={form.cantidadPersonas}
                  onChange={handleChange}
                  required
                  className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
                />
              </div>

              <button
                type="submit"
                disabled={estado === "loading"}
                className="mt-2 rounded-full bg-[#1d4448] px-10 py-4 text-sm font-bold text-white transition hover:bg-[#d97c97] disabled:opacity-50"
              >
                {estado === "loading" ? "Enviando..." : "Confirmar reserva"}
              </button>

              {estado === "ok" && (
                <p className="text-center text-sm font-bold text-[#1d4448]">
                  ¡Reserva confirmada! Te esperamos 🎉
                </p>
              )}

              {estado === "error" && (
                <div className="rounded-2xl border border-[#f2a9c0] bg-[#fce7ee] px-5 py-4 text-center">
                  <p className="text-sm font-bold text-[#d97c97]">
                    No pudimos confirmar tu reserva
                  </p>
                  <p className="mt-1 text-xs text-[#c66a85]">
                    {mensajeError}
                  </p>
                </div>
              )}

            </form>
          </div>
        </div>
      </section>

    </main>
  );
}
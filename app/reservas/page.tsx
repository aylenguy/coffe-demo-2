"use client";

import { useState } from "react";

export default function ReservasPage() {
  const ahora = new Date();
  ahora.setMinutes(ahora.getMinutes() - ahora.getTimezoneOffset());
  const minFecha = ahora.toISOString().slice(0, 16);

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    fecha: "",
    personas: 1,
    notas: "",
  });
  const [estado, setEstado] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [mensajeError, setMensajeError] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
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
          nombre:   form.nombre,
          email:    form.email,
          telefono: form.telefono || null,
          fecha:    form.fecha,
          personas: Number(form.personas),
          notas:    form.notas || null,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        setMensajeError(data.mensaje ?? "Revisá los datos ingresados.");
        setEstado("error");
        return;
      }

      setEstado("ok");
      setForm({ nombre: "", email: "", telefono: "", fecha: "", personas: 1, notas: "" });
    } catch {
      setMensajeError("No se pudo conectar con el servidor. Intentá de nuevo.");
      setEstado("error");
    }
  }

  const inputClass =
    "rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition w-full";

  return (
    <main className="min-h-screen bg-white">

      {/* Hero */}
      <section className="bg-white px-4 sm:px-6 py-14 sm:py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center justify-center gap-4">
            <div className="h-[1px] w-8 bg-[#d97c97]" />
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
              Reservas
            </p>
            <div className="h-[1px] w-8 bg-[#d97c97]" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1d4448]">
            Reservá tu lugar
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#4d5b59]">
            Asegurá tu mesa y llegá sin apuro.
          </p>
        </div>
      </section>

      {/* Formulario */}
      <section className="px-4 sm:px-6 py-6 pb-20">
        <div className="mx-auto max-w-lg">
          <div className="rounded-[32px] bg-white p-6 sm:p-10 shadow-sm border border-[#f0e6db]">

            {estado === "ok" ? (
              // ── ÉXITO ──
              <div className="flex flex-col items-center gap-4 py-6 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfaf3] text-3xl">
                  ✓
                </div>
                <h2 className="text-xl font-bold text-[#1d4448]">
                  ¡Reserva confirmada!
                </h2>
                <p className="text-sm text-[#4d5b59]">
                  Te esperamos. Recibirás un recordatorio por email.
                </p>
                <button
                  onClick={() => setEstado("idle")}
                  className="mt-2 rounded-full border border-[#e0d9d0] px-8 py-3 text-sm font-bold text-[#1d4448] transition hover:border-[#d97c97] hover:text-[#d97c97]"
                >
                  Hacer otra reserva
                </button>
              </div>
            ) : (
              // ── FORMULARIO ──
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Nombre */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-[#1d4448]">Nombre</label>
                  <input
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className={inputClass}
                  />
                </div>

                {/* Email + Teléfono — fila en sm+, columna en mobile */}
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-3">
                  <div className="flex flex-1 flex-col gap-1">
                    <label className="text-sm font-bold text-[#1d4448]">Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="tu@email.com"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-1">
                    <label className="text-sm font-bold text-[#1d4448]">
                      Teléfono{" "}
                      <span className="font-normal text-[#4d5b59]">(opcional)</span>
                    </label>
                    <input
                      name="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="11 1234-5678"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Fecha + Personas — fila en sm+, columna en mobile */}
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-3">
                  <div className="flex flex-1 flex-col gap-1">
                    <label className="text-sm font-bold text-[#1d4448]">Fecha y hora</label>
                    <input
                      name="fecha"
                      type="datetime-local"
                      value={form.fecha}
                      onChange={handleChange}
                      required
                      min={minFecha}
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1 sm:w-32">
                    <label className="text-sm font-bold text-[#1d4448]">Personas</label>
                    <input
                      name="personas"
                      type="number"
                      min={1}
                      max={20}
                      value={form.personas}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Notas */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-bold text-[#1d4448]">
                    Notas{" "}
                    <span className="font-normal text-[#4d5b59]">(opcional)</span>
                  </label>
                  <textarea
                    name="notas"
                    value={form.notas}
                    onChange={handleChange}
                    placeholder="Alergias, ocasión especial, preferencia de mesa..."
                    rows={3}
                    className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition resize-none w-full"
                  />
                </div>

                {/* Error */}
                {estado === "error" && (
                  <div className="rounded-2xl border border-[#f2a9c0] bg-[#fce7ee] px-5 py-4 text-center">
                    <p className="text-sm font-bold text-[#d97c97]">
                      No pudimos confirmar tu reserva
                    </p>
                    <p className="mt-1 text-xs text-[#c66a85]">{mensajeError}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={estado === "loading"}
                  className="mt-2 rounded-full bg-[#1d4448] px-10 py-4 text-sm font-bold text-white transition hover:bg-[#d97c97] disabled:opacity-50 w-full sm:w-auto"
                >
                  {estado === "loading" ? "Enviando..." : "Confirmar reserva"}
                </button>

              </form>
            )}
          </div>
        </div>
      </section>

    </main>
  );
}

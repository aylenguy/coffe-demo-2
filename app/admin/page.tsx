"use client";

import { useState } from "react";

interface Reserva {
  id: number;
  nombre: string;
  email: string;
  telefono?: string;
  fecha: string;
  personas: number;
  notas?: string;
  estado: "pendiente" | "confirmada" | "cancelada";
}

type ModalTipo = "cancelar" | "confirmar" | null;

export default function AdminPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Modal
  const [modalTipo, setModalTipo] = useState<ModalTipo>(null);
  const [reservaSeleccionada, setReservaSeleccionada] = useState<Reserva | null>(null);
  const [accionLoading, setAccionLoading] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });
      if (!res.ok) { setError("Credenciales incorrectas"); return; }
      const data = await res.json();
      setToken(data.token);
      await cargarReservas(data.token);
    } catch {
      setError("Error al conectar con la API");
    } finally {
      setLoading(false);
    }
  }

  async function cargarReservas(tkn: string) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Reservas`, {
        headers: { Authorization: `Bearer ${tkn}` },
      });
      if (!res.ok) { setToken(""); return; }
      const data = await res.json();
      setReservas(data);
    } catch {
      setError("Error al cargar reservas");
    }
  }

  function abrirModal(reserva: Reserva, tipo: ModalTipo) {
    setReservaSeleccionada(reserva);
    setModalTipo(tipo);
  }

  function cerrarModal() {
    setModalTipo(null);
    setReservaSeleccionada(null);
  }

  async function confirmarAccion() {
    if (!reservaSeleccionada) return;
    setAccionLoading(true);

    try {
      if (modalTipo === "cancelar") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Reservas/${reservaSeleccionada.id}`,
          { method: "DELETE", headers: { Authorization: `Bearer ${token}` } }
        );
        if (res.ok) {
          setReservas((prev) => prev.filter((r) => r.id !== reservaSeleccionada.id));
        }
      } else if (modalTipo === "confirmar") {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/Reservas/${reservaSeleccionada.id}/estado`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ estado: "confirmada" }),
          }
        );
        if (res.ok) {
          setReservas((prev) =>
            prev.map((r) =>
              r.id === reservaSeleccionada.id ? { ...r, estado: "confirmada" } : r
            )
          );
        }
      }
    } finally {
      setAccionLoading(false);
      cerrarModal();
    }
  }

  const estadoBadge = (estado: Reserva["estado"]) => {
    const estilos = {
      pendiente:  "bg-[#fef9ec] text-[#b07d2a] border border-[#f5d98b]",
      confirmada: "bg-[#ecfaf3] text-[#1d7a4a] border border-[#a3e4bf]",
      cancelada:  "bg-[#fce7ee] text-[#d97c97] border border-[#f2a9c0]",
    };
    const labels = {
      pendiente:  "Pendiente",
      confirmada: "Confirmada",
      cancelada:  "Cancelada",
    };
    return (
      <span className={`rounded-full px-3 py-1 text-xs font-bold ${estilos[estado]}`}>
        {labels[estado]}
      </span>
    );
  };

  // ── LOGIN ──────────────────────────────────────────────────────────────────
  if (!token) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
              Panel
            </p>
            <h1 className="text-3xl font-bold text-[#1d4448]">Acceso admin</h1>
          </div>

          <form
            onSubmit={handleLogin}
            className="rounded-[32px] bg-white border border-[#f0e6db] p-8 flex flex-col gap-4 shadow-sm"
          >
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#1d4448]">Usuario</label>
              <input
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-bold text-[#1d4448]">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-2xl border border-[#e0d9d0] bg-[#faf8f6] px-5 py-3 text-sm text-[#1d4448] outline-none focus:border-[#d97c97] transition"
              />
            </div>
            {error && (
              <p className="text-center text-sm font-bold text-[#d97c97]">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="mt-2 rounded-full bg-[#1d4448] px-10 py-4 text-sm font-bold text-white transition hover:bg-[#d97c97] disabled:opacity-50"
            >
              {loading ? "Entrando..." : "Ingresar"}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // ── PANEL ──────────────────────────────────────────────────────────────────
  return (
    <>
      <main className="min-h-screen bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <div className="mb-10 flex items-center justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
                Panel de administración
              </p>
              <h1 className="text-3xl font-bold text-[#1d4448]">
                Reservas
                <span className="ml-3 rounded-full bg-[#f0e6db] px-3 py-1 text-base font-bold text-[#1d4448]">
                  {reservas.length}
                </span>
              </h1>
            </div>
            <button
              onClick={() => { setToken(""); setReservas([]); }}
              className="rounded-full border border-[#e0d9d0] px-6 py-2 text-sm font-bold text-[#1d4448] transition hover:border-[#d97c97] hover:text-[#d97c97]"
            >
              Cerrar sesión
            </button>
          </div>

          {reservas.length === 0 ? (
            <div className="rounded-[32px] bg-white border border-[#f0e6db] p-12 text-center shadow-sm">
              <p className="text-[#4d5b59]">No hay reservas todavía.</p>
            </div>
          ) : (
            <div className="rounded-[32px] bg-white border border-[#f0e6db] shadow-sm overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#f0e6db] bg-[#faf8f6]">
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Nombre</th>
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Contacto</th>
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Fecha</th>
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Personas</th>
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Estado</th>
                    <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {reservas.map((r) => (
                    <tr key={r.id} className="border-b border-[#f0e6db] last:border-0 hover:bg-[#faf8f6] transition">
                      <td className="px-6 py-4">
                        <p className="font-medium text-[#1d4448]">{r.nombre}</p>
                        {r.notas && (
                          <p className="mt-0.5 text-xs text-[#4d5b59] italic">"{r.notas}"</p>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-[#4d5b59]">{r.email}</p>
                        {r.telefono && (
                          <p className="text-xs text-[#4d5b59]">{r.telefono}</p>
                        )}
                      </td>
                      <td className="px-6 py-4 text-[#4d5b59]">
                        {new Date(r.fecha).toLocaleString("es-AR", {
                          day: "2-digit", month: "short",
                          year: "numeric", hour: "2-digit", minute: "2-digit",
                        })}
                      </td>
                      <td className="px-6 py-4 text-[#4d5b59]">{r.personas}</td>
                      <td className="px-6 py-4">{estadoBadge(r.estado)}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {r.estado === "pendiente" && (
                            <button
                              onClick={() => abrirModal(r, "confirmar")}
                              className="rounded-full bg-[#ecfaf3] px-4 py-1.5 text-xs font-bold text-[#1d7a4a] transition hover:bg-[#1d7a4a] hover:text-white"
                            >
                              Confirmar
                            </button>
                          )}
                          {r.estado !== "cancelada" && (
                            <button
                              onClick={() => abrirModal(r, "cancelar")}
                              className="rounded-full bg-[#fce7ee] px-4 py-1.5 text-xs font-bold text-[#d97c97] transition hover:bg-[#d97c97] hover:text-white"
                            >
                              Cancelar
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* ── MODAL ── */}
      {modalTipo && reservaSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-6 backdrop-blur-sm"
          onClick={(e) => { if (e.target === e.currentTarget) cerrarModal(); }}
        >
          <div className="w-full max-w-sm rounded-[28px] bg-white border border-[#f0e6db] p-8 shadow-xl">

            <div className="mb-6 text-center">
              {modalTipo === "cancelar" ? (
                <>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#fce7ee]">
                    <span className="text-2xl">✕</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1d4448]">¿Cancelar reserva?</h2>
                  <p className="mt-2 text-sm text-[#4d5b59]">
                    Estás por cancelar la reserva de{" "}
                    <span className="font-bold text-[#1d4448]">{reservaSeleccionada.nombre}</span>{" "}
                    para el{" "}
                    <span className="font-bold text-[#1d4448]">
                      {new Date(reservaSeleccionada.fecha).toLocaleString("es-AR", {
                        day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
                      })}
                    </span>
                    . Esta acción no se puede deshacer.
                  </p>
                </>
              ) : (
                <>
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#ecfaf3]">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#1d4448]">¿Confirmar reserva?</h2>
                  <p className="mt-2 text-sm text-[#4d5b59]">
                    Vas a confirmar la reserva de{" "}
                    <span className="font-bold text-[#1d4448]">{reservaSeleccionada.nombre}</span>{" "}
                    para el{" "}
                    <span className="font-bold text-[#1d4448]">
                      {new Date(reservaSeleccionada.fecha).toLocaleString("es-AR", {
                        day: "2-digit", month: "short", hour: "2-digit", minute: "2-digit",
                      })}
                    </span>
                    .
                  </p>
                </>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={cerrarModal}
                disabled={accionLoading}
                className="flex-1 rounded-full border border-[#e0d9d0] py-3 text-sm font-bold text-[#1d4448] transition hover:border-[#d97c97] hover:text-[#d97c97] disabled:opacity-50"
              >
                Volver
              </button>
              <button
                onClick={confirmarAccion}
                disabled={accionLoading}
                className={`flex-1 rounded-full py-3 text-sm font-bold text-white transition disabled:opacity-50 ${
                  modalTipo === "cancelar"
                    ? "bg-[#d97c97] hover:bg-[#c2607e]"
                    : "bg-[#1d7a4a] hover:bg-[#145c37]"
                }`}
              >
                {accionLoading
                  ? "..."
                  : modalTipo === "cancelar"
                  ? "Sí, cancelar"
                  : "Sí, confirmar"}
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

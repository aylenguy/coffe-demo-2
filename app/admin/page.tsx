"use client";

import { useState } from "react";

interface Reserva {
  id: number;
  nombre: string;
  email: string;
  fecha: string;
  cantidadPersonas: number;
}

export default function AdminPage() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

      if (!res.ok) {
        setError("Credenciales incorrectas");
        return;
      }

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Reservas`, {
      headers: { Authorization: `Bearer ${tkn}` },
    });
    const data = await res.json();
    setReservas(data);
  }

  async function eliminarReserva(id: number) {
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Reservas/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setReservas(reservas.filter((r) => r.id !== id));
  }

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

          <form onSubmit={handleLogin} className="rounded-[32px] bg-white border border-[#f0e6db] p-8 flex flex-col gap-4 shadow-sm">
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

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">

        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="mb-1 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
              Panel de administración
            </p>
            <h1 className="text-3xl font-bold text-[#1d4448]">Reservas</h1>
          </div>
          <button
            onClick={() => setToken("")}
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
                  <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Email</th>
                  <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Fecha</th>
                  <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Personas</th>
                  <th className="px-6 py-4 text-left font-bold text-[#1d4448]">Acción</th>
                </tr>
              </thead>
              <tbody>
                {reservas.map((r) => (
                  <tr key={r.id} className="border-b border-[#f0e6db] last:border-0">
                    <td className="px-6 py-4 text-[#1d4448] font-medium">{r.nombre}</td>
                    <td className="px-6 py-4 text-[#4d5b59]">{r.email}</td>
                    <td className="px-6 py-4 text-[#4d5b59]">
                      {new Date(r.fecha).toLocaleString("es-AR")}
                    </td>
                    <td className="px-6 py-4 text-[#4d5b59]">{r.cantidadPersonas}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => eliminarReserva(r.id)}
                        className="rounded-full bg-[#fce7ee] px-4 py-1.5 text-xs font-bold text-[#d97c97] transition hover:bg-[#d97c97] hover:text-white"
                      >
                        Cancelar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </main>
  );
}
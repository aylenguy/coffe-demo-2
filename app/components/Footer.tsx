import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#f0e6db] bg-[#f7f1eb] px-6 py-20 text-[#1d4448]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 text-center md:grid-cols-3">
          
          {/* BRAND - Logo y descripción */}
          <div className="flex flex-col items-center">
            <h4 className="font-display mb-4 text-2xl font-bold tracking-tight">
              Brunch <span className="text-[#d97c97]">&</span> Co
            </h4>
            <p className="max-w-xs text-sm leading-6 text-[#4d5b59]">
              Café de especialidad, pastelería artesanal y una experiencia pensada para disfrutar con calma.
            </p>
          </div>

          {/* NAV - Navegación con hover en rosa */}
          <div className="flex flex-col items-center">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
              Navegación
            </p>
            <ul className="space-y-3 text-sm font-medium text-[#1d4448]">
              <li>
                <Link href="/carta" className="transition duration-300 hover:text-[#d97c97]">
                  Carta
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="transition duration-300 hover:text-[#d97c97]">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="transition duration-300 hover:text-[#d97c97]">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACTO - Info detallada */}
          <div className="flex flex-col items-center">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
              Contacto
            </p>
            <div className="space-y-3 text-sm font-medium text-[#4d5b59]">
              <p className="hover:text-[#1d4448] transition cursor-default">Rosario · Argentina</p>
              <p className="hover:text-[#1d4448] transition cursor-default">+54 9 341 XXX XXXX</p>
              <p className="hover:text-[#1d4448] transition cursor-default italic">hola@brunchandco.com</p>
            </div>
          </div>
        </div>

        {/* COPYRIGHT - Más limpio */}
        <div className="mt-20 border-t border-[#1d4448]/5 pt-8 text-center text-[10px] font-medium uppercase tracking-widest text-[#a3b1af]">
          © {new Date().getFullYear()} Brunch & Co — Hecho con amor.
        </div>
      </div>
    </footer>
  );
}
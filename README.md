# Brunch & Co — Frontend

Sitio web para una cafetería de especialidad en Rosario, Argentina. Desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Funcionalidades

- Landing page con secciones Hero, Benefits, Reviews y CTA
- Página de carta
- Página de contacto
- Formulario de reservas conectado a API REST

## Cómo correrlo

1. Clonar el repositorio
2. Instalar dependencias

\```bash
npm install
\```

3. Crear archivo `.env.local` en la raíz con:

\```
NEXT_PUBLIC_API_URL=https://localhost:7102
\```

4. Correr el servidor de desarrollo

\```bash
npm run dev
\```

5. Abrir [http://localhost:3000](http://localhost:3000)

> Requiere tener la API corriendo. Ver repositorio [CafeApi](https://github.com/tuusuario/cafe-api).
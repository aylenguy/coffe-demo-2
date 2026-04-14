"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

import { useState } from "react";
import {
  Coffee,
  Croissant,
  MapPin,
  Clock3,
  PhoneCall,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const googleReviews = [
  {
    name: "Micaela Sturzo",
    time: "Hace 5 meses",
    text: "Un ambiente cálido y limpio. Sus empleados amables y atentos, al servicio que uno necesita. El día que fui consumí un rol de canela que estaba exquisito, superó mis expectativas, y un licuado. Al no consumir lactosa, la moza estuvo muy atenta y me brindó la opción de bebida vegetal.",
  },
  {
    name: "Gabriela Petrin",
    time: "Hace un mes",
    text: "Fuimos a merendar un grupo de amigas, todo exquisito. El hojaldre de los croissant y las danesas una delicia, súper crocante. Platos preparados en el momento. Todo muy artesanal.",
  },
];

const featuredItems = [
  {
    title: "Croissant de pistacho",
    description: "Croissant relleno con crema de pistacho, suave, cremoso y recién horneado.",
    price: "$9.250",
    image: "/images/brunch-1.jpg",
    tag: "Favorito",
  },
  {
    title: "Avocado Toast",
    description: "Tostadas con palta, huevo y mix fresco. Una opción abundante y bien equilibrada.",
    price: "$14.300",
    image: "/images/brunch-2.jpg",
    tag: "Brunch",
  },
  {
    title: "French Toast",
    description: "Tostada francesa con frutas frescas y chantilly, ideal para quienes aman lo dulce.",
    price: "$13.250",
    image: "/images/brunch-3.jpg",
    tag: "Dulce",
  },
];

const benefits = [
  {
    icon: Coffee,
    title: "Sabores que sorprenden",
    description: "Una carta pensada para disfrutar de verdad, con platos abundantes y una propuesta que se siente en cada detalle.",
  },
  {
    icon: Croissant,
    title: "Brunch sin apuro",
    description: "Opciones dulces, saladas y café de especialidad para desayunar, merendar o cortar el día con algo rico.",
  },
  {
    icon: Sparkles,
    title: "Un espacio con identidad",
    description: "Diseño, calidez y una estética moderna para que la experiencia se vea tan bien como se siente.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % googleReviews.length);
  const prev = () => setIndex((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1));

  return (
    <div className="relative">
      <motion.div
        key={index}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-[30px] bg-white p-8 text-[#1d4448] shadow-xl md:p-10 border border-[#e8dfd5]"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-lg font-bold text-[#1d4448]">{googleReviews[index].name}</p>
            <p className="mt-1 text-sm text-[#d97c97] font-medium">
              ⭐⭐⭐⭐⭐ · {googleReviews[index].time}
            </p>
          </div>
          <div className="rounded-full bg-[#fce7ee] px-3 py-1 text-xs font-bold text-[#d97c97]">
            Google Reviews
          </div>
        </div>
        <p className="text-sm leading-7 text-[#4d5b59] md:text-base italic">
          "{googleReviews[index].text}"
        </p>
      </motion.div>

      <div className="mt-6 flex justify-center gap-4">
        <button onClick={prev} className="rounded-full border border-[#d97c97] px-6 py-2 text-sm text-[#d97c97] transition hover:bg-[#d97c97] hover:text-white">
          ←
        </button>
        <button onClick={next} className="rounded-full border border-[#d97c97] px-6 py-2 text-sm text-[#d97c97] transition hover:bg-[#d97c97] hover:text-white">
          →
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-white text-[#2a2a2a]">
    {/* HERO - VERSIÓN PREMIUM */}
<section className="relative overflow-hidden bg-white px-6 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40">
  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/textures/grain.png')]" />

  <div className="relative z-10 mx-auto max-w-7xl">
    <div className="grid items-center gap-16 lg:grid-cols-12">
      
      {/* TEXTO: Disposición más asimétrica */}
      <motion.div 
        className="lg:col-span-6 xl:col-span-5"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="mb-8 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-[#d97c97]" />
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#d97c97]">
            Establecido en Rosario
          </p>
        </div>

       <h1 className="font-display mb-8 text-6xl font-bold leading-[0.95] text-[#1d4448] md:text-8xl lg:text-[100px]">
  Brunch <br />
  <span className="relative">
    <span className="text-[#d97c97]">&</span> Co
    {/* Subrayado decorativo */}
    <svg 
      className="absolute -bottom-2 left-0 w-full" 
      viewBox="0 0 300 20" 
      fill="none"
      preserveAspectRatio="none"
    >
      <path 
        d="M5 15C50 5 150 5 295 15" 
        stroke="#d97c97" 
        strokeWidth="4" 
        strokeLinecap="round" 
        opacity="0.3" 
      />
    </svg>
  </span>
</h1>

        <p className="mb-10 max-w-md text-xl leading-relaxed text-[#4d5b59]">
          No es solo la comida, es la pausa. Un refugio contemporáneo donde el sabor artesanal y el diseño se encuentran.
        </p>

        <div className="flex flex-col gap-5 sm:flex-row">
          <Link href="/carta" className="relative overflow-hidden group rounded-full bg-[#1d4448] px-12 py-5 text-sm font-bold text-white transition-all duration-300 hover:shadow-[0_10px_30px_rgba(29,68,72,0.3)]">
            <span className="relative z-10">Explorar Carta</span>
            <div className="absolute inset-0 translate-y-full bg-[#d97c97] transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
          
          <Link href="/contacto" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1d4448]/20 px-12 py-5 text-sm font-bold text-[#1d4448] transition-all hover:border-[#1d4448]">
         Contacto
          </Link>
        </div>
      </motion.div>

      {/* COLUMNA DERECHA: Collage de Imágenes (Diferente a lo anterior) */}
      <div className="relative lg:col-span-6 lg:offset-1">
        <div className="relative grid grid-cols-12 gap-4">
          
          {/* Imagen Principal (Vertical) */}
          <motion.div 
            className="col-span-8 overflow-hidden rounded-[60px] shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="/images/descarga-1.jpg"
              alt="Plato de brunch"
              width={600}
              height={800}
              className="h-[550px] w-full object-cover"
            />
          </motion.div>

          {/* Imagen Secundaria (Flotante) */}
          <motion.div 
            className="absolute -right-4 top-1/4 col-span-5 overflow-hidden rounded-[40px] border-8 border-[#faf8f6] shadow-2xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Image
              src="/images/coffee-detail.jpg"
              alt="Detalle de café"
              width={300}
              height={400}
              className="h-[300px] w-full object-cover"
            />
          </motion.div>

          {/* Elemento decorativo: Texto circular giratorio */}
          <motion.div 
            className="absolute -bottom-10 left-1/4 h-32 w-32"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
              <defs>
                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
              </defs>
              {/* Círculo central opcional para que se vea como un sello real */}
              <circle cx="50" cy="50" r="30" fill="#d97c97" className="shadow-lg" />
              <text fontSize="8" fontStyle="normal" fontWeight="900" className="fill-[#1d4448] uppercase tracking-[0.1em]">
                <textPath xlinkHref="#circlePath">
                  • PRODUCTO REAL • ARTESANAL • ROSARIO • BRUNCH & CO • 
                </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* BENEFICIOS */}
      <section className="bg-[#f7f1eb] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-16 max-w-3xl" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d97c97]">
              ¿Por qué elegirnos?
            </p>
            <h2 className="text-4xl font-bold text-[#1d4448] md:text-5xl">
              Una propuesta que combina sabor y buenos momentos
            </h2>
          </motion.div>

          <motion.div className="grid gap-8 md:grid-cols-3" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={fadeUp} className="group rounded-[32px] bg-white p-8 shadow-sm transition-all hover:shadow-xl border border-transparent hover:border-[#f2a9c0]">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fce7ee] text-[#d97c97] transition-transform group-hover:rotate-12">
                    <Icon size={28} />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-[#1d4448]">{item.title}</h3>
                  <p className="leading-relaxed text-[#4d5b59]">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* DESTACADOS */}
    <section className="px-6 py-20 md:py-24 bg-white">
  <div className="mx-auto max-w-7xl">
    
    {/* CABECERA */}
    <motion.div 
      className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between" 
      variants={fadeUp} 
      initial="hidden" 
      whileInView="show"
      viewport={{ once: true }}
    >
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#d97c97]">
          Destacados
        </p>
        <h2 className="text-4xl font-bold text-[#1d4448] md:text-5xl">
          Favoritos de la carta
        </h2>
      </div>
      <Link 
        href="/carta" 
        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-[#d97c97] hover:text-[#1d4448] transition-colors"
      >
        Ver carta completa <ArrowRight size={16} />
      </Link>
    </motion.div>

    {/* GRID */}
    <div className="grid gap-8 md:grid-cols-3">
      {featuredItems.map((item) => (
        <motion.article 
          key={item.title} 
          className="group overflow-hidden rounded-[32px] border border-[#f0e6dd] bg-white transition-all duration-300 hover:shadow-xl hover:shadow-[#1d4448]/5"
        >
          {/* IMAGEN */}
          <div className="aspect-[4/3] overflow-hidden">
            <Image 
              src={item.image} 
              alt={item.title} 
              width={600} 
              height={450} 
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105" 
            />
          </div>

          {/* CONTENIDO */}
          <div className="p-7">
            <div className="mb-4">
              <span className="rounded-full bg-[#fce7ee] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#d97c97]">
                {item.tag}
              </span>
            </div>
            
            <div className="mb-2 flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-[#1d4448]">
                {item.title}
              </h3>
              <span className="text-xl font-medium text-[#d97c97]">
                {item.price}
              </span>
            </div>
            
            <p className="text-sm leading-relaxed text-[#4d5b59]/80">
              {item.description}
            </p>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>

      {/* RESEÑAS */}
      <section className="bg-[#f7f1eb] px-6 py-24 text-[#1d4448]"> 
        <div className="mx-auto max-w-4xl text-center">
          <motion.div 
            className="mb-12" 
            variants={fadeUp} 
            initial="hidden" 
            whileInView="show"
          >
            {/* Badge: fondo rosa suave con texto rosa oscuro */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#fce7ee] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#d97c97]">
              <Star size={14} fill="#d97c97" /> Opiniones reales
            </div>

            {/* Título: ahora en color petróleo para legibilidad */}
            <h2 className="text-4xl font-bold md:text-5xl mb-6 text-[#1d4448]">
              Lo que dicen nuestros clientes
            </h2>

            {/* Opcional: un texto descriptivo para mejorar el balance visual */}
            <p className="text-[#4d5b59] max-w-2xl mx-auto mb-8">
              Experiencias auténticas de quienes ya disfrutan de nuestro café y pastelería artesanal.
            </p>
          </motion.div>

          <ReviewCarousel />
        </div>
      </section>
      {/* UBICACIÓN */}
      <section className="px-6 py-20 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            { Icon: MapPin, label: "Ubicación", title: "Rosario, Sta Fe", desc: "Calle Ejemplo 1234, Barrio Pichincha." },
            { Icon: Clock3, label: "Horarios", title: "Todos los días", desc: "Lunes a Domingos de 08:00 a 20:00 hs." },
            { Icon: PhoneCall, label: "Contacto", title: "Reservas", desc: "WhatsApp: +54 341 000 0000" }
          ].map((item, i) => (
            <div key={i} className="rounded-[32px] bg-white p-8 shadow-sm border border-[#eee]">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#fce7ee] text-[#d97c97]">
                <item.Icon size={24} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#d97c97] mb-2">{item.label}</p>
              <h3 className="text-2xl font-bold text-[#1d4448] mb-3">{item.title}</h3>
              <p className="text-[#4d5b59] text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[40px] bg-[#d97c97] p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 h-64 w-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="text-4xl font-bold md:text-5xl mb-4">¿Te antojaste de algo rico?</h2>
              <p className="text-white/90 text-lg">Vení a disfrutar del mejor café de especialidad y nuestra pastelería artesanal.</p>
            </div>
            <div className="flex gap-4">
               <Link href="/carta" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-4 text-sm font-bold text-[#d97c97] transition duration-300 hover:scale-105 hover:bg-[#f7f1eb]">
                Explorar carta
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
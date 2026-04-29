import Hero from "./components/sections/Hero";
import Benefits from "./components/sections/Benefits";
import Featured from "./components/sections/Featured";
import Reviews from "./components/sections/Reviews";
import Location from "./components/sections/Location";
import CTA from "./components/sections/CTA";



export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <Featured />
      <Reviews />
      <Location />
      <CTA />
    </main>
  );
}

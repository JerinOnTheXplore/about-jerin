import Hero from "../../components/Hero";
import About from "./about/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Hero/>
      <About/>
      <Skills/>
    </div>
  );
}
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import About from "./about/page";
import Contact from "./contact/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Skills from "./skills/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}
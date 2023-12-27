import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import LoveToDo from "./LoveToDo";
import Nav from "./Nav";
import Projects from "./Projects";
import Skills from "./Skills";
import { scrollToTop } from "./extras/ScrollToTop";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <LoveToDo />
      <Projects />
      <Contact />
    </div>
  );
}

export default Home;

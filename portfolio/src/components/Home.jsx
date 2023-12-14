import About from "./About"
import Contact from "./Contact"
import Hero from "./Hero"
import Nav from "./Nav"
import Projects from "./Projects"
import Skills from "./Skills"

function Home (){
    return (
        <>
        <Nav/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        </>
    )
}

export default Home
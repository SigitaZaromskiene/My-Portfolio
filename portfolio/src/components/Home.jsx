import About from "./About"
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
        </>
    )
}

export default Home
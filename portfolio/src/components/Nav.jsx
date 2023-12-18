import { useState } from "react";
import Btn from "./Btn";
import { useContext } from "react";
import { Global } from "./Global";


function Nav() {
  const [active, setActive] = useState("home");

 
  const { sectionRef, scrollToSection} = useContext(Global);
  


  
  return (
    <div className="nav_container" id="section1" ref={sectionRef}>
      <div className="nav_container_logo">S</div>
      <div className="nav_container_links">
        <div onClick={() => setActive("home")}>
          <a onClick={scrollToSection}
            href="#section1"
            className={
              active === "home"
                ? "nav_container_links_link + active"
                : "nav_container_links_link"
            }
          >
            HOME
          </a>
        </div>
        <div onClick={() => setActive("about")}>
          <a
           onClick={scrollToSection}
           href="#section2"
            className={
              active === "about"
                ? "nav_container_links_link + active"
                : "nav_container_links_link"
            }
          >
            ABOUT
          </a>
        </div>
        <div onClick={() => setActive("projects")}>
          <a
            onClick={scrollToSection}
            href="#section3"
            className={
              active === "projects"
                ? "nav_container_links_link + active"
                : "nav_container_links_link"
            }
          >
            PROJECTS
          </a>
        </div>
        <div onClick={() => setActive("contact")}>
          <a
            onClick={scrollToSection}
            href="#section4"
            className={
              active === "contact"
                ? "nav_container_links_link + active"
                : "nav_container_links_link"
            }
          >
            CONTACT
          </a>
        </div>
        <div className="nav_container_links_link">
         <Btn text='RESUME' className='btn + btn_active'/>
        </div>
      </div>
    </div>
  );
}

export default Nav;

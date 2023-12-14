import { useState } from "react";
import Btn from "./Btn";

function Nav() {
  const [active, setActive] = useState("home");

  
  return (
    <div className="nav_container">
      <div className="nav_container_logo">S</div>
      <div className="nav_container_links">
        <div onClick={() => setActive("home")}>
          <a
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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

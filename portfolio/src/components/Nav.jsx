import { useState, useEffect } from "react";
import { scrollToTop } from "./extras/ScrollToTop";
import { useContext } from "react";
import { Global } from "./Global";
import MobileMenu from "./MobileMenu";
import Burger from "./Burger";
import UploadCV from "./extras/UploadCV";

function Nav() {
  const [active, setActive] = useState("home");
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { sectionRef, scrollToSection } = useContext(Global);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;

      if (currentScroll === 0) {
        setIsSticky(false);
      } else if (currentScroll < lastScrollTop) {
        setIsSticky(true);
      }
      lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    };

    let lastScrollTop = 0;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`nav_container ${isSticky ? "sticky" : ""}`}
        id="#home"
        ref={sectionRef}
      >
        <div className="nav_container_logo" onClick={() => setActive("home")}>
          <a onClick={scrollToTop} href="#home">
            S
          </a>
        </div>
        <Burger setMobileMenu={setMobileMenu} />
        {mobileMenu && (
          <MobileMenu setMobileMenu={setMobileMenu} mobileMenu={mobileMenu} />
        )}
        <div className="nav_container_links">
          <div onClick={() => setActive("home")}>
            <a
              onClick={scrollToTop}
              href="#home"
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
              href="#about"
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
              href="#projects"
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
              href="#contact"
              className={
                active === "contact"
                  ? "nav_container_links_link + active"
                  : "nav_container_links_link"
              }
            >
              CONTACT
            </a>
          </div>
          <UploadCV />
        </div>
      </div>
    </>
  );
}

export default Nav;

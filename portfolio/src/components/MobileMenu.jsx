import { scrollToTop } from "./extras/ScrollToTop";
import MyCV from "../UI/Img/MyCV.pdf"
function MobileMenu({ mobileMenu, setMobileMenu }) {

  const mobileMenuNotVisible = () => {
    setMobileMenu(false);
  };

  const toHomeSectionHandler = () => {
    setMobileMenu(false);
    scrollToTop();
  };

  return (
    <div className={`mobile_container ${mobileMenu ? "active" : ""}`}>
      <ul className="mobile_container_menu">
        <li>
          <a onClick={toHomeSectionHandler} href="#home">
            HOME
          </a>
        </li>
        <li>
          <a onClick={mobileMenuNotVisible} href="#about">
            ABOUT
          </a>
        </li>
        <li>
          <a onClick={mobileMenuNotVisible} href="#projects">
            PROJECTS
          </a>
        </li>
        <li>
          <a onClick={mobileMenuNotVisible} href="#contact">
            CONTACT
          </a>
        </li>
        <svg
          onClick={mobileMenuNotVisible}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          data-slot="icon"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
        <li>
        <a href={MyCV} download="MY_CV.pdf">
      {" "}
      RESUME{" "}
    </a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;

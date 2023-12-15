import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";
import { useContext } from "react";
import { Global } from "./Global";





function Hero() {



  
  return (
    <div className="hero_container wrapper" >
      <div className="hero_container_left">
        <p className="hero_container_left_subheading">Hello! I am</p>
        <h1>Sigita Zaromskiene</h1>
       <Heading text='Front End Developer'/>
        <div className="hero_container_left_features">
          <p>Web Developer</p>
          <p>React programmer</p>
          <p>Software Engineer</p>
        </div>
        <div className="hero_container_left_icons">
          <a
            href="https://www.linkedin.com/in/sigita-zaromskiene/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/SigitaZaromskiene"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.facebook.com/sigita.polekaite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
      <div className="hero_container_right"></div>
    </div>
  );
}

export default Hero;
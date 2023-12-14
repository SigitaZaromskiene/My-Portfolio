import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

function Hero() {
  return (
    <div className="hero_container">
      <div className="hero_container_left">
        <p className="hero_container_left_subheading">Hello! I am</p>
        <h1>Sigita Zaromskiene</h1>
        <h3>Front End Developer</h3>
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
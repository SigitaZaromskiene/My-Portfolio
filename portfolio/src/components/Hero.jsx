import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import Tick from "./extras/Tick";

function Hero() {
  const [color, setColor] = useState("black");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="hero_container wrapper">
      <div className="hero_container_left">
        <p className="hero_container_left_subheading">Hello! I am</p>
        <h1 style={{ color: color }}>Sigita Žaromskienė</h1>
        <Heading text="Front End Developer" />
        <div className="hero_container_left_features">
          <p>
            Web Developer <Tick />
          </p>
          <p>
            React Programmer <Tick />
          </p>
          <span>
            Software Engineer <Tick />
          </span>
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

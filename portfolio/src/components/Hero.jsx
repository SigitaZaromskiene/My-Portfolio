import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { Global } from "./Global";





function Hero() {

  const [color, setColor] = useState('black')
  const { sectionRef} = useContext(Global);



  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }, 2000);
  
    return () => clearInterval(intervalId);
  }, []);
    



  
  return (
    <div className="hero_container wrapper" >
      <div className="hero_container_left">
        <p className="hero_container_left_subheading">Hello! I am</p>
        <h1 style={{color:color}}>Sigita Žaromskienė</h1>
       <Heading text='Front End Developer'/>
        <div className="hero_container_left_features">
          <p>Web Developer  <span> 
<svg className='tick_icons' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" color="white" viewBox="0 0 24 24">
<path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
</svg>   </span></p>
          <p>React Programmer  <span>
<svg className='tick_icons' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" color="white" viewBox="0 0 24 24">
<path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
</svg>   </span></p>
          <span>Software Engineer  <span>
<svg className='tick_icons' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" color="white" viewBox="0 0 24 24">
<path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path>
</svg>   </span></span>
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
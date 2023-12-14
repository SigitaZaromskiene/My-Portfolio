import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faNode,
  faGit,
  faGithub,
  faCss3Alt,
  faSass,
  faNpm,
} from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";

function Skills() {
  return (
    <div className="skills_container wrapper">
        <Heading text='Tech Skills'/>
      <div className="skills_container_carousel">
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faReact} />
          <p>REACT</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faJs} />
          <p>JS</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faSass} />
          <p>SCSS</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faCss3Alt} />
          <p>CSS</p>
        </div>
        <div className="skills_container_carousel_skill">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 50 50"
            style={{ fill: "#FFFFFF" }}
          >
            <path d="M 24 2 C 16.832 2 11 10.292328 11 20.486328 C 11 25.752514 12.564938 30.494647 15.060547 33.859375 A 3.5 3.5 0 0 0 18.5 38 A 3.5 3.5 0 1 0 18.5 31 A 3.5 3.5 0 0 0 17.931641 31.050781 C 16.143565 28.387233 15 24.611465 15 20.486328 C 15 12.633328 19.122 6 24 6 C 28.119 6 31.689125 10.7375 32.703125 16.9375 C 34.125125 17.3455 35.541688 17.897453 36.929688 18.564453 C 36.251687 9.2704531 30.712 2 24 2 z M 22.5 17 A 3.5 3.5 0 1 0 22.5 24 A 3.5 3.5 0 0 0 25.640625 22.041016 C 28.890379 21.837485 32.64609 22.840116 36.113281 24.917969 C 42.973281 29.030969 46.703812 36.223047 44.257812 40.623047 C 43.453812 42.069047 42.005359 43.108953 40.068359 43.626953 C 37.279359 44.372953 33.859234 43.993672 30.490234 42.638672 C 29.421234 43.632672 28.245891 44.565828 26.962891 45.423828 C 30.290891 47.104828 33.8105 47.996094 37.0625 47.996094 C 38.4725 47.996094 39.833516 47.830234 41.103516 47.490234 C 44.110516 46.685234 46.410906 44.982406 47.753906 42.566406 C 51.337906 36.117406 47.127922 26.858281 38.169922 21.488281 C 33.907448 18.931871 29.185543 17.753815 25.035156 18.09375 A 3.5 3.5 0 0 0 22.5 17 z M 9.1601562 23.324219 C 2.0791563 28.795219 -0.95795312 36.799406 2.2480469 42.566406 C 3.5910469 44.982406 5.8914375 46.685234 8.8984375 47.490234 C 10.169438 47.830234 11.527453 47.996094 12.939453 47.996094 C 16.739453 47.996094 20.910031 46.789672 24.707031 44.513672 C 28.954867 41.96696 32.09575 38.543722 33.876953 34.962891 C 35.628054 34.772138 37 33.301038 37 31.5 C 37 29.57 35.43 28 33.5 28 C 31.57 28 30 29.57 30 31.5 C 30 32.040225 30.132082 32.546629 30.351562 33.003906 C 28.907628 35.978686 26.213448 38.945387 22.650391 41.082031 C 18.354391 43.658031 13.599641 44.609953 9.9316406 43.626953 C 7.9956406 43.108953 6.5481406 42.069047 5.7441406 40.623047 C 3.8101406 37.143047 5.7462969 31.923469 10.029297 27.855469 C 9.6182969 26.415469 9.3241562 24.899219 9.1601562 23.324219 z"></path>
          </svg>

          <p>Redux</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faGit} />
          <p>Git</p>
        </div>
        
        <div className="skills_container_carousel_skill">
          {" "}
          <FontAwesomeIcon icon={faGithub} />
          <p>GitHub</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faNpm} />
          <p>NPM</p>
        </div>
        <div className="skills_container_carousel_skill">
          <FontAwesomeIcon icon={faNode} />
          <p>Node.js</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;

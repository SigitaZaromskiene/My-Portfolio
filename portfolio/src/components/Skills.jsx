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
import ReduxIcon from "../UI/Svg/redux.png";
import JestIcon from "../UI/Svg/jest.png";
import Heading from "./Heading";

const skills = [
  { id: 1, skill: "React", icon: faReact },
  { id: 2, skill: "JS", icon: faJs },
  { id: 3, skill: "SCSS", icon: faSass },
  { id: 4, skill: "CSS", icon: faCss3Alt },
  { id: 5, skill: "Git", icon: faGit },
  { id: 6, skill: "Github", icon: faGithub },
  { id: 7, skill: "NPM", icon: faNpm },
  { id: 8, skill: "Node.js", icon: faNode },
  { id: 9, skill: "Redux", icon: ReduxIcon },
  { id: 10, skill: "Jest", icon: JestIcon },
];

function Skills() {
  return (
    <div className="skills_container wrapper">
      <Heading text="Tech Skills" />
      <div className="skills_container_carousel">
        {skills.map((s) => (
          <div key={s.id} className="skills_container_carousel_skill">
            {typeof s.icon === "object" &&
            s.icon !== null &&
            s.icon !== undefined ? (
              <FontAwesomeIcon icon={s.icon} />
            ) : (
              <img src={s.icon} alt={s.skill} />
            )}

            <p>{s.skill}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

import Tick from "../extras/Tick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project4() {
  return (
    <div className="projects_container_table_project">
      <h3>Fund me project</h3>
      <ul>
        <li>
          <Tick />
          React Hooks Mastery: Utilizing React hooks, including useContext,
          useState, useEffect
        </li>
        <li>
          <Tick />
          Controlled Forms: With controlled forms, user interactions are
          seamless.
        </li>
        <li>
          <Tick />
          SCSS with BEM methodology for styling
        </li>
        <li>
          <Tick />
          Authentication: The project incorporates login, register, and logout
          features to enhance user security
        </li>
        <li>
          <Tick />
          HTTP Methods Expertise: My project excels in handling various HTTP
          methods, including POST, GET, DELETE, and PUT, ensuring seamless data
          management.
        </li>
      </ul>
      <div className="projects_container_table_project_icons">
        <a
          href="https://github.com/SigitaZaromskiene/Grocery-Shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="projects_container_table_project_features">
        <p>react.js</p>
        <p>scss</p>
        <p>maria-db</p>
        <p>node.js</p>
      </div>
    </div>
  );
}

export default Project4;

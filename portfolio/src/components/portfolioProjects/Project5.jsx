import Tick from "../extras/Tick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project5() {
  return (
    <div className="projects_container_table_project">
      <h3>Roll the dice game</h3>
      <ul>
        <li>
          <Tick />
          CSS classes: Apply CSS classes for consistent styling and efficient
          design management
        </li>
        <li>
          <Tick />
          JavaScript logic: Employ JavaScript to create interactive
          functionalities and enhance user interactions
        </li>
        <li>
          <Tick />
          Animation: Incorporate animations to add visual appeal and improve
          user engagement within the project
        </li>
        <li>
          <Tick />
          DOM: Utilize Document Object Model manipulation to dynamically update
          and modify content on the web page
        </li>
      </ul>

      <div className="projects_container_table_project_icons">
        <a
          href="https://github.com/SigitaZaromskiene/16-number-game"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://sigitazaromskiene.github.io/Roll-the-dice-game/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
      <div className="projects_container_table_project_features">
        <p>javascript</p>
        <p>css5</p>
        <p>game</p>
        <p>media-queries</p>
      </div>
    </div>
  );
}

export default Project5;

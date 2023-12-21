import Tick from "../extras/Tick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project2() {
  return (
    <div className="projects_container_table_project">
      <h3>Fun API Integration Project</h3>
      <ul>
        <li>
          <Tick />
          React and JS: A JavaScript library for building user interfaces
        </li>
        <li>
          <Tick />
          Redux Toolkit: A set of tools for efficient Redux development
        </li>
        <li>
          <Tick />
          Redux Thunks: Middleware for handling asynchronous logic in Redux
        </li>
        <li>
          <Tick />
          SCSS: A CSS preprocessor for styling
        </li>
        <li>
          <Tick />
          API's used to fetch random facts and images
        </li>
      </ul>
      <div className="projects_container_table_project_icons">
        <a
          href="https://github.com/SigitaZaromskiene/Fun-API-Integration-Project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://sigitazaromskiene.github.io/Fun-API-Integration-Project/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            data-slot="icon"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      </div>
      <div className="projects_container_table_project_features">
        <p>react.js</p>
        <p>scss</p>
        <p>redux-thunks</p>
        <p>api</p>
      </div>
    </div>
  );
}

export default Project2;

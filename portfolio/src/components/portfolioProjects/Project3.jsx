import Tick from "../extras/Tick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project3() {
  return (
    <div className="projects_container_table_project">
      <h3>Order Meals App</h3>
      <ul>
        <li>
          <Tick />
          React.js for the user interface
        </li>
        <li>
          <Tick />
          Database Integration: MariaDB serves as the backbone
        </li>
        <li>
          <Tick />
          SCSS with BEM methodology for styling
        </li>
        <li>
          <Tick />
          React's useContext hook is used as state management tool
        </li>
        <li>
          <Tick />
          Axios is employed as the HTTP client library in this project to make
          requests and handle data fetching operations from external APIs or
          endpoints
        </li>
      </ul>
      <div className="projects_container_table_project_icons">
        <a
          href="https://github.com/SigitaZaromskiene/Order-meals-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white" }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="projects_container_table_project_features">
        <p>react.js</p>
        <p>scss</p>
        <p>maria-db</p>
        <p>axios</p>
      </div>
    </div>
  );
}

export default Project3;

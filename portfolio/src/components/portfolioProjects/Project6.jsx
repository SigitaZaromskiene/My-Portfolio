import Tick from "../extras/Tick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Project6() {
  return (
    <div className="projects_container_table_project">
      <h3>React investment project</h3>
      <ul>
        <li>
          <Tick />
          React.js for the user interface
        </li>
        <li>
          <Tick />
          Efficient State Management: Leveraging useContext
        </li>
        <li>
          <Tick />
          CSS Modules for styling
        </li>
        <li>
          <Tick />
          Authentication: The project incorporates login, register, and logout
          features to enhance user security
        </li>
        <li>
          <Tick />
          LocalStorage Integration: User data is securely stored in
          localStorage, ensuring a convenient return to the form with data
          preservation
        </li>
      </ul>
      <div className="projects_container_table_project_icons">
        <a
          href="https://github.com/SigitaZaromskiene/React-investment-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
      <div className="projects_container_table_project_features">
        <p>react.js</p>
        <p>css-modules</p>
        <p>localStorage</p>
        <p>forms</p>
      </div>
    </div>
  );
}

export default Project6;

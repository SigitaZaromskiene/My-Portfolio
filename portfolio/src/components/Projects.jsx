import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCheck} from "@fortawesome/free-brands-svg-icons";
import Heading from "./Heading";
import { Global } from "./Global";
import { useContext } from "react";
import Tick from "./extras/Tick";

function Projects() {

  const { sectionRef} = useContext(Global);
  return (
    <div className="projects_container wrapper" id="section3" ref={sectionRef}>
      <Heading text='Projects'/>
      <div div className="projects_container_table ">
        <div className="projects_container_table_project ">
          <h3>Grocery Shop React Project</h3>
          <ul>
          <li><Tick/>React.js for the user interface</li>
          <li><Tick/>React Router for navigation</li>
          <li><Tick/>SCSS with BEM methodology for styling</li>
          <li><Tick/>Redux with Redux Toolkit and slices for state management</li>
          <li><Tick/>Media queries (up to 500px)</li>
          </ul>
          <div className="projects_container_table_project_icons">
            <a
              href="https://github.com/SigitaZaromskiene/Grocery-Shop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href="https://sigitazaromskiene.github.io/Grocery-Shop/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'white'}}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 128 128"
style={{ fill: '#FFFFFF' }}>
<path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
</svg>
            </a>
          </div>
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p> scss</p>
            <p>redux-toolkit</p>
            <p>jest</p>
          </div>
        </div>
        <div className="projects_container_table_project ">
          <h3>Fun API Integration Project
</h3>
          <ul>
          <li><Tick/>React and JS: A JavaScript library for building user interfaces</li>
          <li><Tick/>Redux Toolkit: A set of tools for efficient Redux development</li>
          <li><Tick/>Redux Thunks: Middleware for handling asynchronous logic in Redux</li>
          <li><Tick/>SCSS: A CSS preprocessor for styling</li>
          <li><Tick/>API's used to fetch random facts and images</li>
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
              style={{color: 'white'}}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 128 128"
style={{ fill: '#FFFFFF' }}>
<path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
</svg>
            </a>
          </div>
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>scss</p>
            <p>redux-thunks</p>
            <p>api</p>
          </div>
        </div>
        <div className="projects_container_table_project ">
          <h3>Order Meals App</h3>
          <ul>
          <li><Tick/>React.js for the user interface</li>
          <li><Tick/>Database Integration: MariaDB serves as the backbone</li>
          <li><Tick/>SCSS with BEM methodology for styling</li>
          <li><Tick/>React's useContext hook is used as state management tool</li>
          <li><Tick/>
Axios is employed as the HTTP client library in this project to make requests and handle data fetching operations from external APIs or endpoints</li>
          </ul>
          <div className="projects_container_table_project_icons">
          
            <a
              href="https://github.com/SigitaZaromskiene/Order-meals-app"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'white'}}
            >
             
             <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>scss</p>
            <p>maria-db</p>
            <p>axios</p>
          </div>
        </div>
        <div className="projects_container_table_project ">
          <h3>Fund me project
</h3>
          <ul>
          <li><Tick/>React Hooks Mastery: Utilizing React hooks, including useContext, useState, useEffect</li>
          <li><Tick/>Controlled Forms: With controlled forms, user interactions are seamless.</li>
          <li><Tick/>SCSS with BEM methodology for styling</li>
          <li><Tick/>Authentication: The project incorporates login, register, and logout features to enhance user security</li>
          <li><Tick/>HTTP Methods Expertise: My project excels in handling various HTTP methods, including POST, GET, DELETE, and PUT, ensuring seamless data management.</li>
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
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>scss</p>
            <p>maria-db</p>
            <p>node.js</p>
          </div>
        </div>
        {/* <div className="projects_container_table_project ">
          <h3>Order Meals App</h3>
          <ul>
          <li>React.js for the user interface</li>
          <li>Database Integration: MariaDB serves as the backbone</li>
          <li>SCSS with BEM methodology for styling</li>
          <li>React's useContext hook is used as state management tool</li>
          <li>
Axios is employed as the HTTP client library in this project to make requests and handle data fetching operations from external APIs or endpoints</li>
          </ul>
          <div className="projects_container_table_project_icons">
          
            <a
              href="https://github.com/SigitaZaromskiene/Order-meals-app"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'white'}}
            >
             
             <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>scss</p>
            <p>maria-db</p>
            <p>axios</p>
          </div>
        </div> */}
        <div className="projects_container_table_project ">
          <h3>Roll the dice game
</h3>
<ul>  
          <li>
          <Tick/>CSS classes: Apply CSS classes for consistent styling and efficient design management</li>
          <li>
          <Tick/>JavaScript logic: Employ JavaScript to create interactive functionalities and enhance user interactions</li>
          <li>
          <Tick/>Animation: Incorporate animations to add visual appeal and improve user engagement within the project</li>
          <li>
          <Tick/>DOM: Utilize Document Object Model manipulation to dynamically update and modify content on the web page</li>
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
              href="https://sigitazaromskiene.github.io/16-number-game/"
              target="_blank"
              rel="noopener noreferrer"
              style={{color: 'white'}}
            >
             
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"  viewBox="0 0 128 128"
style={{ fill: '#FFFFFF' }}>
<path d="M 84 11 C 82.3 11 81 12.3 81 14 C 81 15.7 82.3 17 84 17 L 106.80078 17 L 60.400391 63.400391 C 59.200391 64.600391 59.200391 66.499609 60.400391 67.599609 C 61.000391 68.199609 61.8 68.5 62.5 68.5 C 63.2 68.5 63.999609 68.199609 64.599609 67.599609 L 111 21.199219 L 111 44 C 111 45.7 112.3 47 114 47 C 115.7 47 117 45.7 117 44 L 117 14 C 117 12.3 115.7 11 114 11 L 84 11 z M 24 31 C 16.8 31 11 36.8 11 44 L 11 104 C 11 111.2 16.8 117 24 117 L 84 117 C 91.2 117 97 111.2 97 104 L 97 59 C 97 57.3 95.7 56 94 56 C 92.3 56 91 57.3 91 59 L 91 104 C 91 107.9 87.9 111 84 111 L 24 111 C 20.1 111 17 107.9 17 104 L 17 44 C 17 40.1 20.1 37 24 37 L 69 37 C 70.7 37 72 35.7 72 34 C 72 32.3 70.7 31 69 31 L 24 31 z"></path>
</svg>
            </a>
        
          </div>
          <div className="projects_container_table_project_features ">
            <p>javascript</p>
            <p>css5</p>
            <p>game</p>
            <p>media-queries</p>
          </div>
        </div>
        
        <div className="projects_container_table_project ">
          <h3>React investment project

</h3>
      <ul>  
<li>
<Tick/>React.js for the user interface</li>
<li>
<Tick/>Efficient State Management: Leveraging useContext</li>
<li>
<Tick/>CSS Modules for styling</li>
<li>
<Tick/>Authentication: The project incorporates login, register, and logout features to enhance user security</li>
<li>
<Tick/>LocalStorage Integration: User data is securely stored in localStorage, ensuring a convenient return to the form with data preservation</li>
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
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>css-modules</p>
            <p>localStorage</p>
            <p>forms</p>
          </div>
        </div>
        
        </div>
        
    </div>
  );
}

export default Projects;

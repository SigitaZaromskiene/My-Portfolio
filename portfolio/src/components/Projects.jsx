import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";
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
             
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

            </a>
          </div>
          <div className="projects_container_table_project_features ">
            <p>react.js</p>
            <p>scss</p>
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
             
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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
             
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" data-slot="icon" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
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

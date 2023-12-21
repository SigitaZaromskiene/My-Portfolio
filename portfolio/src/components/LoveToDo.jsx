import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketballBall,
  faPersonSwimming,
  faPersonRunning,
  faCat,
  faFilm,
  faPlane,
  faPeopleRoof,
  faGraduationCap,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";

function LoveToDo() {
  return (
    <div className=" wrapper">
      <Heading text="Love to do" />
      <div className="love_to_do_container">
        <div className="love_to_do_container_activity">
          Basketball{" "}
          <span>
            <FontAwesomeIcon icon={faBasketballBall} />
          </span>{" "}
        </div>
        <div className="love_to_do_container_activity">
          Swimming{" "}
          <span>
            <FontAwesomeIcon icon={faPersonSwimming} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Jogging
          <span>
            <FontAwesomeIcon icon={faPersonRunning} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Animals
          <span>
            <FontAwesomeIcon icon={faCat} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Traveling{" "}
          <span>
            <FontAwesomeIcon icon={faPlane} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Family time{" "}
          <span>
            <FontAwesomeIcon icon={faPeopleRoof} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Learning new things
          <span>
            <FontAwesomeIcon icon={faGraduationCap} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Concerts{" "}
          <span>
            <FontAwesomeIcon icon={faMusic} />
          </span>
        </div>
        <div className="love_to_do_container_activity">
          Movies
          <span>
            <FontAwesomeIcon icon={faFilm} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoveToDo;

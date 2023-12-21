import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketballBall,
  faPersonSwimming,
  faPersonRunning,
  faFilm,
  faPlane,
  faPeopleRoof,
  faGraduationCap,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import Heading from "./Heading";

function LoveToDo() {

  const loveToDo = [
    { todo: "Basketball", icon: faBasketballBall },
    { todo: "Swimming", icon: faPersonSwimming },
    { todo: "Jogging", icon: faPersonRunning },
    { todo: "Traveling", icon: faPlane },
    { todo: "Family time", icon: faPeopleRoof },
    { todo: "Movies", icon: faFilm },
    { todo: "Learning new things", icon: faGraduationCap },
    { todo: "Concerts", icon: faMusic }
  ];
  return (
    <div className=" wrapper">
      <Heading text="Love to do" />
      <div className="love_to_do_container">
        {loveToDo.map((activity) => (
          <div className="love_to_do_container_activity">
            {activity.todo}
            <span>
              <FontAwesomeIcon icon={activity.icon} />
            </span>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoveToDo;

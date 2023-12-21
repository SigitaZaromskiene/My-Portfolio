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
    { id: 1, todo: "Basketball", icon: faBasketballBall },
    { id: 2, todo: "Swimming", icon: faPersonSwimming },
    { id: 3, todo: "Jogging", icon: faPersonRunning },
    { id: 4, todo: "Traveling", icon: faPlane },
    { id: 5, todo: "Family time", icon: faPeopleRoof },
    { id: 6, todo: "Movies", icon: faFilm },
    { id: 7, todo: "Learning new things", icon: faGraduationCap },
    { id: 8, todo: "Concerts", icon: faMusic },
  ];
  return (
    <div className=" wrapper">
      <Heading text="Love to do" />
      <div className="love_to_do_container">
        {loveToDo.map((activity) => (
          <div key={activity.id} className="love_to_do_container_activity">
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

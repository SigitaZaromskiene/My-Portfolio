import Btn from "./Btn";
import photo from "../UI/Img/me.jpg"
import { useContext } from "react";
import { Global } from "./Global";

function About() {

  const { sectionRef, scrollToSection} = useContext(Global);
  return (
    <>

    <div className="about_container wrapper" id="section2" ref={sectionRef}>
      <div className="about_container_left">
        <h3>
          I'm Sigita, and I love building cool stuff on the internet.
          I switched my career two years ago and taught myself coding. I also
          completed a 6-month course in Front End Development at the Baltic
          Institute of Technology. My main expertise is in JavaScript, and I
          enjoy using React to create awesome projects. I'm excited about any
          job opportunities that match my interests!{" "}
        </h3>
        <div className="about_container_left_buttons">
          <Btn className="btn btn_active" text="GET RESUME" />
          <Btn className="btn" text="CONTACT ME" action={scrollToSection}
            href="#section4"/>
        </div>
      </div>
      <img src={photo} alt="Sigita" />
    </div>
    </>
  );
}

export default About;

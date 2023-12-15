import { useContext } from "react";
import { Global } from "./Global";
import Heading from "./Heading";

function Contact() {

    const { sectionRef} = useContext(Global);
  return (
    <div className="contact_container wrapper" id="section4" ref={sectionRef}>
      <Heading text="Get in Touch" />
      <p>
        I'd love to connect and explore exciting opportunities with you!
        Wheather you have interesting projects, creative ideas, or just want to
        chat, please do not hesitate to reach me.{" "}
      </p>
      <div className="contact_container_links">
      <a
        href="https://www.linkedin.com/in/sigita-zaromskiene/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn_active" 
      >
        LINKEDIN
      </a>
      <a
        href="mailto:sigitapolekaite@yahoo.com" 
        target="_blank"
        rel="noopener noreferrer"
        className="btn" 
      >
        EMAIL
      </a>
      </div>
    </div>
  );
}

export default Contact;

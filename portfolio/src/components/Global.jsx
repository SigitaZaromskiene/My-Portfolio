import { createContext } from "react";
import { useRef } from "react";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const sectionRef = useRef(null);

  const scrollToSection = () => {
    sectionRef.current.scrollIntoView();
  };

  return (
    <Global.Provider value={{ sectionRef, scrollToSection }}>
      {children}
    </Global.Provider>
  );
};

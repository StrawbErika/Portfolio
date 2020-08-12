import React, { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactFooter } from "./Components/ContactFooter";
import { NavBar } from "./Components/NavBar";
function App() {
  // const [highlight, setHighlight] = useState(false);
  // const workRef = useRef(null);

  // useEffect(() => {
  //   document.addEventListener("scroll", handleNavBarChange);
  //   function handleNavBarChange() {
  //     const workRefTop = workRef.current.getBoundingClientRect().top;
  //     if (workRefTop < 57) {
  //       setHighlight(true);
  //     } else {
  //       setHighlight(false);
  //     }
  //   }
  //   return () => {
  //     document.removeEventListener("scroll", handleNavBarChange);
  //   };
  // }, []);
  return (
    <div className={styles.app}>
      <NavBar />
      {/* <NavBar HighlightNav={highlight} /> */}
      <WelcomePage />
      {/* <WorkPage WorkRef={workRef} /> */}
      <AboutPage />
      <ContactFooter />
    </div>
  );
}

export default App;

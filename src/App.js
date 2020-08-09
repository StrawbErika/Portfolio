import React, { useEffect, useRef } from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactFooter } from "./Components/ContactFooter";
import { NavBar } from "./Components/NavBar";
function App() {
  const navRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", handleNavBarChange);
    function handleNavBarChange() {
      // console.log(navRef.current);
    }
    return () => {
      document.removeEventListener("scroll", handleNavBarChange);
    };
  }, []);
  return (
    <div className={styles.app}>
      <NavBar NavRef={navRef} />
      <WelcomePage />
      <WorkPage />
      <AboutPage />
      <ContactFooter />
    </div>
  );
}

export default App;

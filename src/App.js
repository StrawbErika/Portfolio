import React, { useEffect, useRef, useState } from "react";
import styles from "./App.module.scss";
import { Helmet } from "react-helmet";

import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactFooter } from "./Components/ContactFooter";
import { NavBar } from "./Components/NavBar";
import welcome from "./Assets/Images/welcome.png";
function App() {
  const [highlight, setHighlight] = useState(false);
  const workRef = useRef(null);

  useEffect(() => {
    document.addEventListener("scroll", handleNavBarChange);
    function handleNavBarChange() {
      const workRefTop = workRef.current.getBoundingClientRect().top;
      if (workRefTop < 57) {
        setHighlight(true);
      } else {
        setHighlight(false);
      }
    }
    return () => {
      document.removeEventListener("scroll", handleNavBarChange);
    };
  }, []);
  return (
    <div className={styles.app}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Erika Nepomuceno's Resume website </title>
        <meta property="og:title" content="Erika Nepomuceno's Resume website" />

        <meta
          property="og:description"
          content="Hi, I'm Erika!
          A passionate individual who highly values hard work and honesty. A team player with strong communication skills, coming with a Bachelor of Science degree in Computer Science from the University of the Philippines, Los Banos."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={welcome} />
        <meta property="og:url" content="https://erikanepomuceno.netlify.app" />
        <meta property="og:image:width" content="1835" />
        <meta property="og:image:height" content="948" />
        <meta property="twitter:image" content={welcome} />
      </Helmet>

      <NavBar highlightNav={highlight} />
      <WelcomePage />
      <WorkPage workRef={workRef} />
      <AboutPage />
      <ContactFooter />
    </div>
  );
}

export default App;

import React from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";
import { AboutPage } from "./Pages/AboutPage";
import { ContactFooter } from "./Components/ContactFooter";
function App() {
  return (
    <div className={styles.app}>
      <WelcomePage />
      <WorkPage />
      <AboutPage />
      <ContactFooter />
    </div>
  );
}

export default App;

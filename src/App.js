import React from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";
import { AboutPage } from "./Pages/AboutPage";
function App() {
  return (
    <div className={styles.app}>
      <WelcomePage />
      <WorkPage />
      <AboutPage />
    </div>
  );
}

export default App;

import React from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";
import { WorkPage } from "./Pages/WorkPage";

function App() {
  return (
    <div className={styles.app}>
      <WelcomePage />
      <WorkPage />
    </div>
  );
}

export default App;

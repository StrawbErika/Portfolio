import React from "react";
import styles from "./App.module.scss";
import { WelcomePage } from "./Pages/WelcomePage";

function App() {
  return (
    <div className={styles.app}>
      <WelcomePage />
      <div className={styles.arrowDown}></div>
    </div>
  );
}

export default App;

import React from "react";
import styles from "./Style.module.scss";

export function WelcomePage() {
  return (
    <div>
      <div className={styles.navBar}>
        <p> Work</p>
        <p> Art</p>
        <p> About</p>
        <p> Contact</p>
      </div>

      <div className={styles.welcome}>
        <div className={styles.name}>
          <p> Erika Nepomuceno</p>
        </div>
      </div>
    </div>
  );
}

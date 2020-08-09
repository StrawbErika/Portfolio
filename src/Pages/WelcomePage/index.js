import React from "react";
import styles from "./style.module.scss";
import { MouseScroll } from "./../../Components/MouseScroll";

export function WelcomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        <div className={styles.navBar}>
          <a href="#works">
            <span>WORK</span>
          </a>

          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>

          {/* <p> ART</p> */}
        </div>

        <div className={styles.welcome}>
          <div className={styles.name}>
            <p className={styles.title}> ERIKA LOUISE NEPOMUCENO</p>
            <hr></hr>
            <p> ARTIST && DEVELOPER </p>
          </div>
        </div>
        <MouseScroll />
      </div>
      <div className={styles.arrowDown}></div>
    </div>
  );
}

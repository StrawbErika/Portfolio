import React from "react";
import styles from "./style.module.scss";
import { MouseScroll } from "./../../Components/MouseScroll";
import { yieldExpression } from "@babel/types";

export function WelcomePage() {
  return (
    <div className={styles.page}>
      <div className={styles.pageContent}>
        <div className={styles.navBar}>
          <p> WORK</p>
          {/* <p> ART</p> */}
          <p> ABOUT</p>
          <p> CONTACT</p>
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

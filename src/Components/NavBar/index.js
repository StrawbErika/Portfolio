import React from "react";
import styles from "./style.module.scss";

export function NavBar({ HighlightNav }) {
  return (
    // <div className={styles.navBar} ref={NavRef}>
    // <div className={styles.} ref={NavRef}>
    // <div className={Style} ref={NavRef}>
    <div
      className={`${styles.navBar} ${HighlightNav ? styles.coloredNavBar : ""}`}
    >
      <div className={styles.linkContainer}>
        <a href="#works">
          <span>WORK</span>
        </a>

        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </div>

      {/* <p> ART</p> */}
    </div>
  );
}

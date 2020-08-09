import React from "react";
import styles from "./style.module.scss";

export function NavBar({ NavRef }) {
  return (
    <div className={styles.navBar} ref={NavRef}>
      <a href="#works">
        <span>WORK</span>
      </a>

      <a href="#about">ABOUT</a>
      <a href="#contact">CONTACT</a>

      {/* <p> ART</p> */}
    </div>
  );
}

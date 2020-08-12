import React from "react";
import styles from "./style.module.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "react-use";

export function NavBar({ HighlightNav }) {
  const { width } = useWindowSize();
  function openHamburger() {
    console.log("blegh");
    // return <div className={style.}>

    // </div>;
  }
  if (width < 1380)
    return (
      <div
        className={`${styles.hamburger} ${
          HighlightNav ? styles.coloredNavBar : ""
        }`}
      >
        <div className={styles.linkContainer}>
          <GiHamburgerMenu
            onClick={() => {
              openHamburger();
            }}
          />
        </div>
      </div>
    );
  else
    return (
      <div
        className={`${styles.navBar} ${
          HighlightNav ? styles.coloredNavBar : ""
        }`}
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

import React, { useState } from "react";
import styles from "./style.module.scss";
import { SideBar } from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "react-use";
import whiteLogo from "./../../Assets/Images/whiteLogo.png";

export function NavBar({ highlightNav }) {
  const [isOpen, setIsOpen] = useState(false);
  function closeSideBar() {
    setIsOpen(false);
  }
  const { width } = useWindowSize();
  if (width < 1300)
    return (
      <div
        className={`${styles.hamburger} ${
          highlightNav ? styles.coloredHamburger : ""
        }`}
      >
        <div className={styles.logoContainer}>
          <a href="#welcome">
            <img src={whiteLogo} alt="logo" />
          </a>
        </div>

        <div className={styles.linkContainer}>
          <GiHamburgerMenu
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <div>
            <SideBar isOpen={isOpen} onClose={closeSideBar} />
          </div>
        </div>
      </div>
    );
  else
    return (
      <div
        className={`${styles.navBar} ${
          highlightNav ? styles.coloredNavBar : ""
        }`}
      >
        <div className={styles.logoContainer}>
          <a href="#welcome">
            <img src={whiteLogo} alt="logo" />
          </a>
        </div>
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

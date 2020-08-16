import React, { useState } from "react";
import styles from "./style.module.scss";
import { SideBar } from "./SideBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useWindowSize } from "react-use";

export function NavBar({ HighlightNav }) {
  const [isOpen, setIsOpen] = useState(false);

  function closeSideBar() {
    setIsOpen(false);
  }
  const { width } = useWindowSize();
  if (width < 1380)
    return (
      <div
        className={`${styles.hamburger} ${
          HighlightNav && !isOpen ? styles.coloredHamburger : ""
        }`}
      >
        <div className={styles.linkContainer}>
          <GiHamburgerMenu
            onClick={() => {
              setIsOpen(true);
            }}
          />
          <div>
            {isOpen && <SideBar IsOpen={isOpen} IsClose={closeSideBar} />}
          </div>
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

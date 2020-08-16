import React from "react";
import styles from "./style.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function SideBar({ IsOpen, IsClose }) {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>
        <div className={styles.closeButton}>
          <AiOutlineCloseCircle onClick={IsClose} />
        </div>
        <div className={styles.titleHr}>
          <hr></hr>
        </div>
        <div className={styles.linkContainer}>
          <a href="#works" onClick={IsClose}>
            WORK
          </a>
          <a href="#about" onClick={IsClose}>
            ABOUT
          </a>
          <a href="#contact" onClick={IsClose}>
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
}

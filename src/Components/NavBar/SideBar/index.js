import React from "react";
import styles from "./style.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function SideBar({ IsOpen, OnClose }) {
  return (
    <div className={styles.sideBarContainer}>
      <div
        className={
          IsOpen ? styles.sideBar : `${styles.sideBar} ${styles.sideBarClosed}`
        }
      >
        <div className={styles.closeButton}>
          <AiOutlineCloseCircle onClick={OnClose} />
        </div>
        <div className={styles.titleHr}>
          <p> Artist && Developer</p>
          <hr></hr>
          <div className={styles.linkContainer}>
            <a href="#works" onClick={OnClose}>
              WORK
            </a>
            <a href="#about" onClick={OnClose}>
              ABOUT
            </a>
            <a href="#contact" onClick={OnClose}>
              CONTACT
            </a>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

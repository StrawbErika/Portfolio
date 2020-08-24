import React from "react";
import styles from "./style.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function SideBar({ isOpen, onClose }) {
  return (
    <div className={styles.sideBarContainer}>
      <div
        className={
          isOpen ? styles.sideBar : `${styles.sideBar} ${styles.sideBarClosed}`
        }
      >
        <div className={styles.closeButton}>
          <AiOutlineCloseCircle onClick={onClose} />
        </div>
        <div className={styles.titleHr}>
          <p> Artist && Developer</p>
          <hr></hr>
          <div className={styles.linkContainer}>
            <a href="#works" onClick={onClose}>
              WORK
            </a>
            <a href="#about" onClick={onClose}>
              ABOUT
            </a>
            <a href="#contact" onClick={onClose}>
              CONTACT
            </a>
          </div>
          <hr></hr>
        </div>
      </div>
    </div>
  );
}

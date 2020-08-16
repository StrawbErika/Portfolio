import React from "react";
import styles from "./style.module.scss";
import { AiOutlineCloseCircle } from "react-icons/ai";
export function SideBar({ IsOpen, IsClose }) {
  return (
    <div className={styles.sideBarContainer}>
      <div className={styles.sideBar}>
        <AiOutlineCloseCircle
          className={styles.closeButton}
          onClick={IsClose}
        />
      </div>
    </div>
  );
}

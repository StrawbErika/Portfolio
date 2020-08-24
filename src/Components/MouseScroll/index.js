import React from "react";
import styles from "./style.module.scss";

export function MouseScroll() {
  return (
    <div className={styles.container}>
      <div className={styles.mouseScroll}>
        <a href="#works">
          <span></span>
        </a>
      </div>
    </div>
  );
}

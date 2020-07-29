import React from "react";
import styles from "./style.module.scss";

export function ProgressBar({ length }) {
  return (
    <div className={styles.progressBar}>
      <div className={styles.bar}>
        <div className={styles.progress} style={{ width: length }}></div>
      </div>
    </div>
  );
}

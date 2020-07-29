import React from "react";
import styles from "./style.module.scss";
import { ProgressBar } from "./../../../Components/ProgressBar";
export function Sining() {
  return (
    <div>
      <div className={styles.workCount}>
        <p> WORK </p>
        <ProgressBar length={"25%"} />
      </div>
    </div>
  );
}

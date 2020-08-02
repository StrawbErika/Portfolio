import React from "react";
import { ProgressBar } from "../ProgressBar";
import styles from "./style.module.scss";
export function ProjectText({ ListOfDetails }) {
  return (
    <div className={styles.leftSide}>
      <div className={styles.workCount}>
        <p> WORK </p>
        <ProgressBar length={ListOfDetails.Percent} />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.textContainer}>
          <div className={styles.number}> {ListOfDetails.Count} </div>
          <div className={styles.titleDescription}>
            <div className={styles.title}> {ListOfDetails.Title} </div>
            <div className={styles.techStack}> {ListOfDetails.TechStack}</div>
            <div className={styles.description}>
              {ListOfDetails.Description}
            </div>
          </div>
        </div>
        <a href={ListOfDetails.Repository}>
          <div className={styles.button}>Visit the repository here!</div>
        </a>
      </div>
    </div>
  );
}

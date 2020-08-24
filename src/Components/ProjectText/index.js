import React from "react";
import { ProgressBar } from "../ProgressBar";
import styles from "./style.module.scss";
export function ProjectText({ listOfDetails }) {
  return (
    <div className={styles.leftSide}>
      <div className={styles.leftContent}>
        <div className={styles.workCount}>
          <p> WORK </p>
          <ProgressBar length={listOfDetails.Percent} />
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.textContainer}>
            <div className={styles.number}> {listOfDetails.Count} </div>
            <div className={styles.titleDescription}>
              <div className={styles.title}> {listOfDetails.Title} </div>
              {listOfDetails.Subtitle ? (
                <div className={styles.subtitle}>
                  {" "}
                  {listOfDetails.Subtitle}{" "}
                </div>
              ) : null}

              <div className={styles.techStack}> {listOfDetails.TechStack}</div>
              <div className={styles.description}>
                {listOfDetails.Description}
              </div>
            </div>
          </div>
          <a href={listOfDetails.Repository}>
            <div className={styles.button}>Visit the repository here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}

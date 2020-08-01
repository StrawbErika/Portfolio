import React from "react";
import styles from "./style.module.scss";
import { ProgressBar } from "../../../Components/ProgressBar";
export function Project({
  Title,
  Description,
  TechStack,
  Picture,
  Count,
  Percent,
  PageId
}) {
  return (
    <div id={PageId} className={styles.project}>
      <div className={styles.pictureContainer}>
        <div className={styles.vl}>
          <div className={styles.circleTop}> </div>
          <div className={styles.picture}>
            <img
              src={Picture}
              style={{
                backgroundImage: `url(${Picture})`
              }}
              alt="Logo"
            />
          </div>
          <div className={styles.bottomShadow}></div>
          <div className={styles.circleBottom}></div>
        </div>
      </div>
      <div className={styles.workCount}>
        <p> WORK </p>
        <ProgressBar length={Percent} />
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.textContainer}>
          <div className={styles.number}> {Count} </div>
          <div className={styles.titleDescription}>
            <div className={styles.title}> {Title} </div>
            <div className={styles.techStack}> {TechStack}</div>
            <div className={styles.description}>{Description}</div>
          </div>
        </div>
        <div className={styles.button}>Visit the repository here!</div>
      </div>
    </div>
  );
}

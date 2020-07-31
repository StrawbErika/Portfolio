import React from "react";
import styles from "./style.module.scss";
import { ProgressBar } from "../../../Components/ProgressBar";
export function Project({
  Title,
  Description,
  Picture,
  Count,
  Percent,
  Height,
  Width
}) {
  console.log(Percent);
  console.log(Height);
  console.log(Width);
  return (
    <div className={styles.project}>
      <div className={styles.pictureContainer}>
        <div className={styles.vl}>
          <div className={styles.circleTop}> </div>
          <div
            className={styles.picture}
            styles={{ height: Height / 100, width: Width / 100 }}
          >
            <img
              src={Picture}
              style={{
                backgroundImage: `url(${Picture})`
              }}
              alt="Logo"
            />
          </div>
          <div
            className={styles.bottomShadow}
            // styles={{ height: Height, width: Width }}
          ></div>
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
            <div className={styles.description}>{Description}</div>
          </div>
        </div>
        <div className={styles.button}>Visit the repository here!</div>
      </div>
    </div>
  );
}

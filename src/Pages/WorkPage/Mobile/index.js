import React from "react";
import styles from "./style.module.scss";
import { ProgressBar } from "./../../../Components/ProgressBar";
export function Mobile({ ListOfDetails }) {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.workCount}>
        <p> WORK </p>
        <ProgressBar length={ListOfDetails.Percent} />
      </div>
      <div className={styles.content}>
        <div className={styles.pictureContainer}>
          <img
            src={ListOfDetails.Picture}
            style={{
              backgroundImage: `url(${ListOfDetails.Picture})`
            }}
            alt="Logo"
          />
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.textContainer}>
            <p className={styles.number}>{ListOfDetails.Count}</p>
            <div className={styles.titleDesc}>
              <p className={styles.title}>{ListOfDetails.Title}</p>
              {ListOfDetails.Subtitle ? (
                <p className={styles.subtitle}> {ListOfDetails.Subtitle} </p>
              ) : null}
              <p className={styles.techStack}>{ListOfDetails.TechStack}</p>
              <p>{ListOfDetails.Description}</p>
            </div>
          </div>
          <a href={ListOfDetails.Repository}>
            <div className={styles.button}>Visit the repository here!</div>
          </a>
        </div>
      </div>
    </div>
  );
}

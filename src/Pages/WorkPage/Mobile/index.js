import React from "react";
import styles from "./style.module.scss";
export function Mobile({ listOfDetails, buttonRef }) {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.content}>
        <div className={styles.pictureContainer}>
          <img
            src={listOfDetails.Picture}
            style={{
              backgroundImage: `url(${listOfDetails.Picture})`
            }}
            alt="Logo"
          />
        </div>
        <div className={styles.middleContainer}>
          <div className={styles.textContainer}>
            <p className={styles.number}>{listOfDetails.Count}</p>
            <div className={styles.titleDesc}>
              <p className={styles.title}>{listOfDetails.Title}</p>
              {listOfDetails.Subtitle ? (
                <p className={styles.subtitle}> {listOfDetails.Subtitle} </p>
              ) : null}
              <p className={styles.techStack}>{listOfDetails.TechStack}</p>
              <p className={styles.description}>{listOfDetails.Description}</p>
            </div>
          </div>
          <a href={listOfDetails.Repository}>
            <div className={styles.button} ref={buttonRef}>
              Visit the repository here!
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

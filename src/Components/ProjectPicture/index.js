import React from "react";
import styles from "./style.module.scss";

export function ProjectPicture({ listOfDetails, imageRef }) {
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.vl}>
        <div className={styles.circleTop}> </div>
        <div className={styles.picture}>
          <img
            src={listOfDetails.Picture}
            style={{
              backgroundImage: `url(${listOfDetails.Picture})`,
              width: `calc(${listOfDetails.Width} * ${listOfDetails.Ratio})`
            }}
            ref={imageRef}
            alt="Logo"
          />
        </div>
        <div className={styles.circleBottom}></div>
      </div>
    </div>
  );
}

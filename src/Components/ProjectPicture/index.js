import React from "react";
import styles from "./style.module.scss";

export function ProjectPicture({ ListOfDetails, ImageRef }) {
  return (
    <div className={styles.pictureContainer}>
      <div className={styles.vl}>
        <div className={styles.circleTop}> </div>
        <div className={styles.picture}>
          <img
            src={ListOfDetails.Picture}
            style={{
              backgroundImage: `url(${ListOfDetails.Picture})`
            }}
            ref={ImageRef}
            alt="Logo"
          />
        </div>
        <div className={styles.bottomShadow}></div>
        <div className={styles.circleBottom}></div>
      </div>
    </div>
  );
}

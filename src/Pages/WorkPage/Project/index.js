import React from "react";
import styles from "./style.module.scss";
import { ProjectText } from "../../../Components/ProjectText";
import { ProjectPicture } from "../../../Components/ProjectPicture";
export function Project({ ListOfDetails }) {
  return (
    <div className={styles.project}>
      <div className={styles.perProject}>
        <ProjectText ListOfDetails={ListOfDetails[0]} />
        <ProjectPicture ListOfDetails={ListOfDetails[0]} />
      </div>
      <div className={styles.perProject}>
        <ProjectText ListOfDetails={ListOfDetails[1]} />
        <ProjectPicture ListOfDetails={ListOfDetails[1]} />
      </div>

      <div className={styles.perProject}>
        <ProjectText ListOfDetails={ListOfDetails[2]} />
        <ProjectPicture ListOfDetails={ListOfDetails[2]} />
      </div>

      {/* <div className={styles.perProject}>
        <ProjectText ListOfDetails={ListOfDetails[3]} />
        <ProjectPicture ListOfDetails={ListOfDetails[3]} />
      </div> */}
    </div>
  );
}

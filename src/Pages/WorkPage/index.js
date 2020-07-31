import React from "react";
import styles from "./style.module.scss";
import { Project } from "./Project";
import project1 from "./../../Assets/Images/minkSquare.jpg";

export function WorkPage() {
  return (
    <div className={styles.work}>
      <Project
        Title={"SINING"}
        Description={"stupid SP lmao"}
        Count={"01"}
        Percent={"25%"}
        Picture={project1}
      />
      <Project
        Title={"not"}
        Description={"stupid not lmao"}
        Count={"02"}
        Percent={"50%"}
        Picture={project1}
        PageId={"works"}
      />
    </div>
  );
}

import React from "react";
import styles from "./style.module.scss";
import { Project } from "./Project";
import project1 from "./../../Assets/Images/minkSquare.jpg";

export function WorkPage() {
  return (
    // id="works"
    <div className={styles.work}>
      {/* <div id="works" className={styles.work}> */}
      <Project
        Title={"SINING"}
        Description={" an ok SP lmao"}
        Count={"01"}
        Percent={"25%"}
        Picture={project1}
        PageId={"works"}
      />
      <Project
        Title={"not"}
        Description={"stupid not lmao"}
        Count={"02"}
        Percent={"50%"}
        Picture={project1}
        // PageId={"works"}
      />
      <Project
        Title={"not"}
        Description={"stupid not lmao"}
        Count={"03"}
        Percent={"75%"}
        Picture={project1}
        // style={{ zIndex: -2 }}
        // PageId={"works"}
      />

      <Project
        Title={"not"}
        Description={"stupid not lmao"}
        Count={"04"}
        Percent={"100%"}
        Picture={project1}
        // style={{ zIndex: -1 }}
        // PageId={"works"}
      />
    </div>
  );
}

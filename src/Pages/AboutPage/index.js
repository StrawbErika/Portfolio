import React from "react";
import styles from "./style.module.scss";

export function AboutPage() {
  return (
    <div className={styles.about} id="works">
      <div className={styles.title}>
        <p>ABOUT</p>
        <div className={styles.hr}>
          <hr></hr>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.firstColumn}>
          <div className={styles.introduction}>
            <p className={styles.title}> Hi, I'm Erika!</p>
            <div className={styles.description}>
              I'm a graduate of the University of the Philippines, Los Banos,
              majoring in BS Computer Science. more abt me{" "}
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.title}>
            <p>Work Experience</p>
            <div className={styles.list}>
              <p>
                {" "}
                Software Developer: Futurity Learning (Gatsby, JavaScript, SCSS,
                Firebase) Intern: Stratpoint Technologies INC. (Python,
                JavaScript, Ant Design, Firebase
              </p>
            </div>
          </div>
          <div className={styles.title}>
            <p>Extracurricular Activities</p>
            <div className={styles.list}>
              <p>
                {" "}
                Chief Executive Officer (YSES Executive Department AY 2019-2020)
                Visuals and Logistics Department Head (YSES Executive Department
                AY 2018-2019) Visuals Committee Head (YSES Practicum Fair/Job
                Fair) Overall Activity Head (Quiz Contest in Coordination with
                the Institute of Computer Science UPLB
              </p>
            </div>
          </div>
          <div>Download the resume here</div>
        </div>
      </div>
    </div>
  );
}

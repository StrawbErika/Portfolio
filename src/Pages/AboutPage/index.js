import React from "react";
import styles from "./style.module.scss";

export function AboutPage() {
  return (
    <div className={styles.about} id="about">
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
              A passionate individual who highly values hard work and honesty. A
              team player with strong communication skills, coming with a
              Bachelor of Science degree in Computer Science from the University
              of the Philippines, Los Banos.
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <div className={styles.title}>
            <p>Work Experience</p>
            <div className={styles.list}>
              <p>Software Developer - Futurity Learning</p>
              <p className={styles.subtitle}>
                Gatsby, JavaScript, SCSS, Firebase
              </p>
              <p>Intern - Stratpoint Technologies INC.</p>
              <p className={styles.subtitle}>
                Python, JavaScript, Ant Design, Firebase
              </p>
            </div>
          </div>
          <div className={styles.title}>
            <p>Extracurricular Activities</p>
            <div className={styles.list}>
              <p>Chief Executive Officer</p>
              <p className={styles.subtitle}>
                YSES Executive Department AY 2019-2020
              </p>
              <p> Visuals and Logistics Department Head</p>
              <p className={styles.subtitle}>
                YSES Executive Department AY 2018-2019
              </p>
              <p> Visuals Committee Head </p>
              <p className={styles.subtitle}>YSES Practicum Fair/Job Fair</p>
              <p>Overall Activity Head</p>
              <p className={styles.subtitle}>
                Quiz Contest in Coordination with the Institute of Computer
                Science UPLB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

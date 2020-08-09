import React from "react";
import styles from "./style.module.scss";
import resume from "./../../Assets/Nepomuceno.pdf";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFile
} from "react-icons/ai";

export function ContactFooter() {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.title}>
        <p>Say hi!</p>
        <div className={styles.hr}>
          <hr></hr>
        </div>
        <div className={styles.iconContainer}>
          <div className={styles.icon}>
            <AiFillInstagram />
          </div>

          <div className={styles.icon}>
            <AiFillGithub />
          </div>
          <div className={styles.icon}>
            <AiFillLinkedin />
          </div>
        </div>
      </div>
      <a href="mailto: erika.nepomuceno392@gmail.com">
        <div className={styles.contactButton}>
          <span>Contact me</span>
        </div>
      </a>
      <div className={styles.resume}>
        <a href={resume} download="Nepomuceno.pdf">
          <AiFillFile className={styles.fill} />
        </a>
        <p>Nepomuceno.pdf</p>
      </div>
    </div>
  );
}

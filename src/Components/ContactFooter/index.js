import React from "react";
import styles from "./style.module.scss";
import resume from "./../../Assets/Nepomuceno.pdf";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFile,
  AiOutlineFile
} from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";

export function ContactFooter() {
  return (
    <div className={styles.contact}>
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
      <div className={styles.email}>
        <a
          href="mailto: erika.nepomuceno392@gmail.com"
          target="_blank"
          className={styles.contactButton}
        >
          Contact me
          <span>erika.nepomuceno392@gmail.com</span>
        </a>
        {/* <div className={styles.contactButton}>
          <a href="mailto: erika.nepomuceno392@gmail.com">Contact me</a>
          <span>erika.nepomuceno392@gmail.com</span>
        </div> */}
      </div>
      <div className={styles.resume}>
        <a href={resume} download="Nepomuceno.pdf">
          <AiFillFile className={styles.fill} />
        </a>
        <p>Nepomuceno.pdf</p>
      </div>
    </div>
  );
}

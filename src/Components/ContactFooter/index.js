import React from "react";
import styles from "./style.module.scss";
import resume from "./../../Assets/NepomucenoResume.pdf";
import {
  AiFillInstagram,
  AiFillGithub,
  AiFillLinkedin,
  AiFillFile,
  AiOutlineMail,
  AiOutlineDownload
} from "react-icons/ai";
import { useWindowSize } from "react-use";

export function ContactFooter() {
  const { width } = useWindowSize();
  if (width < 450) {
    return (
      <div className={styles.contact} id="contact">
        <div className={styles.title}>
          <p>Say hi!</p>
          <div className={styles.hr}>
            <hr></hr>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <a href="https://github.com/StrawbErika">
                <AiFillGithub />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/eanepomuceno-392/">
                <AiFillLinkedin />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://instagram.com/strawberika07">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.contactResume}>
          <div className={styles.buttonContainer}>
            <a href="mailto: erika.nepomuceno392@gmail.com">
              <AiOutlineMail className={styles.mailButton} />
            </a>
            <p> Contact me</p>
          </div>
          <div className={styles.resumeContainer}>
            <div className={styles.resume}>
              <a href={resume} download="NepomucenoResume.pdf">
                <AiOutlineDownload className={styles.fill} />
              </a>
              <p>Download resume here</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.contact} id="contact">
        <div className={styles.title}>
          <p>Say hi!</p>
          <div className={styles.hr}>
            <hr></hr>
          </div>
          <div className={styles.iconContainer}>
            <div className={styles.icon}>
              <a href="https://github.com/StrawbErika">
                <AiFillGithub />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://www.linkedin.com/in/eanepomuceno-392/">
                <AiFillLinkedin />
              </a>
            </div>
            <div className={styles.icon}>
              <a href="https://instagram.com/strawberika07">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a href="mailto: erika.nepomuceno392@gmail.com">
            <div className={styles.contactButton}>
              <span>Contact me</span>
            </div>
          </a>
        </div>
        <div className={styles.resumeContainer}>
          <div className={styles.resume}>
            <a href={resume} download="NepomucenoResume.pdf">
              <AiFillFile className={styles.fill} />
            </a>
            <p>NepomucenoResume.pdf</p>
          </div>
        </div>
      </div>
    );
  }
}

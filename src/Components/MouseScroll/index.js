import React from "react";
import styles from "./style.module.scss";
import * as Scroll from "react-scroll";
import { Link, animateScroll as scroll } from "react-scroll";

export function MouseScroll() {
  //   let Link = Scroll.Link;

  return (
    <div className={styles.container}>
      <div className={styles.mouseScroll}>
        <a href="#works">
          <span></span>
        </a>
      </div>
    </div>
  );
}

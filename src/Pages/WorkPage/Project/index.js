import React from "react";
import styles from "./style.module.scss";
import { ProjectText } from "../../../Components/ProjectText";
import { ProjectPicture } from "../../../Components/ProjectPicture";
export function Project({ ListOfDetails }) {
  let nameDisplayDiv = document.getElementById("works");
  let containerDiv = document.getElementById("container");

  function refresh() {
    let scrollTop = containerDiv.scrollTop + containerDiv.clientHeight / 2;
    let height = 0;
    for (let child of containerDiv.children) {
      let top = height;
      let bottom = (height += child.clientHeight);
      if (top < scrollTop && bottom > scrollTop) {
        nameDisplayDiv.innerHTML = "bleu";
        break;
      }
    }
  }

  // containerDiv.onscroll = refresh;

  // refresh();

  return (
    <div className={styles.project}>
      <div className={styles.perProject} id="works">
        <ProjectText ListOfDetails={ListOfDetails[0]} />

        {/* @TODO: make this CSS modules for consistency */}
        <div id="container" className="projectPicsContainer">
          <ProjectPicture ListOfDetails={ListOfDetails[0]} />
          <ProjectPicture ListOfDetails={ListOfDetails[1]} />
          <ProjectPicture ListOfDetails={ListOfDetails[2]} />
          {/* <ProjectPicture ListOfDetails={ListOfDetails[3]} /> */}
        </div>
      </div>
    </div>
  );
}

// your layout should be like this, not just visually but also how it's laid out in html

/*
    div    div
  +------+------+
  \      \ PIC  \
  \ TEXT \      \
  \      \ PIC  \
  \      \      \
  \      \ PIC  \
  \      \      \
  \      \ PIC  \
  \      \      \  
  +------+------+
*/

// for comparison, here's what it looks like right now

/*
     div    div
  +------+------+
  \      \      \
  \ TEXT \ PIC  \
  \      \      \
  \------\------\
  \      \      \
  \ TEXT \ PIC  \
  \      \      \
  \------\------\
  \      \      \
  \ TEXT \ PIC  \
  \      \      \
  \------\------\
  \      \      \
  \ TEXT \ PIC  \
  \      \      \
  +------+------+
*/

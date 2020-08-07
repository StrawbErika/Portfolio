import React, { useState } from "react";
import styles from "./style.module.scss";
import { ProjectText } from "../../../Components/ProjectText";
import { ProjectPicture } from "../../../Components/ProjectPicture";
import { InView } from "react-intersection-observer";

export function Project({ ListOfDetails }) {
  const [textCount, setTextCount] = useState(0);
  function handleScrollChange(count) {
    console.log("CURRENT TEXTCOUNT: ", textCount);
    console.log("INCOMING COUNT: ", count);
    setTextCount(count);
  }
  return (
    <div className={styles.project}>
      <div className={styles.perProject}>
        <ProjectText ListOfDetails={ListOfDetails[textCount]} />

        <div id="container" className="projectPicsContainer">
          <InView as="div" onChange={() => handleScrollChange(0)}>
            <ProjectPicture ListOfDetails={ListOfDetails[0]} />
          </InView>

          <InView as="div" onChange={() => handleScrollChange(1)}>
            <ProjectPicture ListOfDetails={ListOfDetails[1]} />
          </InView>
          <InView as="div" onChange={() => handleScrollChange(2)}>
            <ProjectPicture ListOfDetails={ListOfDetails[2]} />
          </InView>
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

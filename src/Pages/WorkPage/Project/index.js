import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { ProjectText } from "../../../Components/ProjectText";
import { ProjectPicture } from "../../../Components/ProjectPicture";
export function Project({ ListOfDetails }) {
  const [textCount, setTextCount] = useState(0);

  const imageRef0 = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);

  function detectImage() {
    const halfImage = imageRef0.current.getBoundingClientRect().height / 2;
    const half = window.innerHeight / 2 + halfImage;
    const ref0Top = imageRef0.current.getBoundingClientRect().top;
    const ref1Top = imageRef1.current.getBoundingClientRect().top;
    const ref2Top = imageRef2.current.getBoundingClientRect().top;
    const top = 0;
    if (top < ref0Top && ref0Top < half) {
      setTextCount(0);
    }
    if (top < ref1Top && ref1Top < half) {
      setTextCount(1);
    }
    if (top < ref2Top && ref2Top < half) {
      setTextCount(2);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScrollChange);
    function handleScrollChange() {
      detectImage();
    }
    return () => {
      document.removeEventListener("scroll", handleScrollChange);
    };
  }, [textCount]);

  return (
    <div className={styles.project}>
      <div className={styles.perProject} id="works">
        {/* <ProjectText ListOfDetails={ListOfDetails[0]} /> */}
        <ProjectText ListOfDetails={ListOfDetails[textCount]} />
        <div id="container" className="projectPicsContainer">
          <ProjectPicture
            ListOfDetails={ListOfDetails[0]}
            ImageRef={imageRef0}
          />
          <ProjectPicture
            ListOfDetails={ListOfDetails[1]}
            ImageRef={imageRef1}
          />
          <ProjectPicture
            ListOfDetails={ListOfDetails[2]}
            ImageRef={imageRef2}
          />
        </div>
      </div>
    </div>
  );
}
// hello!

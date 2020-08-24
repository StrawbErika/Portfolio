import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { ProjectText } from "../../../Components/ProjectText";
import { ProjectPicture } from "../../../Components/ProjectPicture";

export function Project({ listOfDetails }) {
  const [textCount, setTextCount] = useState(0);

  const imageRef0 = useRef(null);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);

  function detectImage() {
    const halfImage = imageRef0.current.getBoundingClientRect().height / 2;
    const half = window.innerHeight / 2 + halfImage;
    const ref0Top = imageRef0.current.getBoundingClientRect().top;
    const ref1Top = imageRef1.current.getBoundingClientRect().top;
    const ref2Top = imageRef2.current.getBoundingClientRect().top;
    const ref3Top = imageRef3.current.getBoundingClientRect().top;
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
    if (top < ref3Top && ref3Top < half) {
      setTextCount(3);
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
        <ProjectText listOfDetails={listOfDetails[textCount]} />
        <div id="container" className={styles.projectPicsContainer}>
          <ProjectPicture
            listOfDetails={listOfDetails[0]}
            imageRef={imageRef0}
          />
          <ProjectPicture
            listOfDetails={listOfDetails[1]}
            imageRef={imageRef1}
          />
          <ProjectPicture
            listOfDetails={listOfDetails[2]}
            imageRef={imageRef2}
          />
          <ProjectPicture
            listOfDetails={listOfDetails[3]}
            imageRef={imageRef3}
          />
        </div>
      </div>
    </div>
  );
}
// hello!

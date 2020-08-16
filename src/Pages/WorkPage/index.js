import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { Mobile } from "./Mobile";
import { Project } from "./Project";
import { ProgressBar } from "./../../Components/ProgressBar";
import { useWindowSize } from "react-use";
import project1 from "./../../Assets/Images/minkSquare.jpg";
import project2 from "./../../Assets/Images/minkTol.jpg";
import project3 from "./../../Assets/Images/minkWide.jpg";

export function WorkPage({ WorkRef }) {
  const { width } = useWindowSize();
  const Percent = ["33.3333333333%", "66.6666666666%", "100%"];
  const Details = [
    {
      Title: "SINING",
      Description:
        " Created a mobile application for recognizing paint styles of famous Filipino artists using Convolutional Neural Networks",
      TechStack: "React Native, OpenCV, Python, Tensorflow",
      Count: "01",
      Percent: "33.3333333333%",
      Picture: project1,
      Repository: "https://github.com/StrawbErika/SINING"
    },
    {
      Title: "SOKOBAN",
      Subtitle: "GAME & SOLVER",
      Description:
        "Programmed a game modeled  after Sokoban, with an Artificial Intelligence that is able to solve the board, and show the solution.",
      TechStack: "Java",
      Count: "02",
      Percent: "66.6666666666%",
      Picture: project2,
      Repository: "https://github.com/StrawbErika/Sokoban-Maze-Solver"
    },
    {
      Title: "WORDSCAPE",
      Subtitle: "SOLVER",
      Description:
        "Developed a Wordscape Solver application with Backtracking algorithm.",
      TechStack: "ElectronJS, JavaScript, HTML5, CSS",
      Count: "03",
      Percent: "100%",
      Picture: project3,
      Repository: "https://github.com/StrawbErika/Wordscape-Solver"
    }
    // {
    //   Title: "not",
    //   Description: "an ok lmao",
    //   Count: "03",
    //   Percent: "75%",
    //   Picture: project1
    // }
  ];

  const [percent, setPercent] = useState(0);
  const workCount = useRef(null);
  const buttonRef0 = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);

  function detectImage() {
    // const halfImage = / 2;
    // const half = window.innerHeight / 2 + halfImage;
    const top = workCount.current.getBoundingClientRect().bottom;
    const ref0Top = buttonRef0.current.getBoundingClientRect().bottom;
    const ref1Top = buttonRef1.current.getBoundingClientRect().bottom;
    const ref2Top = buttonRef2.current.getBoundingClientRect().bottom;
    const bottom = window.innerHeight;

    if (top < ref0Top && ref0Top < bottom) {
      setPercent(0);
    }
    if (top < ref1Top && ref1Top < bottom) {
      setPercent(1);
    }
    if (top < ref2Top && ref2Top < bottom) {
      setPercent(2);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScrollChange);
    function handleScrollChange() {
      if (workCount.current !== null) {
        detectImage();
      }
    }
    return () => {
      document.removeEventListener("scroll", handleScrollChange);
    };
  }, [percent]);
  if (width < 950)
    return (
      <div className={styles.work} ref={WorkRef} id="works">
        <div className={styles.workCount} ref={workCount}>
          <p> WORK </p>
          <div className={styles.progressBar}>
            <ProgressBar length={Percent[percent]} />
          </div>
        </div>

        <Mobile ListOfDetails={Details[0]} ButtonRef={buttonRef0} />
        <Mobile ListOfDetails={Details[1]} ButtonRef={buttonRef1} />
        <Mobile ListOfDetails={Details[2]} ButtonRef={buttonRef2} />
      </div>
    );
  else
    return (
      <div className={styles.work} ref={WorkRef}>
        <Project ListOfDetails={Details} />
      </div>
    );
}

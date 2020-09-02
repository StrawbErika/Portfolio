import React, { useState, useRef, useEffect } from "react";
import styles from "./style.module.scss";
import { Mobile } from "./Mobile";
import { Project } from "./Project";
import { useWindowSize } from "react-use";
import sining from "./../../Assets/Images/sining.png";
import sokoban from "./../../Assets/Images/sokoban.png";
import wordscape from "./../../Assets/Images/wordscape.png";
import resume from "./../../Assets/Images/resume.png";

export function WorkPage({ workRef }) {
  const { width } = useWindowSize();
  const details = [
    {
      Title: "SINING",
      Description:
        " Created a mobile application for recognizing paint styles of famous Filipino artists using Convolutional Neural Networks",
      TechStack: "React Native, OpenCV, Python, Tensorflow",
      Count: "01",
      Percent: "25%",
      Picture: sining,
      Width: "459px",
      Ratio: "0.7",
      Repository: "https://github.com/StrawbErika/SINING",
    },
    {
      Title: "SOKOBAN",
      Subtitle: "GAME & SOLVER",
      Description:
        "Programmed a game modeled  after Sokoban, with an Artificial Intelligence that is able to solve the board, and show the solution.",
      TechStack: "Java",
      Count: "02",
      Percent: "50%",
      Picture: sokoban,
      Width: "960px",
      Ratio: "0.5",
      Repository: "https://github.com/StrawbErika/Sokoban-Maze-Solver",
    },
    {
      Title: "WORDSCAPE",
      Subtitle: "SOLVER",
      Description:
        "Developed a Wordscape Solver application with Backtracking algorithm.",
      TechStack: "ElectronJS, JavaScript, HTML5, CSS",
      Count: "03",
      Percent: "75%",
      Picture: wordscape,
      Width: "798px",
      Ratio: "0.5",
      Repository: "https://github.com/StrawbErika/Wordscape-Solver",
    },
    {
      Title: "RESUME",
      Subtitle: "WEBSITE",
      Description:
        "Created a responsive website that would showcase the personal projects made. Refer to Contact to download the resume.",
      TechStack: "ReactJS, HTML5, CSS, SASS",
      Count: "04",
      Percent: "100%",
      Picture: resume,
      Width: "1080px",
      Ratio: "0.3",
      Repository: "https://github.com/StrawbErika/Portfolio",
    },
  ];

  const [percent, setPercent] = useState(0);
  const workCount = useRef(null);
  const buttonRef0 = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);

  function detectImage() {
    const top = workCount.current.getBoundingClientRect().bottom;
    const ref0Top = buttonRef0.current.getBoundingClientRect().bottom;
    const ref1Top = buttonRef1.current.getBoundingClientRect().bottom;
    const ref2Top = buttonRef2.current.getBoundingClientRect().bottom;
    const ref3Top = buttonRef2.current.getBoundingClientRect().bottom;
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
    if (top < ref3Top && ref3Top < bottom) {
      setPercent(3);
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
      <div className={styles.work} ref={workRef}>
        <div className={styles.workCount} ref={workCount} id="works"></div>
        <Mobile listOfDetails={details[0]} buttonRef={buttonRef0} />
        <Mobile listOfDetails={details[1]} buttonRef={buttonRef1} />
        <Mobile listOfDetails={details[2]} buttonRef={buttonRef2} />
        <Mobile listOfDetails={details[3]} buttonRef={buttonRef3} />
      </div>
    );
  else
    return (
      <div className={styles.work} ref={workRef}>
        <Project listOfDetails={details} />
      </div>
    );
}

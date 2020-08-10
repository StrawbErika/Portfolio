import React from "react";
import styles from "./style.module.scss";
import { Project } from "./Project";
import project1 from "./../../Assets/Images/minkSquare.jpg";
import project2 from "./../../Assets/Images/minkTol.jpg";
import project3 from "./../../Assets/Images/minkWide.jpg";

export function WorkPage({ WorkRef }) {
  return (
    <div className={styles.work} ref={WorkRef}>
      <div>
        <Project
          ListOfDetails={[
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
          ]}
        />
        {/* <div className={styles.arrowDown}></div> */}
      </div>
    </div>
  );
}

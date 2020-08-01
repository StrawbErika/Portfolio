import React from "react";
import styles from "./style.module.scss";
import { Project } from "./Project";
import project1 from "./../../Assets/Images/minkSquare.jpg";

export function WorkPage() {
  return (
    <div className={styles.work}>
      <Project
        Title={"SINING"}
        Description={
          "Created a mobile application for recognizing painting styles of famous Filipino artists using convolutional Neural Networks."
        }
        TechStack={"React Native, OpenCV, Python, Tensorflow"}
        Count={"01"}
        Percent={"25%"}
        Picture={project1}
      />
      <Project
        Title={"SOKOBAN"}
        // Title={"SOKOBAN GAME & SOLVER"}
        Description={
          "Programmed a game modoled after Sooban with an Artificail Intelligence that is able to solve the board and show the solution."
        }
        TechStack={"Java"}
        Count={"02"}
        Percent={"50%"}
        Picture={project1}
      />
      <Project
        Title={"WORDSCAPE"}
        // Title={"WORDSCAPE SOLVER"}
        Description={
          "Developed a Wordscape Solver application with the Backtracking Algorithm."
        }
        TechStack={"ElectronJS, JavaScript, HTML5, CSS"}
        Count={"03"}
        Percent={"75%"}
        Picture={project1}
      />

      <Project
        Title={"MOODAL"}
        Description={
          "Spearheaded a website that is a spin-off of a Moodle website which is a Learning Management System. It allows teachers to post, create and add students; and students to comment on the post."
        }
        TechStack={"ReactJS, MongoDB, React Semantic-UI"}
        Count={"04"}
        Percent={"100%"}
        Picture={project1}
      />
    </div>
  );
}

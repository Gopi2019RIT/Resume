import React from "react";
import SkillsCard from "./SkillsCard";
import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <div className={styles["skills"]} id="skills">
      {/* <h1>My current skills</h1> */}
      <div className={styles["skills_container"]}>
        <div className={styles["skills_wrapper"]}>
          <div className={styles.skill}>Javascript</div>
          <div className={styles.skill}>React js</div>
          <div className={styles.skill}>MSSQL</div>
          <div className={styles.skill}>HTML</div>
          <div className={styles.skill}>CSS</div>
          <div className={styles.skill}>C</div>
          <div className={styles.skill}>JAVA</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

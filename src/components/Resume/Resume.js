import React from "react";
import SchoolEducation from "./SchoolEducation";
import CollegeEducation from "./CollegeEducation";
import styles from "./Resume.module.css";

const Resume = () => {
  return (
    <section className={styles.resume_section} id="resume">
      <div className={styles.heading}>
        {/* <p className={styles["above-title"]}>Career Path</p> */}
        <h4 className={styles["title"]}>Education & Work</h4>
      </div>
      <div className={styles.container}>
        <SchoolEducation />
        <CollegeEducation />
      </div>
    </section>
  );
};

export default Resume;

import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const CollegeEducation = () => {
  return (
    <div className={styles.container}>
    <div className={styles.timeline_wrapper}>
      <div className={styles.timeline_icon}>
        <FaGraduationCap />
      </div>
      <div className={styles.timeline}>
        <div className={styles.timeline_item}>
          <h4 className={styles.timeline_title}>
            RIT,Rajapalayam.
          </h4>
          <p className={styles.timeline_date}>2019-2023</p>
          <p className={styles.timeline_desc}>
            B.E(Computer Science and Engineering) (8.69)till 7th semester
          </p>
        </div>
        <div className={styles.timeline_item}>
          <h4 className={styles.timeline_title}>
            CSC
          </h4>
          <p className={styles.timeline_date}>2019-2020</p>
          <p className={styles.timeline_desc}>DSA Certification Course(Distinction)</p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CollegeEducation;

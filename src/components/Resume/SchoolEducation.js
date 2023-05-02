import React from "react";
import styles from "./Education.module.css";
import { FaGraduationCap } from "react-icons/fa";

const SchoolEducation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.timeline_wrapper}>
        <div className={styles.timeline_icon}>
          <FaGraduationCap />
        </div>
        <div className={styles.timeline}>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              S.H.N.V HR.SEC SCHOOL,SIVAKASI.
            </h4>
            <p className={styles.timeline_date}>2016-2017</p>
            <p className={styles.timeline_desc}>
              SSLC(State Board) (97.8%)
            </p>
          </div>
          <div className={styles.timeline_item}>
            <h4 className={styles.timeline_title}>
              S.H.N.V Hr.Sec School,Sivakasi
            </h4>
            <p className={styles.timeline_date}>2018-2019</p>
            <p className={styles.timeline_desc}>HSC (State Board)(86.66%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolEducation;

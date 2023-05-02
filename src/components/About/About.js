import React from "react";
import styles from "./About.module.css";
import Skills from "./Skills";

const About = () => {
  return (
    <section className={styles.about_section} id="about">
      <div className={styles.heading}>
        <h2 className={styles["title"]}>About Me</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <h3>Get to Know me!</h3>
          <p className={styles.desc}>
            I'm currently pursuing my B.E Computer Science and Engineering in Ramco Institute of 
            Technology with a cgpa of 8.69(till 7th semester). I'm a
            self-motivated, enthusiastic, goal-oriented person. Learning
            is one of the strengths which I prefer to continue throughout and
            keep challenging myself.
          </p>
          <p className={styles.desc}>
            I build web apps with a focus on React,JavaScript. I enjoy
            turning complex problems into simple and beautiful designs.
          </p>
        </div>
        <div className={styles.right}>
          <h3>My Skills</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;

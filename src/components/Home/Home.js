import React from "react";
import styles from "./Home.module.css";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Home = () => {
  return (
    <section className={styles.home_section} id="home">
      <div className={styles.home_left}>
        <div className={styles.home_img}>
          <div className={styles.cover}></div>
          <img
            className={styles.image}
            src={process.env.PUBLIC_URL + "/profile/Capture.jpg"}
          />
        </div>
      </div>
      <div className={styles.home_right}>
        <p className={styles.greet}>Hi, my name is</p>
        <h1 className={styles.heading_1}>
          GOPI <span>SANKAR</span>
        </h1>
        {/* <h1 className={styles.heading_2}>I build things for the web.</h1> */}
        <p className={styles.desc}>
          As a fresher I would like to build a career making the best use of my analytical ,logical ,
          technical, and creative skills to perform the assigned job efficiently.
        </p>
        <div className={styles.social_icons}>
          <a href="https://github.com/Gopi2019RIT" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gopi-sankar-p-037033201/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
          <a href="https://instagram.com/gopi.gopisankar.1?igshid=ZDdkNTZiNTM=/" target="_blank">
            <FiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

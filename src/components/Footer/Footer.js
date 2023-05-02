import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import styles from "./Footer.module.css";

function Footer() {
  const year = () => {
    const d = new Date();
    let y = d.getFullYear();
    return y;
  };

  return (
    <div className={styles.footer}>
      <div>
        <a
          className={styles.socialIcon}
          href="https://github.com/Gopi2019RIT"
          target="_blank"
        >
          <FiGithub />
        </a>
        <a
          className={styles.socialIcon}
          href="https://www.linkedin.com/in/gopi-sankar-p-037033201/"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          className={styles.socialIcon}
          href="https://instagram.com/gopi.gopisankar.1?igshid=ZDdkNTZiNTM=/"
          target="_blank"
        >
          <FiInstagram />
        </a>
      </div>

      <p class="copyright">
        © <span class="year">{year()}</span> -{" "}
        <span class="bold"> GOPI SANKAR</span>
      </p>
    </div>
  );
}

export default Footer;

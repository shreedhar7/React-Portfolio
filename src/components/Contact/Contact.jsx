import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:shreedharsree799@email.com">shreedharsree799@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shreedhar-thiruvengadan-reactnativedeveloper/">linkedin.com/Shreedhar</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/shreedhar7">github.com/Shreedhar</a>
        </li>
        <li className={styles.link}>
          <p>mobile</p>
          <a href="tel:+1234567890">+91 9384358235</a>
        </li>
      </ul>
    </footer>
  )
}

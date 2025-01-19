import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  const cursorIconUrl = getImageUrl("about/serverIcon.png");

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3 >Junior Software Developer</h3>
              <h2 style={{ fontSize: "17px" }}>Onemodo Technologies Pvt Ltd</h2>
              <h1 style={{ fontSize: "15px" , marginBottom: "5%" }}>June 2023 - Present</h1>
              <p style={{ fontSize: "18px" , fontWeight : 'light'}}>
                Developed and launched cross-platform mobile applications for
                Onemodo on iOS and Android, <strong style={{fontSize : '19px'}}>independently managing the full
                development lifecycle</strong> from conceptualization to deployment on
                the <strong style={{fontSize : '19px'}}>App Store</strong> and <strong style={{fontSize : '19px'}}>Google Play Console</strong>.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <p style={{ fontSize: "18px" }}>      Integrated RESTful APIs for seamless data retrieval and backend
                connectivity, employing <strong style={{fontSize : '19px'}}>JavaScript ES6</strong>  for clean, maintainable
                code and <strong style={{fontSize : '19px'}}>CSS</strong> for responsive, visually appealing UI designs.
                Leveraged Redux for efficient state management and incorporated
                multiple <strong style={{fontSize : '19px'}}>third party libraries</strong> to enhance functionality.
                Designed wireframes, mockups, and high-fidelity prototypes in
                <strong style={{fontSize : '19px'}}> Figma</strong> to refine the user experience. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <p style={{ fontSize: "18px" }}>
                
                Leveraged <strong style={{fontSize : '19px'}}>Redux</strong> for efficient state management and incorporated
                multiple third-party libraries to enhance functionality.
                Designed wireframes, mockups, and high-fidelity prototypes in
                Figma to refine the user experience. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            
            <div className={styles.aboutItemText}>
              <p style={{ fontSize: "18px" }}>
                
              Utilized Android Studio and
                X-code as the primary development environment for coding and
                debugging, employed <strong style={{fontSize : '19px'}}>Git for Version Control</strong> to streamline
                collaboration and code tracking, used <strong style={{fontSize : '19px'}}>Firebase</strong> and <strong style={{fontSize : '19px'}}>AWS Amplify</strong>
                for authentication and ensured deployments adhered to platform
                standards for security and performance. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>2019 - 2023</p>
              <p>
                B.Tech - Information Technology Sona College of technology - 7.9
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

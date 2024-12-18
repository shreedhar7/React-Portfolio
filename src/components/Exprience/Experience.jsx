import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    const expertise = getImageUrl("history/expertise.png");
    const language = getImageUrl("history/language.png");

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Skill</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
                <>
              <li key={id} className={styles.historyItem}>
                <img
                  src={expertise}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                    <h3 style={{marginLeft : '20px'}}>
                        Expertise
                    </h3>
                  <ul>
                    <li>Communication</li>
                    <li>Problem Solving</li>
                    <li>Adaptability</li>
                    <li>Team work</li>
                  </ul>
                </div>
              </li>
              
              <li key={id} className={styles.historyItem}>
                <img
                  src={language}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                    <h3 style={{marginLeft : '20px'}}>
                        Languages
                    </h3>
                  <ul>
                    <li>English</li>
                    <li>Tamil</li>
                    <li>Kannada</li>
                  </ul>
                </div>
              </li>
              </>
              
            );
          })}
        </ul>
      </div>
    </section>
  );
};

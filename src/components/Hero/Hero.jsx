import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm </h1>
        <h2 className={styles.subtitle}>Shreedhar Thiruvengadan</h2>
        <h2 className={styles.subtitle1}>React Native Developer</h2>
        <p className={styles.description}>
        Experienced App Developer with 1 year 7 months of expertise in building cross-platform mobile applications 
        using React Native and problem solving. Known for delivering clean , maintainable, user-friendly apps for 
        both iOS and Android platforms. Skilled in using Redux Toolkit for state management, designing UI/UX in Figma , 
        integrating APIs, and optimizing performance. Experienced in using AsyncStorage for local data storage.
        </p>
        <a href="mailto:shreedharsree799@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href="https://drive.google.com/file/d/1R0T1sDmphvRs5RGHwtAEJWnqxB7KtqB5/view?usp=sharing"className={styles.resume} >
         My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
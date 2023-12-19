import React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
    <section className={styles.hero}>
      <div>
      <p className={styles.salutations}>Hi there, my name is</p>
      <h1 className={styles.heading} >Michael W. Titus</h1>
      <p className={styles.tagline}>I will radiate your digital prescence</p>
      <p className={styles.text}>
        I'm a passionate <span>Full-Stack Web Developer</span> in search of exciting
        web-based projects to challenge and extend my expertise as a
        professional developer.
      </p>
      </div>
    </section>
    </>
  );
};

export default Hero;

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <p className={styles.salutations}>Hi there, my name is</p>
          <h1 className={styles.heading}>Michael W. Titus</h1>
          <p className={styles.tagline}>
            I will radiate your digital prescence
          </p>
          <p className={styles.text}>
            I'm a passionate <span>Full-Stack Developer</span> in search of
            exciting web projects to challenge and extend my expertise.
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;

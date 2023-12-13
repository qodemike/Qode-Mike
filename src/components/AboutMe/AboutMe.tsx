import NumberedHeading from "../NumberedHeading";
import styles from "./AboutMe.module.css";
import passport from "../../assets/profile_image.jpg";

const AboutMe = () => {
  return (
    <>
      <section>
        <header>
          <NumberedHeading heading="About Me" number={"01."} />
        </header>
        <article className={styles.content}>
          <p className={styles.text}>
            "Hi, I'm Michael, a passion-driven full-stack web developer
            currently building web services for clients in the e-commerce
            industry. My passion dates back to 2020 where I had find I am
            currently working full-time as a freelance developer helping small
            to medium sized businesses migrate into the digital landscape.
          </p>
          <picture className={styles.imageContainer}>
            <img src={passport} alt="image of a young handsome man" />
          </picture>
        </article>
      </section>
    </>
  );
};

export default AboutMe;

import NumberedHeading from "../NumberedHeading";
import styles from "./AboutMe.module.css";
import PassportImg from "../../assets/profile_image.webp";

const AboutMe = () => {
  return (
    <>
      <section id="AboutMe" className={`${styles.aboutMe} ${styles.move}`}>
        <header>
          <NumberedHeading title="About Me" number={"01."} />
        </header>
        <article className={styles.content}>
          <div>
            <p data-aos="fade-right" className={styles.paragraph}>
              Hi, I'm Michael, a passion-driven full-stack web developer. My
              programming fascination <span> dates back to 2018 </span> where I
              wanted to automate my derivatives trading strategy using Python.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="100"
              className={styles.paragraph}
            >
              Fast-forward to today, I've helped many clients stand out in the
              immense digital landscape by <span>Designing</span>,{" "}
              <span>Developing</span>, <span>Deploying</span> and{" "}
              <span>Manage</span> their digital needs.
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className={styles.paragraph}
            >
              Most of the time, I've built{" "}
              <span> fast , accessible web applications </span> with{" "}
              <span>production grade APIs</span> and scalable web solutions for
              clients joining the <span> e-commerce industry </span>.
            </p>
            
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className={styles.imgContainer}
          >
            <picture>
              <img
                className={styles.profileImg}
                src={PassportImg}
                alt="An Image of Michael"
              />
            </picture>
          </div>
        </article>
      </section>
    </>
  );
};

export default AboutMe;

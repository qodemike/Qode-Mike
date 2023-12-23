import NumberedHeading from "../NumberedHeading";
import styles from "./AboutMe.module.css";
import PassportImg from "../../assets/me.jpg";
import { useEffect, useState } from "react";
import BulletPoint from '../../assets/bullet point.png';
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section id="AboutMe" className={`${styles.aboutMe} ${styles.move}`}>
        <header>
          <NumberedHeading title="About Me" number={"01."} />
        </header>
        <article className={styles.content}>
          <div>
            <p className={styles.paragraph}>
              Hi, I'm Michael, a passion-driven full-stack web developer. This
              fascination <span>dates back to 2019</span> where I wanted to
              automate my derivatives trading strategy using Python.
            </p>
            <p className={styles.paragraph}>
              Fast-forward to today, I've been helping all sorts of clients
              stand out in the immense digital landscape through{" "}
              <span>Designing</span>, <span>Developing</span>,{" "}
              <span>Deploying</span> and <span>Managing</span> their needs.
            </p>
            <p className={styles.paragraph}>
              Most of the time, I build{" "}
              <span> scalable web solutions </span> for clients joining the
              e-commerce industry, and{" "}
              <span> fast accessible web applications </span> with{" "}
              <span> production grade APIs</span>.
            </p>
            <p className={styles.paragraph}>
              Before settling for freelance, I've had the privilege of working as:
            </p>
            <div className={styles.workExperience}>
              <img src={BulletPoint} alt="" />
              <div className={styles.workExperienceDetails}> 
              <span className={styles.role} >Junior Developer</span>
              <span className={styles.company} >{" "}@ Canaan Developers</span>
              <span className={styles.duration} >Jan 2021 - May 2022</span>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
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

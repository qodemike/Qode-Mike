import styles from "./WorkExperience.module.css";
import experiences from "../../data/experiences";
import BulletPoint from "../../assets/bullet_point.png";

const WorkExperience = () => {
  return (
    <section id="Experience" className={styles.workExperience}>
      <header className={styles.header}>
        <h2 className={styles.title}>Relevant Work Experience</h2>
        <div className={styles.line}></div>
      </header>

      {experiences.map((experience) => (
        <article className={styles.body}>
          <header className={styles.workExperienceDetails}>
            <span className={styles.role}>{experience.role}</span>
            <span className={styles.company}> {experience.company}</span>
            <span className={styles.duration}>{experience.duration}</span>
          </header>
          <ul className={styles.responsibilityList}>
            {experience.responsibilities.map((res) => (
              <li className={styles.responsibility}>
                <img src={BulletPoint} />
                <p>{res}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
};

export default WorkExperience;

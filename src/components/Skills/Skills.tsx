import NumberedHeading from "../NumberedHeading";
import styles from "./Skills.module.css";
import BulletPoint from "../../assets/bullet point.png";

const Skills = () => {
  const services = [
    "Front-end and Back-end development.",
    "Web design.",
    "Web application development.",
    "e-commerce web applications.",
    "Database design, modeling and management.",
    "SEO Implementation.",
    "Site Optimization",
    "Unit and Integration testing.",
    "Consultation",
  ];

  return (
    <>
      <section className={styles.skillsAndServices}>
        <header className={styles.header}>
          <h2>My Skills and Services</h2>
          <div className={styles.line}></div>
        </header>
        <article>
          <ul>
            {services.map((s, index) => (
              <li key={index} className={styles.service}>
                <img src={BulletPoint} /> <p>{s}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Skills;

import styles from "./SkillSection.module.css";
import BulletPoint from "../../assets/bullet point.png";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";


const Skills = () => {
  const services = [
    "Front-end and Back-end development.",
    "Scalable e-commerce web applications.",
    "Construction of responsive web applications.",
    "Database design, modeling and management.",
    "Unit, Integration and End to End testing.",
    "Search Engine Optimization.",
    "Web design.",
    "Performance testing and optimization",
    "Consultation",
  ];

  const lineRef = useRef<HTMLDivElement>(null);

  useEffect( () => {
    useIntersectionObserver( lineRef.current,  () => {
      lineRef.current?.classList.add(styles.action);
    })

  }, [])

  return (
    <>
      <section className={styles.skillsAndServices}>
        <header className={styles.header}>
          <h2>Things I can Do</h2>
          <div ref={lineRef} className={styles.line}></div>
        </header>
        <article>
          <ul>
            {services.map((s, index) => {
              return <li data-aos="fade-right" data-aos-offset="30" key={index} className={styles.service}>
                <img src={BulletPoint} /> <p>{s}</p>
              </li>
            }
            )}
          </ul>
        </article>
      </section>
    </>
  );
};

export default Skills;

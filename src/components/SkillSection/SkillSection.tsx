import styles from "./SkillSection.module.css";
import BulletPoint from "../../assets/bullet_point.png";
import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";


const Skills = () => {
  const services = [
    "Front-end and Back-end development.",
    "Development of Industry standard APIs.",
    "Highly scalable e-commerce web applications.",
    "Database design, modeling and development.",
    "Search Engine Optimization.",
    "Progressive Web Applications.",
    "Unit test, Integration test and end-to-end testing.",
    "Payment processing gateways.",
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
          <h2>My Skills and Services</h2>
          <div ref={lineRef} className={styles.line}></div>
        </header>
        <article>
          <ul>
            {services.map((s, index) => {
              return <li key={index} className={styles.service}>
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

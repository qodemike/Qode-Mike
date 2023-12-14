import NumberedHeading from "../NumberedHeading";
import styles from "./Technologies.module.css";
import icons from "../../assets/sprite-langauges.svg";
import Button from "../Button";

const Technologies = () => {
  const languages = [
    "HTML",
    "CSS",
    "Javascript",
    "Node.js",
    "PHP",
    "Typescript",
    "React",
    "Material UI",
    "Bootstrap",
    "MySQL",
    "Wordpress",
    "MongoDB",
  ];
  return (
    <section className={styles.technologies}>
      <header>
        <NumberedHeading number="02." heading="My Tools and Tech" />
      </header>
      <article className={styles.content}>
        <p className={styles.text}>
          A Brief visual of my programming languages, frameworks and libraries
          that are commonly sought. Click <span>See Full List</span> for full
          detail of my arsenal
        </p>
        <ul  className={styles.iconList}>
          {languages.map((language, index) => (
            <li key={index} className={styles.iconListItem}>
              <svg>
                <use xlinkHref={`${icons}#${language}`} />
              </svg>
              <span>{language}</span>
            </li>
          ))}
        </ul>
        <Button>See Full List</Button>
      </article>
    </section>
  );
};

export default Technologies;

import NumberedHeading from "../NumberedHeading";
import styles from "./Technologies.module.css";
import icons from "../../assets/sprite-languages.svg";
import Button from "../Button";
import { Link } from "react-router-dom";

const Technologies = () => {
  const languages = [
    "HTML",
    "CSS",
    "Javascript",
    "Node JS",
    "PHP",
    "Typescript",
    "React JS",
    "Material UI",
    "Bootstrap",
    "My SQL",
    "Wordpress",
    "MongoDB",
  ];


  return (
    <section id="Technologies" className={styles.technologies}>
      <header>
        <NumberedHeading number="02." title="My Arsenal" />
      </header>
      <article className={styles.content}>
        <p className={styles.text}>
          A Brief visual of my languages, frameworks and libraries that are
          commonly sought. Click <span>See Full List</span> for the full
          inventory in detail.
        </p>
        <ul className={styles.iconList}>
          {languages.map((language, index) => {
            return (
                <li data-aos="fade-up" data-aos-delay={`${50*index}`} key={index} className={styles.iconListItem}>
                  <svg>
                    <use xlinkHref={`${icons}#${language}`} />
                  </svg>
                  <span>{language}</span>
                </li>
            );
          })}
        </ul>
        <Link to={"/tools-and-technologies"}>
          <Button>See Full List</Button>
        </Link>
      </article>
    </section>
  );
};

export default Technologies;

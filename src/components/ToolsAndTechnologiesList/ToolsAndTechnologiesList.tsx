import styles from "./ToolsAndTechnologiesList.module.css";
import languageIcons from "../../assets/sprite-languages.svg";
import { useAOS } from "../../hooks/useAOS";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";

const ToolsAndTechnologiesList = () => {
  const technologies = {
    Langauges: ["HTML", "CSS", "Javascript", "Typescript", "SQL", "Python"],
    "Front-end Technologies": [
      "React JS",
      "Wordpress",
      "Bootstrap",
      "Material UI",
      "Chakra UI",
    ],
    "Back-end Technologies": ["Node JS", "Express JS", "PHP"],
    Database: ["MongoDB", "My SQL"],
    "Design Tools": ["Adobe XD", "Illustrator", "Photoshop"],
  };

  useAOS();


  return (
    <>
      <h2  className={styles.heading}>
        My Tools and Technologies
      </h2>
      <div  className={`${styles.line}`} ></div>
      <div data-aos="fade-right" data-aos-duration="1000"  >
      {Object.entries(technologies).map((stack) => (
        <div >
          <h3 className={styles.subHeading}>{stack[0]}</h3>
          <ul className={styles.iconList}>
            {stack[1].map((language, index) => (
              <li data-aos="fade-right" data-aos-delay={100*index} className={styles.iconListItem}>
                <svg>
                  <use xlinkHref={`${languageIcons}#${language}`} />
                </svg>
                <span>{language}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
      </div>
    </>
  );
};

export default ToolsAndTechnologiesList;

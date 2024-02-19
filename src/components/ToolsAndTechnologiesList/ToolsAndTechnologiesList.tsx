import styles from "./ToolsAndTechnologiesList.module.css";
import languageIcons from "../../assets/sprite-languages.svg";
import { technologies } from "../../data/technologies";

const ToolsAndTechnologiesList = () => {

  return (
    <>
      <h2  className={styles.heading}>
        My Tools and Technologies
      </h2>
      <div  className={`${styles.line}`} ></div>
      {Object.entries(technologies).map((stack, stackIndex) => (
        <div key={stackIndex} >
          <h3 className={styles.subHeading}>{stack[0]}</h3>
          <ul className={styles.iconList}>
            {stack[1].map((language, languageIndex) => (
              <li key={languageIndex}  className={styles.iconListItem}>
                <svg>
                  <use xlinkHref={`${languageIcons}#${language}`} />
                </svg>
                <span>{language}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default ToolsAndTechnologiesList;

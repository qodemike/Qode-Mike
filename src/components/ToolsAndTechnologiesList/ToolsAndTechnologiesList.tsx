import styles from "./ToolsAndTechnologiesList.module.css";
import languageIcon from "../../assets/sprite-langauges.svg";

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
    "Design Tools":["Adobe XD", "Illustrator", "Photoshop"]
  };
  return (
    <>
      <h2 className={styles.heading}>My Tools and Technologies</h2>
      <div className={styles.line}></div>
      {Object.entries(technologies).map((stack) => (
        <div>
          <h3 className={styles.subHeading}>{stack[0]}</h3>
          <ul className={styles.iconList}>
          {
          stack[1].map((language) => (
            <li className={styles.iconListItem}>
            <svg>
              <use xlinkHref={`${languageIcon}#${language}`} />
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

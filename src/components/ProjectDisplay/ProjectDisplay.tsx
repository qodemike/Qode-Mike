import styles from "./ProjectDisplay.module.css";
import LanguageIcons from "../../assets/sprite-languages.svg";

export interface Project {
  title: string;
  href: string;
  source: {
    default:string;
    cropped:string;
  };
  description: string;
  languages: string[];
}
interface Props {
  projects: Project[];
}

const ProjectDisplay = ({ projects }: Props) => {

  return (
    <>
      {projects.map((p,index) => (
        <div key={index} className={styles.project}>
          <div className={styles.imgContainer}>
            <picture>
              <source media="(max-width: 500px)" srcSet={p.source.cropped}/>
              <img
                className={styles.projectImg}
                src={p.source.default}
                alt="image of the project"
              />
            </picture>
          </div>
          <div className={styles.projectDetails}>
              <a href={p.href}>
                <h3>{p.title}</h3>
              </a>
            <div className={styles.descriptionCard}>
              <p>{p.description}</p>
            </div>
            <ul className={styles.iconList}>
              {p.languages.map((l, index) => (
                <li key={index} className={styles.iconListItem}>
                  <svg>
                    <use xlinkHref={`${LanguageIcons}#${l}-fill`} />
                  </svg>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectDisplay;

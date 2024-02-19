import styles from "./ProjectDisplaySection.module.css";
import LanguageIcons from "../../assets/sprite-languages.svg";

export interface Project {
  title: string;
  href: string;
  source: {
    default: string;
    cropped: string;
  };
  description: string;
  languages: string[];
}
interface Props {
  projects: Project[];
}

const ProjectDisplaySection = ({ projects }: Props) => {

  const handleClick = (url: string) => {
    window.open(url, '_blank');
  }
  

  return (
    <>
      {projects.map((p, projectIndex) => (
        <div key={projectIndex} className={styles.project}>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="0"
            onClick={() => handleClick(p.href)}
            className={styles.imgContainer}
          >
            <picture >
              <source media="(max-width: 500px)" srcSet={p.source.cropped} />
              <img
                className={styles.projectImg}
                src={p.source.default}
                alt="image of the project"
                />
            </picture>
          </div>

          <div className={styles.projectDetails}>
              <h3  onClick={() => handleClick(p.href)} className={styles.projectTitle}>{p.title}</h3>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className={styles.descriptionCard}
            >
              <p>{p.description}</p>
            </div>
            <ul className={styles.iconList}>
              {p.languages.map((l, languageIndex) => {
                const delay = 100 * languageIndex;
                return (
                  <li
                    data-aos="fade-right"
                    data-aos-delay={`${delay}`}
                    data-aos-offset="40"
                    key={languageIndex}
                    className={styles.iconListItem}
                  >
                    <svg>
                      <use xlinkHref={`${LanguageIcons}#${l}-fill`} />
                    </svg>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectDisplaySection;

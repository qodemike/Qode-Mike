import styles from "./ProjectDisplayGrid.module.css";
import LanguageIcons from "../../assets/sprite-languages.svg";
import { useState } from "react";
import { Project } from "../../entities/Project";
import Sprite from "../../assets/sprite.svg";
import ProjectImg from "../ProjectImg/ProjectImg";

interface Props {
  projects: Project[];
}

const ProjectDisplayGrid = ({ projects }: Props) => {
  const [iconIndex, setIconIndex] = useState<{
    projectIndex: number;
    languageIndex: number;
  } | null>(null);

  const handleClickRepo = (url: string) => {
    window.open(url, "_blank");
  };

  const handleClickLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className={styles.projectGrid}>
          <ProjectImg project={project} />

          <div className={styles.projectDetails}>
            <h3 onClick={() => handleClickLink(project.href)} className={styles.projectTitle}>
              {project.title}
            </h3>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className={styles.descriptionCard}
            >
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <svg onClick={() => handleClickLink(project.href)}>
                  <use xlinkHref={`${Sprite}#external-link`} />
                </svg>
                <svg onClick={() => handleClickRepo(project.git)}>
                  <use xlinkHref={`${Sprite}#github-logo`} />
                </svg>
              </div>
            </div>
            <ul className={styles.iconList}>
              {project.languages.map((language, languageIndex) => {
                const delay = 100 * languageIndex;
                return (
                  <li
                    data-aos="fade-right"
                    data-aos-delay={`${delay}`}
                    data-aos-offset="40"
                    key={languageIndex}
                    className={styles.iconListItem}
                    title={`${language}`}
                  >
                    <svg
                      onMouseEnter={() =>
                        setIconIndex({ projectIndex, languageIndex })
                      }
                      onMouseLeave={() => setIconIndex(null)}
                    >
                      <use
                        xlinkHref={`${LanguageIcons}#${language}${
                          iconIndex?.projectIndex === projectIndex &&
                          iconIndex.languageIndex === languageIndex
                            ? ""
                            : "-fill"
                        }`}
                      />
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

export default ProjectDisplayGrid;

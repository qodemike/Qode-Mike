import styles from "./ProjectDisplaySection.module.css";
import LanguageIcons from "../../assets/sprite-languages.svg";
import { useState } from "react";
import { Project } from "../../entities/Project";
import Sprite from "../../assets/sprite.svg";

interface Props {
  projects: Project[];
}

const ProjectDisplaySection = ({ projects }: Props) => {
  const [iconIndex, setIconIndex] = useState<{
    projectIndex: number;
    languageIndex: number;
  } | null>(null);

  const handleClickImg = (url: string) => {
    window.open(url, "_blank");
  };
  const handleClickRepo = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      {projects.map((project, projectIndex) => (
        <div key={projectIndex} className={styles.project}>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-offset="0"
            onClick={() => handleClickImg(project.href)}
            className={styles.imgContainer}
          >
            <picture>
              <source
                media="(max-width: 500px)"
                srcSet={project.source.cropped}
              />
              <img
                className={styles.projectImg}
                src={project.source.default}
                alt="image of the project"
              />
            </picture>
          </div>

          <div className={styles.projectDetails}>
            <h3
              onClick={() => handleClickImg(project.href)}
              className={styles.projectTitle}
            >
              {project.title}
            </h3>
            <div
              data-aos="fade-right"
              data-aos-delay="300"
              className={styles.descriptionCard}
            >
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectLinks}>
                <svg onClick={() => handleClickImg(project.href)}>
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

export default ProjectDisplaySection;

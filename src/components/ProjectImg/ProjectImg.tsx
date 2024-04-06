import styles from "./ProjectImg.module.css";
import { Project } from "../../entities/Project";

interface Props {
  project: Project;
}

const ProjectImg = ({ project }: Props) => {

  const handleClickImg = (url: string) => {
    window.open(url, "_blank");
  };
  
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-offset="0"
      onClick={() => handleClickImg(project.href)}
      className={styles.imgCurtain}
    >
      <picture className={styles.imgContainer}>
        <source media="(max-width: 500px)" srcSet={project.source.cropped} />
        <img
          className={styles.projectImg}
          src={project.source.default}
          alt="image of the project"
        />
      </picture>
    </div>
  );
};

export default ProjectImg;

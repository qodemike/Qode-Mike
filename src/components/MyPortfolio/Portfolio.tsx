import NumberedHeading from "../NumberedHeading";
import styles from "./Portfolio.module.css";
import { projects } from "../../data/projects";
import ProjectDisplayGrid from "../ProjectDisplay/ProjectDisplaySection";

const Portfolio = () => {

  return (
    <>
      <section id="MyPortfolio" className={styles.myPortfolio}>
        <header>
          <NumberedHeading number="03." title="My Portfolio" />
        </header>
        <article>
          <ProjectDisplayGrid projects={projects}/>
        </article>
      </section>
    </>
  );
};

export default Portfolio;

import NumberedHeading from "../NumberedHeading";
import styles from "./MyPortfolio.module.css";
import { projects } from "../../data/projects";
import ProjectDisplaySection from "../ProjectDisplay/ProjectDisplaySection";

const Portfolio = () => {

  return (
    <>
      <section id="MyPortfolio" className={styles.myPortfolio}>
        <header>
          <NumberedHeading number="03." title="My Portfolio" />
        </header>
        <article>
          <ProjectDisplaySection projects={projects}/>
        </article>
      </section>
    </>
  );
};

export default Portfolio;

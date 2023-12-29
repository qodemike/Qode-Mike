import NumberedHeading from "../NumberedHeading";
import styles from "./MyPortfolio.module.css";
import GameHub from "../../assets/GameHub@1x.webp";
import GameHubCropped from "../../assets/GameHub-cropped.webp"
import Cloudy from "../../assets/Cloudy.webp";
import CloudyCropped from "../../assets/Cloudy-cropped@1x.webp";
import ProjectDisplay,{Project} from "../ProjectDisplay/ProjectDisplay";

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "Game Discovery App",
      source: {
        default: GameHub,
        cropped: GameHubCropped
      },
      href: '#',
      description:
        "A web app designed to assist in video game discovery. Find new releases, ratings, trends, trailers,  gameplays and screenshots of your favourite games.",
      languages: ["React JS", "Chakra UI", "Typescript", "Node JS", "MongoDB"],
    },
    {
      source: {
        default: Cloudy,
        cropped: CloudyCropped
      },
      title: "Cloud Hosting",
      href: 'https://cloudily.netlify.app',
      description:
        "A website for purchasing domains and hosting. Implemented with a focus on Speed, Search Engine Optimization, responsiveness and various optimization techniques.",
      languages: ["HTML", "CSS", "Javascript"],
    },
  ];

  return (
    <>
      <section id="MyPortfolio" className={styles.myPortfolio}>
        <header>
          <NumberedHeading number="03." title="My Portfolio" />
        </header>
        <article>
          <ProjectDisplay projects={projects}/>
        </article>
      </section>
    </>
  );
};

export default Portfolio;

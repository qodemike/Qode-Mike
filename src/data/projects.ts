import GameHub from "../assets/Gamehub.webp";
import GameHubCropped from "../assets/Gamehub-cropped.webp";
import Cloudy from "../assets/Cloudy.webp";
import CloudyCropped from "../assets/Cloudy-cropped@1x.webp";
import { Project } from "../components/ProjectDisplay/ProjectDisplaySection";

export const projects: Project[] = [
  {
    title: "Game Discovery App",
    source: {
      default: GameHub,
      cropped: GameHubCropped,
    },
    href: "#",
    description:
      "A web app designed to assist in video game discovery. Find new releases, ratings, trends, trailers, gameplays and screenshots of your favourite games.",
    languages: ["React JS", "Chakra UI", "Typescript", "Firebase", "MongoDB"],
  },
  {
    source: {
      default: Cloudy,
      cropped: CloudyCropped,
    },
    title: "Cloud Hosting",
    href: "https://cloudily.netlify.app",
    description:
      "A website for purchasing domains and hosting. Developed with a focus on Speed, SEO, responsiveness and various optimization techniques.",
    languages: ["HTML", "CSS", "Javascript"],
  },
];

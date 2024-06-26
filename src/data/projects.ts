import GameHub from "../assets/Gamehub.webp";
import GameHubCropped from "../assets/Gamehub_cropped.webp";
import Cloudy from "../assets/Cloudy.webp";
import CloudyCropped from "../assets/Cloudy_cropped.webp";
import Bugster from "../assets/Bugster.webp";
import BugsterCropped from "../assets/Bugster_cropped.webp";
import HotelApp from "../assets/Hotelapp.webp";
import HotelAppCropped from "../assets/Hotelapp_cropped.webp";
import { Project } from "../entities/Project";

export const projects: Project[] = [
  {
    title: "Game Discovery App",
    source: {
      default: GameHub,
      cropped: GameHubCropped,
    },
    href: "https://gamehub-v1.vercel.app",
    description:
      "A web app designed to assist in video game discovery. Find new releases, ratings, trends, trailers, gameplays and screenshots of your favourite games.",
    languages: ["React JS", "Chakra UI", "Typescript", "Firebase", "MongoDB"],
    git: "https://github.com/qodemike/game-hub.git"
  },
  {
    title: "Hotel Booking App",
    source: {
      default: HotelApp,
      cropped: HotelAppCropped,
    },
    href: "https://hotelapp-m9qm.onrender.com",
    description:
      "A feature rich, production grade web app for finding and listing hotels. Showcasing advanced searches, payment processing, google apis, database design and a lot more.",
    languages: ["React JS", "Tailwind", "Typescript", "Node JS", "MongoDB"],
    git: "https://github.com/qodemike/hotel-app.git",
  },
  {
    source: {
      default: Bugster,
      cropped: BugsterCropped,
    },
    title: "Issue tracker",
    href: "https://bugster.vercel.app",
    description:
      "A blazingly fast issue tracking app designed to help team leaders keep track of new issues in their digital infrastructure, assign them to troubleshooters and oversee the flow. ",
    languages: ["Next JS", "Tailwind", "Postgresql", "Prisma", "Typescript"],
    git: "https://github.com/qodemike/bugster.git",
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
    git: "https://github.com/qodemike/Cloud-Hosting-Site.git",
  },
];

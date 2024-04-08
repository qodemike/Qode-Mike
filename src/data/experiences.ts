interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    role: "Backend Developer",
    company: "@ EGM Securities",
    duration: "Jan 2021 - Oct 2023",
    responsibilities: [
      "Design and development of production grade APIs and code base maintainance ",
      "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
      "Development and management of company database using SQL",
      "Close collaborations with project manager to design and develop unit and integration tests",
    ],
  },
  {
    role: "Frontend Developer",
    company: "@ Canaan Developers",
    duration: "Sep 2020 - Nov 2021",
    responsibilities: [
      "Developed responsive and interactive web applications with popular frontend technologies like React and more ",
      "Collaborated with designers and engineers on pro bono projects to design robust systems for organization",
      "Delivered technical solutions to satisfy stakeholders' business requirements",
      "Implemention of quality assurance tests to ensure cross browser compatibility and device responsiveness",
    ],
  },
];

export default experiences;

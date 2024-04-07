import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/MyPortfolio";
import SkillSection from "../components/SkillSection";
import Arsenal from "../components/Arsenal";
import ContactPage from "../components/ContactPage";
import WorkExperience from "../components/WorkExperience/WorkExperience";

const HomePage = () => {
  return (
    <>
        <Hero />
        <AboutMe />
        <WorkExperience/>
        <SkillSection />
        <Arsenal />
        <Portfolio />
        <ContactPage/>
    </>
  );
};

export default HomePage;

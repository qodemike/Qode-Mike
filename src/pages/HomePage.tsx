import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/MyPortfolio";
import SkillSection from "../components/SkillSection";
import Technologies from "../components/Technologies";
import ContactPage from "../components/ContactPage";
import styles from "./Homepage.module.css";

const HomePage = () => {
  return (
    <>
        <Hero />
        <AboutMe />
        <SkillSection />
        <Technologies />
        <Portfolio />
        <ContactPage />
    </>
  );
};

export default HomePage;

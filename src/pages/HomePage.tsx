import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/MyPortfolio";
import SkillSection from "../components/SkillSection";
import MyArsenal from "../components/Arsenal";
import ContactPage from "../components/ContactPage";

const HomePage = () => {
  return (
    <>
        <Hero />
        <AboutMe />
        <SkillSection />
        <MyArsenal />
        <Portfolio />
        <ContactPage/>
    </>
  );
};

export default HomePage;

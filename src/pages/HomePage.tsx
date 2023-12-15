import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero/Hero";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Skills />
      <Technologies/>
      <Portfolio />
    </>
  );
};

export default HomePage;

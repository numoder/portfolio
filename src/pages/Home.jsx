import Intro from "../components/Intro/Intro";
import TwoThings from "../components/TwoThings/TwoThings";
import PortfolioList from "../components/Portfolio/List";
import SkillList from "../components/Skill/List";
import About from "../components/About/About";
import SocialList from "../components/Social/List";
import Footer from "../components/Footer/Footer";

// CSS
import '../style/App.scss';
import '../style/GlowOnHover.scss';
import '../style/ButtonEffect.scss';

export default function Home () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <TwoThings />
        <PortfolioList />
      </div>
      <SkillList />
      <About />
      <div className="bottom-scene-container">
        <SocialList />
        <Footer />
      </div>
    </>
  );
};
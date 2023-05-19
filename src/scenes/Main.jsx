import Intro from "../components/Intro/Intro.jsx";
import Portfolio from "../components/Portfolio/List.jsx"
import Skill from "../components/Skill/List.jsx";
import TwoThings from "../components/TwoThings/TwoThings.jsx";
import About from "../components/About/About.jsx";
import Social from "../components/Social/List.jsx";
import Footer from "../components/Footer/Footer.jsx";

// CSS
import "../components/style/App.scss";
import '../components/style/Intro.scss';
import '../components/style/GlowOnHover.scss';
import '../components/style/PortfolioCard.scss';


export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <TwoThings />
        <Portfolio />
      </div>
      <Skill />
      <About />
      <div className="bottom-scene-container">
        <Social />
        <Footer />
      </div>
    </>
  );
};
import Intro from "../components/Intro/Intro.jsx";
import Portfolio from "../components/Portfolio/List.jsx"
import Skill from "../components/Skill/List.jsx";
import TwoThings from "../components/TwoThings/TwoThings.jsx";
import About from "../components/About/About.jsx";
import Social from "../components/Social/List.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
      <Portfolio />
      </div>
        <TwoThings />
      <Skill />
      <About />
      <Social />
      <Footer />
    </>
  )
}
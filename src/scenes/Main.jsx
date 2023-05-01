import Intro from "../components/Intro/Intro.jsx";
import Portfolio from "../components/Portfolio/List.jsx"
import Skill from "../components/Skill/List.jsx";
import ThreeThings from "../components/ThreeThings/ThreeThings.jsx";
import About from "../components/About/About.jsx";
import Social from "../components/Social/List.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Main () {

  return (
    <>
      <div className="top-scene-container">
        <Intro />
        <ThreeThings />
      </div>
      <Portfolio />
      <Skill />
      <About />
      <Social />
      <Footer />
    </>
  )
}
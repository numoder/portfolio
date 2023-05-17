import { Image } from "../../util/Bootstrap.jsx";

export default function EasterEgg( {name,id} ) {

  return (
    <a
      href="https://jsohndata.github.io/magic-color-xxl/"
      target="_blank"
      className="easter-egg"
      rel="noreferrer">
        <Image 
          key={id}
          src={`${process.env.PUBLIC_URL}/icons/${name}.svg`}
          fluid
          className="glow-on-hover"
          style={{display: "inline-block", width: "100px"}} />
    </a>
  )
}

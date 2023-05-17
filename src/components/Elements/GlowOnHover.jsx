import { Button } from "../../util/Bootstrap.jsx";

export default function GlowOnHover ({text}) {

  return (
    <Button 
      size="lg" 
      variant="outline-danger" 
      className="d-block d-lg-inline m-auto button-style glow-on-hover">{text}</Button>
  )
}

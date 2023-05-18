import Main from "./scenes/Main.jsx";
import "./components/style/App.scss";
import '../src/components/style/GlowOnHover.scss';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Main/>}></Route>
      {/* <Route path='*' element={<404/>}</Route> */}
    </Routes>
    </div>
  );
}

export default App;

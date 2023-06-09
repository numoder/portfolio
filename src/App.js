import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      {/* <Route path='*' element={<404/>}</Route> */}
    </Routes>
    </div>
  );
}

export default App;

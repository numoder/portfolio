import { BrowserRouter } from "react-router-dom";
import Main from "./scenes/Main.jsx";
import "./components/style/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
  );
}

export default App;

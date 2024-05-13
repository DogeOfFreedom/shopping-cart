import { useParams } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";

function App() {
  const { name } = useParams();

  return (
    <div>
      <NavBar />
      {name === "home" ? <Home /> : <Shop />}
    </div>
  );
}

export default App;

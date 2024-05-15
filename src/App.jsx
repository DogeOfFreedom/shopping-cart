import { useParams } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { useState } from "react";

function App() {
  const { name } = useParams();
  const duration = 150;
  const [fadeOut, setFadeOut] = useState(false);

  return (
    <div>
      <NavBar duration={duration} setFadeOut={setFadeOut} />
      {name === "home" ? (
        <Home duration={duration} fadeOut={fadeOut} setFadeOut={setFadeOut} />
      ) : (
        <Shop duration={duration} fadeOut={fadeOut} setFadeOut={setFadeOut} />
      )}
    </div>
  );
}

export default App;

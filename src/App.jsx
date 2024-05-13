import { Outlet } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;

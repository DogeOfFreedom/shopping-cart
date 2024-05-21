import { useParams } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import "./index.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { useState } from "react";
import Checkout from "./checkout/Checkout";

function App() {
  const { name } = useParams();
  const duration = 150;
  const [fadeOut, setFadeOut] = useState(false);
  const [cart, setCart] = useState([]);
  const [checkout, setCheckout] = useState(false);

  const showCheckout = () => {
    cart.length && setCheckout(true);
  };
  const closeCheckout = () => setCheckout(false);

  const countItems = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  return (
    <div>
      {checkout && (
        <Checkout show={checkout} closeCheckout={closeCheckout} cart={cart} />
      )}
      <NavBar
        items={countItems()}
        duration={duration}
        setFadeOut={setFadeOut}
        showCheckout={showCheckout}
      />
      {name === "home" ? (
        <Home duration={duration} fadeOut={fadeOut} setFadeOut={setFadeOut} />
      ) : (
        <Shop
          fadeOut={fadeOut}
          setFadeOut={setFadeOut}
          cart={cart}
          addToCart={setCart}
        />
      )}
    </div>
  );
}

export default App;

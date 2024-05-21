import { Link, useParams } from "react-router-dom";
import styles from "./navbar.module.css";
import ClickableTab from "./ClickableTab";
import PropTypes from "prop-types";

const NavBar = ({ items, duration, setFadeOut, showCheckout }) => {
  const { name } = useParams();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link className="" to="/home">
          Menzei
        </Link>
      </div>
      <div className={styles.navOptionsContainer}>
        <ClickableTab
          text="Home"
          url="/home"
          selected={name === "home"}
          duration={duration}
          setFadeOut={setFadeOut}
        />
        <ClickableTab
          text="Shop"
          url="/shop"
          selected={name === "shop"}
          duration={duration}
          setFadeOut={setFadeOut}
        />
      </div>
      <div className={`${styles.checkout} ${name !== "shop" && styles.hidden}`}>
        <span>Quantity: {items}</span>
        <button onClick={showCheckout}>
          <img src="./public/icons8-checkout-100.png" alt="checkout icon" />
        </button>
      </div>
    </nav>
  );
};

NavBar.propTypes = {
  items: PropTypes.number,
  duration: PropTypes.number,
  setFadeOut: PropTypes.func,
  showCheckout: PropTypes.func,
};

export default NavBar;

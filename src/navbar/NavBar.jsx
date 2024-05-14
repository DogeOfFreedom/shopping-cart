import { Link, useParams } from "react-router-dom";
import styles from "./navbar.module.css";
import ClickableTab from "./ClickableTab";
import PropTypes from "prop-types";

const NavBar = ({ duration, setFadeOut }) => {
  const { name } = useParams();
  console.log(name);
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
      <div className={styles.checkout}></div>
    </nav>
  );
};

NavBar.propTypes = {
  duration: PropTypes.number,
  setFadeOut: PropTypes.func,
};

export default NavBar;

import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import ClickableTab from "./ClickableTab";
import { useState } from "react";

const NavBar = () => {
  const [index, setIndex] = useState(0);

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
          index={1}
          selected={index === 1}
          set={setIndex}
        />
        <ClickableTab
          text="Shop"
          url="/shop"
          index={2}
          selected={index === 2}
          set={setIndex}
        />
      </div>
      <div className={styles.checkout}></div>
    </nav>
  );
};

export default NavBar;

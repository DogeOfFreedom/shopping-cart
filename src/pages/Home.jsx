import { useNavigate } from "react-router-dom";
import styles from "./pages.module.css";
import home from "./home.module.css";
import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const Home = ({ duration, fadeOut, setFadeOut }) => {
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    return () => {
      setFadeOut(false);
    };
  }, []);

  const handleTimeLink = () => {
    setFadeOut(true);
    setTimeout(() => navigate("/shop"), duration);
  };

  return (
    <>
      <div className={`${styles.pageContainer}`}>
        <div
          className={`${styles.contentContainer} ${home.contentContainer} ${
            styles.fadeable
          } 
          ${fadeOut ? styles.fadeOut : ""}`}
          ref={ref}
        >
          <h3>Ever wanted to look like an NPC?</h3>
          <h1 className={home.heroText}>Menzei's Got You</h1>
          <button className={home.shopButton} onClick={handleTimeLink}>
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  duration: PropTypes.number,
  fadeOut: PropTypes.bool,
  setFadeOut: PropTypes.func,
};

export default Home;

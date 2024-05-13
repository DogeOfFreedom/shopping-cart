import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./pages.module.css";
import home from "./home.module.css";
import { useEffect, useRef } from "react";

const Home = () => {
  const container = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => container.current.classList.add(styles.fadeIn), 100);
  }, []);

  const handleTimeLink = () => {
    container.current.classList.remove(styles.fadeIn);
    container.current.classList.add(styles.fadeAway);
    setTimeout(() => navigate("/shop"), 300);
  };

  return (
    <div className={`${styles.pageContainer}`}>
      <div
        className={`${home.contentContainer} ${styles.fadeable}`}
        ref={container}
      >
        <h3>Ever wanted to look like an NPC?</h3>
        <h1 className={home.heroText}>Menzei's Got You</h1>
        <button className={home.shopButton} onClick={handleTimeLink}>
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Home;

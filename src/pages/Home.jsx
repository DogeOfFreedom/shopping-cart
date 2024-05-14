import { useNavigate } from "react-router-dom";
import styles from "./pages.module.css";
import home from "./home.module.css";
import { useEffect, useRef } from "react";

const Home = ({ duration, fadeOut, setFadeOut }) => {
  const navigate = useNavigate();
  const ref = useRef();

  useEffect(() => {
    setTimeout(() => ref.current.classList.add(styles.fadeIn), 50);

    return () => {
      setFadeOut(false);
      console.log("set fadeOut = false");
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
          className={`${home.contentContainer} ${styles.fadeable} 
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

export default Home;

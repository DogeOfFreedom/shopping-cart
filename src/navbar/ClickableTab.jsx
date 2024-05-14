import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import PropTypes from "prop-types";

const ClickableTab = ({ text, url, selected, duration, setFadeOut }) => {
  const navigate = useNavigate();
  const classes = selected
    ? `${styles.clickableTab} ${styles.selectedTab}`
    : `${styles.clickableTab}`;

  const handleClick = () => {
    if (!selected) {
      setFadeOut(true);
      setTimeout(() => navigate(url), duration);
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <span>{text}</span>
    </button>
  );
};

ClickableTab.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  selected: PropTypes.bool,
  duration: PropTypes.number,
  setFadeOut: PropTypes.func,
};

export default ClickableTab;

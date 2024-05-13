import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
import PropTypes from "prop-types";

const ClickableTab = ({ text, url, selected }) => {
  const classes = selected
    ? `${styles.clickableTab} ${styles.selectedTab}`
    : `${styles.clickableTab}`;

  return (
    <Link className={classes} to={url}>
      <span>{text}</span>
    </Link>
  );
};

ClickableTab.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  index: PropTypes.number,
  selected: PropTypes.bool,
  set: PropTypes.func,
};

export default ClickableTab;

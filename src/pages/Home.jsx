import { Link } from "react-router-dom";
import styles from "./pages.module.css";
import home from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.pageTitle}>Home</h2>
      <Link to="/shop">Go to Shop</Link>
    </div>
  );
};

export default Home;

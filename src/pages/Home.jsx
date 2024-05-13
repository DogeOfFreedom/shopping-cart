import { Link } from "react-router-dom";
import styles from "./pages.module.css";

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.hero}>Home</h2>
      <Link to="/shop">Go to Shop</Link>
    </div>
  );
};

export default Home;

import { useEffect, useRef, useState } from "react";
import styles from "./pages.module.css";
import shop from "./shop.module.css";
import PropTypes from "prop-types";
import ShopCard from "./ShopCard";
import { Link } from "react-router-dom";

const Shop = ({ fadeOut, setFadeOut }) => {
  const ref = useRef(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [items, setItems] = useState(null);
  const limit = 6;

  useEffect(() => {
    return () => {
      setFadeOut(false);
    };
  }, []);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products`)
      .then((res) => res.json())
      .then((json) => setItems(json))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, []);

  const goPrevPage = () => setPage(page - 1);
  const goNextPage = () => setPage(page + 1);

  if (loading) return <div data-testid="loader" className={shop.loading}></div>;
  if (error)
    return (
      <div className={shop.errorContainer}>
        <p>A server error occured, uh oh T_T</p>
        <Link to="/home">Back to Home</Link>
      </div>
    );

  return (
    <>
      <div className={styles.pageContainer}>
        <div
          className={`${styles.contentContainer} ${shop.contentContainer} ${
            styles.fadeable
          }
        ${fadeOut ? styles.fadeOut : ""}`}
          ref={ref}
        >
          <h1 className={shop.pageTitle}>Shop</h1>
          <div className={shop.shopContainer}>
            {items &&
              items.map((item) => (
                <ShopCard key={item.id} data={item} setItems={setItems} />
              ))}
          </div>

          <div className={shop.navigation}>
            <button
              onClick={goPrevPage}
              className={`${shop.navBtn} ${page <= 1 && shop.hidden}`}
            >
              &lt;&lt; Prev
            </button>
            <p className={shop.pageNumber}>{`Page ${page}`}</p>
            <button
              onClick={goNextPage}
              className={`${shop.navBtn} ${
                page >= Math.ceil(items.length / limit) && shop.hidden
              }`}
            >
              Next &gt;&gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Shop.propTypes = {
  duration: PropTypes.number,
  fadeOut: PropTypes.bool,
  setFadeOut: PropTypes.func,
};

export default Shop;

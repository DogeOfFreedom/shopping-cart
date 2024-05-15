import { useState } from "react";
import card from "./card.module.css";
import PropTypes from "prop-types";

const ShopCard = ({ data, addItems }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : quantity;
    setQuantity(newQuantity);
  };
  const add = () => {
    addItems(quantity);
    setQuantity(0);
  };

  const title = data.title;
  // const description = data.description;
  const url = data.image;
  const price = data.price;
  const rating = data.rating.rate;
  const reviewCount = data.rating.count;

  return (
    <div className={card.card}>
      <img src={url} alt="" />
      <p className={card.title}>{title}</p>
      <div className={card.priceRatingContainer}>
        <p className={card.text}>{`$${price}`}</p>
        <div className={card.reviewContainer}>
          <p className={card.text}>{`${rating}/5`}</p>
          <p className={card.text}>{`${reviewCount} reviews`}</p>
        </div>
      </div>
      {/* <p className={card.text}>{description}</p> */}
      <div className={card.inputContainer}>
        <div className={card.incrementContainer}>
          <div className={card.quantityContainer}>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <button className={card.controlBtn} onClick={increase}>
              +
            </button>
            <button className={card.controlBtn} onClick={decrease}>
              -
            </button>
          </div>
        </div>
        <button className={card.addQuantityBtn} onClick={add}>
          Add
        </button>
      </div>
    </div>
  );
};

ShopCard.propTypes = {
  data: PropTypes.object,
  addItems: PropTypes.func,
};

export default ShopCard;

import { useState } from "react";
import card from "./card.module.css";
import PropTypes from "prop-types";

const ShopCard = ({ data, cart, addToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => {
    const newQuantity = quantity > 0 ? quantity - 1 : quantity;
    setQuantity(newQuantity);
  };
  const add = () => {
    if (quantity <= 0) {
      return;
    }

    const newCart = [...cart];

    // Check if item already exists
    let inCart = false;
    const len = newCart.length;
    for (let i = 0; i < len; i++) {
      const item = cart[i];
      if (item.id === id) {
        item.quantity += quantity;
        inCart = true;
        break;
      }
    }

    if (!inCart) {
      const newItem = {
        id,
        title,
        url,
        price,
        quantity,
      };
      newCart.push(newItem);
    }

    addToCart(newCart);
    setQuantity(0);
  };

  const id = data.id;
  const title = data.title;
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
      <div className={card.inputContainer}>
        <div className={card.incrementContainer}>
          <div className={card.quantityContainer}>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={0}
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
  cart: PropTypes.array,
  addToCart: PropTypes.func,
};

export default ShopCard;

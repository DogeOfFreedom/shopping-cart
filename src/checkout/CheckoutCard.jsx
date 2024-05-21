import checkout from "./checkout.module.css";
import PropTypes from "prop-types";

const CheckoutCard = ({ title, url, price, quantity }) => {
  return (
    <div className={checkout.checkoutCard}>
      <div className={checkout.detailsContainer}>
        <span className={checkout.cardTitle}>{title}</span>
        <div>
          <span className={checkout.cardText}>{`$${price}`}</span>
          <span className={checkout.cardText}>{`Quantity: ${quantity}`}</span>
        </div>
      </div>
      <img className={checkout.cardImg} src={url} alt={`${title}`} />
    </div>
  );
};

CheckoutCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  price: PropTypes.number,
  quantity: PropTypes.number,
};

export default CheckoutCard;

import PropTypes from "prop-types";
import checkout from "./checkout.module.css";
import CheckoutCard from "./CheckoutCard";
import { useRef } from "react";
import { useEffect } from "react";

const Checkout = ({ show, closeCheckout, cart }) => {
  const ref = useRef();

  let total =
    cart.length > 0
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;

  useEffect(() => {
    if (show) {
      ref.current.showModal();
      ref.current.classList.add(checkout.slideIn);
    } else {
      ref.current.close();
    }
  }, [show]);

  const close = () => {
    ref.current.classList.remove(checkout.slideIn);
    setTimeout(closeCheckout, 300);
  };

  return (
    <dialog
      ref={ref}
      className={`${checkout.checkoutModal} ${!show && checkout.slideOut}`}
    >
      <h1 className={checkout.title}>Items</h1>
      <div className={checkout.itemsContainer}>
        {cart.map((item) => (
          <CheckoutCard
            key={item.id}
            title={item.title}
            url={item.url}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <hr />
      <div className={checkout.receiptContainer}>
        <span>Total</span>
        <span>{`$${total}`}</span>
      </div>
      <button className={`${checkout.btn} ${checkout.paymentBtn}`}>
        Finish Payment
      </button>
      <button
        onClick={close}
        className={`${checkout.btn} ${checkout.cancelBtn}`}
      >
        Cancel
      </button>
    </dialog>
  );
};

Checkout.propTypes = {
  show: PropTypes.bool,
  cart: PropTypes.array,
  closeCheckout: PropTypes.func,
};

export default Checkout;

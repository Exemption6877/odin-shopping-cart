import styles from "./CartShortcut.module.css";
import PropTypes from "prop-types";

CartShortcut.propTypes = {
  amoun: PropTypes.number.isRequired,
  setShowCart: PropTypes.func.isRequired,
};

export default function CartShortcut({ amount, setShowCart }) {
  const icon = "./icons/shop/cart.svg";

  return (
    <a className={styles.mainCircle} onClick={() => setShowCart(true)}>
      <img src={icon} alt="cart icon" />
      <div className={styles.redCircle}>
        <p>{amount}</p>
      </div>
    </a>
  );
}

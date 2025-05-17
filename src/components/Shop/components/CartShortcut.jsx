import { Link } from "react-router-dom";
import styles from "./CartShortcut.module.css";

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

import { Link } from "react-router-dom";
import styles from "./CartShortcut.module.css";

export default function CartShortcut({ amount }) {
  const icon = "./icons/shop/cart.svg";

  return (
    <Link to="/cart" className={styles.mainCircle}>
      <img src={icon} alt="cart icon" />
      <div className={styles.redCircle}>
        <p>{amount}</p>
      </div>
    </Link>
  );
}

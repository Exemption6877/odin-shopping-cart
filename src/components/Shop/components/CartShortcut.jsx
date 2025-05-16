import { Link } from "react-router-dom";
import styles from "./CartShortcut.module.css";

export default function CartShortcut() {
  const icon = "./icons/shop/cart.svg";

  return (
    <Link to="/" className={styles.mainCircle}>
      <img src={icon} alt="cart icon" />
      <div className={styles.redCircle}>
        <p>1</p>
      </div>
    </Link>
  );
}

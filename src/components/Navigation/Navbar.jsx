import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <img src="./logo.svg" alt="logo" />
        <h2>The Clothing Shop</h2>
      </div>

      <div className={styles.links}>
        <Link to={"/shop"}>Shop</Link>
        <Link to={"/"}>Home</Link>
      </div>
    </div>
  );
}

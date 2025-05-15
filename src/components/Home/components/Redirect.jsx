import { Link } from "react-router-dom";
import styles from "./Redirect.module.css";

export default function Redirect() {
  return (
    <>
      <div className={styles.imgBg}>
        <div className={styles.block}>
          <h3>Your next favorite outfit is waiting.</h3>
          <Link to="/shop">Shop now</Link>
        </div>
      </div>
    </>
  );
}

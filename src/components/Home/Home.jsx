import { Link } from "react-router-dom";
import Reviews from "./components/Reviews";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.imgBg}>
        <div className={styles.motivator}>
          <h1>Some random text</h1>
          <Link to="/shop">Shop now</Link>
        </div>
      </div>
      <Reviews />
      <div className="points"></div>
      <div className="leave-review"></div>
    </div>
  );
}

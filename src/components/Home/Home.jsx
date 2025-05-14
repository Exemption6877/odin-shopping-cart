import { Link } from "react-router-dom";
import Reviews from "./components/Reviews";
import Advantages from "./components/Advantages";
import Subscription from "./components/Subscription";
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
      <Advantages />
      <Subscription />
    </div>
  );
}

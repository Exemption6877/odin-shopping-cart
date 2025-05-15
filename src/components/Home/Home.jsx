import { Link } from "react-router-dom";
import Reviews from "./components/Reviews";
import Advantages from "./components/Advantages";
import Subscription from "./components/Subscription";
import Redirect from "./components/Redirect";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <Redirect />
      <Advantages />
      <Reviews />
      <Subscription />
    </div>
  );
}

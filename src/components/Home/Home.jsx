import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";

export default function Home() {
  const FetchLocalReviews = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch("../../../data/Home/reviews.json")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch reviews");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    return { error, loading, data };
  };

  const { error, loading, data } = FetchLocalReviews();
  console.log(data);

  return (
    <div className={styles.home}>
      <div className={styles.imgBg}>
        <div className={styles.motivator}>
          <h1>Some random text</h1>
          <Link to="/shop">Shop now</Link>
        </div>
        <div className="points"></div>
        <div className="reviews"></div>
        <div className="leave-review"></div>
      </div>
    </div>
  );
}

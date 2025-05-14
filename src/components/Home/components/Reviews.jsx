import { useEffect, useState } from "react";
import styles from "./Reviews.module.css";

export default function Reviews() {
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

  function scoreToEmoji(score) {
    return "⭐️".repeat(score);
  }

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    data && (
      <div className={styles.reviews}>
        {data.map((person) => (
          <div className={styles.reviewsEntry} key={person.id}>
            <img src={person.photo} alt={`${person.name} photo`} />
            <p>{person.name}</p>
            <p>{scoreToEmoji(person.score)}</p>
            <p>{person.review}</p>
          </div>
        ))}
      </div>
    )
  );
}

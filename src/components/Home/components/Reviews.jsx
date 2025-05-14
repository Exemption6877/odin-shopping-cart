import useFetch from "../../../../hooks/useFetch";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const { error, loading, data } = useFetch(
    "../../../../data/Home/reviews.json"
  );

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

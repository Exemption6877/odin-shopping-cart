import useFetch from "../../../../hooks/useFetch";
import styles from "./Reviews.module.css";

export default function Reviews() {
  const { error, loading, data } = useFetch("./data/Home/reviews.json");

  function scoreToEmoji(score) {
    return "⭐️".repeat(score);
  }

  return (
    <div className={styles.reviews}>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {data &&
        data.map((person) => (
          <div className={styles.reviewsEntry} key={person.id}>
            <img src={person.photo} alt={`${person.name} photo`} />
            <h4>{person.name}</h4>
            <p>{scoreToEmoji(person.score)}</p>
            <p>{person.review}</p>
          </div>
        ))}
    </div>
  );
}

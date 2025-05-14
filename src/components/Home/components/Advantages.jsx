import useFetch from "../../../../hooks/useFetch";
import styles from "./Advantages.module.css";

export default function Advantages() {
  const { error, loading, data } = useFetch(
    "../../../../data/Home/advantages.json"
  );

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;

  return (
    data && (
      <div className={styles.advantages}>
        {data.map((entry) => (
          <div className={styles.advantagesEntry} key={entry.id}>
            <div className={styles.title}>
              <img src={entry.icon} alt="advantage icon" />
              <p>{entry.title}</p>
            </div>
            <p>{entry.description}</p>
          </div>
        ))}
      </div>
    )
  );
}

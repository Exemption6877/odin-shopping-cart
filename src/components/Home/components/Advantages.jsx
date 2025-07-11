import useFetch from "../../../../hooks/useFetch";
import styles from "./Advantages.module.css";

export default function Advantages() {
  const { error, loading, data } = useFetch("./data/Home/advantages.json");

  return (
    <div className={styles.advantages}>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {data &&
        data.map((entry) => (
          <div className={styles.advantagesEntry} key={entry.id}>
            <div className={styles.title}>
              <img src={entry.icon} alt="advantage icon" />
              <h3>{entry.title}</h3>
            </div>
            <p>{entry.description}</p>
          </div>
        ))}
    </div>
  );
}

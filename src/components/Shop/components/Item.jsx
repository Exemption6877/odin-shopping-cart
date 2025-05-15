import styles from "./Item.module.css";

export default function Item({ item }) {
  return (
    <div className={styles.item} key={item.id}>
      <img src={item.images} />
      <div className={styles.title}>
        <h4>{item.title}</h4>
        <h4>${item.price}</h4>
      </div>
    </div>
  );
}

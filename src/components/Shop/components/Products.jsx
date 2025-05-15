import Item from "./Item";
import styles from "./Products.module.css";

export default function Products({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

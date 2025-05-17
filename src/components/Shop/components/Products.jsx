import Item from "./Item";
import styles from "./Products.module.css";

export default function Products({ products, setProducts }) {
  return (
    <div className={styles.grid}>
      {products.map((item) => (
        <Item product={item} setProducts={setProducts} key={item.id} />
      ))}
    </div>
  );
}

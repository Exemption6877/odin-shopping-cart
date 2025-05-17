import styles from "./Item.module.css";
import ItemCounter from "./ItemCounter";

export default function Item({ product, setProducts }) {
  function updateProducts(updatedAmount) {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, amount: updatedAmount } : item
      )
    );
  }

  return (
    <div className={styles.item} key={product.id}>
      <img src={product.images} />
      <div className={styles.title}>
        <h4>{product.title}</h4>
        <h4>${product.price}</h4>
      </div>
      <ItemCounter amount={product.amount} setAmount={updateProducts} />
    </div>
  );
}

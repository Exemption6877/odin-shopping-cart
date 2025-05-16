import styles from "./Shop.module.css";
import useFetch from "../../../hooks/useFetch";
import Products from "./components/Products";
import CartShortcut from "./components/CartShortcut";

export default function Shop() {
  const { error, loading, data } = useFetch(
    "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=0&limit=50"
  );

  return (
    <div className={styles.shop}>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && <Products items={data} />}
      <CartShortcut />
    </div>
  );
}

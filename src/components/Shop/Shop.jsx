import styles from "./Shop.module.css";
import useFetch from "../../../hooks/useFetch";
import Products from "./components/Products";
import CartShortcut from "./components/CartShortcut";
import { useState } from "react";
import { useEffect } from "react";

export default function Shop() {
  const { error, loading, data } = useFetch(
    "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=0&limit=50"
  );

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(data.map((item) => ({ ...item, amount: 0 })));
    }
  }, [data]);

  return (
    <div className={styles.shop}>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && <Products products={products} setProducts={setProducts} />}
      <CartShortcut />
    </div>
  );
}

import styles from "./Shop.module.css";
import useFetch from "../../../hooks/useFetch";
import Products from "./components/Products";
import CartShortcut from "./components/CartShortcut";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "./components/Cart";
import Modal from "../Modal";

export default function Shop() {
  const { error, loading, data } = useFetch(
    "https://api.escuelajs.co/api/v1/products/?categoryId=1&offset=0&limit=50"
  );

  const [products, setProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [buy, setBuy] = useState(false);

  const placeholder = "./icons/shop/placeholder.svg";

  useEffect(() => {
    if (data && data.length > 0) {
      setProducts(
        data.map((item) => ({
          ...item,
          images:
            item.images[0] === "https://placehold.co/600x400"
              ? placeholder
              : item.images[0],
          amount: 0,
        }))
      );
    }
  }, [data]);

  console.log(data);

  function nulify() {
    setProducts(
      data.map((item) => ({
        ...item,
        amount: 0,
      }))
    );
  }

  function totalAmount(items) {
    return items.reduce((acc, item) => acc + item.amount, 0);
  }

  function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.amount * item.price, 0);
  }

  return (
    <div className={styles.shop}>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {buy && (
        <Modal
          message={`Thank you for your purchase! Your total is: $${totalPrice(
            products
          )}. Please  check your email!`}
          onClick={() => {
            setBuy(false);
            nulify();
          }}
        />
      )}

      {data && <Products products={products} setProducts={setProducts} />}
      {showCart ? (
        <Cart selected={products} setShowCart={setShowCart} setBuy={setBuy} />
      ) : null}
      <CartShortcut setShowCart={setShowCart} amount={totalAmount(products)} />
    </div>
  );
}

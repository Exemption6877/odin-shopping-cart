import styles from "./Cart.module.css";
import PropTypes from "prop-types";

Cart.propTypes = {
  selected: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      images: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
    })
  ).isRequired,
  setShowCart: PropTypes.func.isRequired,
  setBuy: PropTypes.func.isRequired,
};

export default function Cart({ selected, setShowCart, setBuy }) {
  const back_svg = "./icons/shop/back.svg";

  const totalValue = selected.reduce(
    (acc, item) => acc + item.amount * item.price,
    0
  );

  return (
    <>
      <div
        className={styles.background}
        onClick={() => setShowCart(false)}
      ></div>

      <div className={styles.cart}>
        <button className={styles.back} onClick={() => setShowCart(false)}>
          <img src={back_svg} alt="Go back" />
        </button>
        <div className={styles.grid}>
          <h2>Items</h2>
          {selected.length > 0 ? (
            selected.map((entry) =>
              entry.amount > 0 ? (
                <div key={entry.id} className={styles.item}>
                  <img src={entry.images} alt={entry.title} />
                  <p>{entry.title}</p>
                  <div className={styles.purchaseDetails}>
                    <h4>{entry.amount}x</h4>
                    <h4>${entry.price}</h4>
                  </div>
                </div>
              ) : null
            )
          ) : (
            <p>No entries yet!</p>
          )}
          <h3 className={styles.total}>Total: ${totalValue}</h3>
          <button
            className={styles.submit}
            onClick={() => {
              setShowCart(false);
              setBuy(true);
            }}
          >
            Submit!
          </button>
        </div>
      </div>
    </>
  );
}

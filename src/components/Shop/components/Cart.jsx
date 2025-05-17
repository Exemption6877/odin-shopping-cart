import styles from "./Cart.module.css";

export default function Cart({ selected, setShowCart }) {
  return (
    <>
      <div
        className={styles.background}
        onClick={() => setShowCart(false)}
      ></div>
      <div className={styles.cart}>
        <div className={styles.grid}>
          {selected.length > 0 ? (
            selected.map((entry) =>
              entry.amount > 0 ? (
                <div key={entry.id} className={styles.item}>
                  <img src={entry.images} alt={entry.title} />
                  <p>{entry.title}</p>
                  <h4>${entry.price}</h4>
                  <h4>Amount: {entry.amount}</h4>
                </div>
              ) : null
            )
          ) : (
            <p>No entries yet!</p>
          )}
        </div>
      </div>
    </>
  );
}

import styles from "./Cart.module.css";

export default function Cart({ selected, setShowCart }) {
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
          <button className={styles.submit}>Submit!</button>
        </div>
      </div>
    </>
  );
}

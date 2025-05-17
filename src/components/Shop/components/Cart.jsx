import styles from "./Cart.module.css";

export default function Cart({ selected }) {
  return (
    <div className="cart">
      <div className="grid">
        {selected.length > 0 ? (
          selected.map((entry) => (
            <div key={entry.data.id}>
              <img src={entry.data.images?.[0]} alt={entry.data.title} />
              <p>{entry.data.title}</p>
              <h4>${entry.data.price}</h4>
              <h4>Amount: {entry.amount}</h4>
            </div>
          ))
        ) : (
          <p>No entries yet!</p>
        )}
      </div>
    </div>
  );
}

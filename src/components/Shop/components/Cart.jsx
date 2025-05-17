import styles from "./Cart.module.css";

export default function Cart({ selected }) {
  return (
    <div className="cart">
      <div className="grid">
        {selected.map((entry) => (
          <div key={entry.id}>
            <img src={entry.images} />
            <p>{entry.title}</p>
            <h4>{entry.price}</h4>
            <h4>amount</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

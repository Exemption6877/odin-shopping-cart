import styles from "./ItemCounter.module.css";
import { useState } from "react";

export default function ItemCounter() {
  const [amount, setAmount] = useState(0);

  function handleClick(e) {
    e.preventDefault();
    const value = e.target.value;

    if (value === "-") {
      const output = amount - 1;
      output < 0 ? setAmount(0) : setAmount(formatNumber(output));
    }

    if (value === "+") {
      const output = amount + 1;
      setAmount(formatNumber(output));
    }
  }

  function formatNumber(num) {
    let string = num.toString();
    if (string.length > 1 && string[0] === "0") {
      string = string.slice(1, string.length);
    }

    let toInt = Number.parseInt(string);
    return toInt;
  }

  function handleTyping(e) {
    const value = e.target.value;
    const number = Number(value);

    console.log(value);
    if (Number.isInteger(number)) {
      setAmount(formatNumber(number));
    }
  }

  return (
    <form className={styles.counter}>
      <button value="-" onClick={handleClick}>
        -
      </button>
      <input
        className={styles.number}
        type="number"
        name="counter"
        id="counter"
        value={amount}
        onChange={handleTyping}
      />
      <button value="+" onClick={handleClick}>
        +
      </button>
    </form>
  );
}

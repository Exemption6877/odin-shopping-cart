import styles from "./ItemCounter.module.css";
import PropTypes from "prop-types";

ItemCounter.PropTypes = {
  amount: PropTypes.number.isRequired,
  setAmount: PropTypes.func.isRequired,
};

export default function ItemCounter({ amount, setAmount }) {
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
      <button className={styles.minus} value="-" onClick={handleClick}>
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
      <button className={styles.plus} value="+" onClick={handleClick}>
        +
      </button>
    </form>
  );
}

import { useState } from "react";
import styles from "./Subscription.module.css";

export default function Subscription() {
  const [input, setInput] = useState("");

  function handleTyping(e) {
    setInput(e.target.value);
  }

  // show window on submit, with ability to close it.

  return (
    <div className={styles.subscription}>
      <div className={styles.block}>
        <h2>Subscribe to our weekly letters!</h2>
        <form className={styles.formSubscription}>
          <input type="email" onChange={handleTyping} value={input}></input>
          <input type="submit" value="submit" />
        </form>
      </div>
    </div>
  );
}

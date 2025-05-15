import { useState } from "react";
import styles from "./Subscription.module.css";
import Modal from "../../Modal";

export default function Subscription() {
  const [input, setInput] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleTyping(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const buttonValue = e.currentTarget.value;

    if (buttonValue === "submit") {
      setShowModal(true);
    }

    if (buttonValue === "close" || e.target.dataset.id == "focus") {
      setShowModal(false);
    }
  }

  return (
    <>
      {showModal ? (
        <Modal
          className={styles.email}
          message={"Test message"}
          onClick={handleClick}
        />
      ) : null}
      <div className={styles.subscription}>
        <div className={styles.block}>
          <h2>Subscribe to our weekly letters!</h2>
          <form className={styles.formSubscription}>
            <input type="email" onChange={handleTyping} value={input}></input>
            <input type="submit" value="submit" onClick={handleClick} />
          </form>
        </div>
      </div>
    </>
  );
}

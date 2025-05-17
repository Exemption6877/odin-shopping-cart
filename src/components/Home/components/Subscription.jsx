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
          message={"Thank you for subscribing! Please check your inbox!"}
          onClick={handleClick}
        />
      ) : null}

      <div className={styles.subscription}>
        <h2>Subscribe to our weekly letters!</h2>
        <form className={styles.formSubscription}>
          <input
            type="email"
            onChange={handleTyping}
            value={input}
            placeholder="example@mail.com"
          ></input>
          <input type="submit" value="submit" onClick={handleClick} />
        </form>
      </div>
    </>
  );
}

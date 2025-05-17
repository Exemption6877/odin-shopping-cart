import styles from "./Modal.module.css";
import PropTypes from "prop-types";

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default function Modal({ className, onClick, message }) {
  const icon = "./icons/close.svg";

  return (
    <>
      <div className={styles.focus} data-id="focus" onClick={onClick}>
        <div className={`${styles.modal} ${className}`}>
          <button onClick={onClick} value="close">
            <img src={icon} alt="Close icon" />
          </button>
          <p>{message}</p>
        </div>
      </div>
    </>
  );
}

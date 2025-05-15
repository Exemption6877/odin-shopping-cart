import styles from "./Footer.module.css";

export default function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  // Links are nonfunctional and serve esthetical purpose
  return (
    <footer className={styles.footer}>
      <div className={styles.main}>
        <div className={styles.pageLinks}>
          <a href="">Blog</a>
          <a href="">Terms and Conditions</a>
          <a href="">Become an Affiliate</a>
          <a href="">Product Index</a>
          <a href="">Category Index</a>
        </div>
        <div className={styles.media}>
          <h3>Follow Us!</h3>
          <div className={styles.wrapper}>
            <a href="">
              <img src="./icons/instagram.svg" alt="Instagram page" />
            </a>
            <a href="">
              <img src="./icons/linkedin.svg" alt="LinkedIn page" />
            </a>
            <a href="">
              <img src="./icons/youtube.svg" alt="Youtube channel" />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>
          Copyright
          <span> {CURRENT_YEAR}. </span>
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

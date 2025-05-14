import { Outlet } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  // I will put footer, topnavbar here
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>Nav here</nav>
      <main className={styles.main}>
        <Outlet />
      </main>
      <footer className={styles.footer}>Footer here</footer>
    </div>
  );
}

export default App;

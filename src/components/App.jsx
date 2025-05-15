import { Outlet } from "react-router-dom";
import Footer from "./Navigation/Footer";
import styles from "./App.module.css";

function App() {
  // I will put footer, topnavbar here
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>Nav here</nav>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

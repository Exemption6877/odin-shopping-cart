import { Outlet } from "react-router-dom";
import Footer from "./Navigation/Footer";
import styles from "./App.module.css";
import Navbar from "./Navigation/Navbar";

function App() {
  // I will put footer, topnavbar here
  return (
    <div className={styles.app}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import { Outlet } from "react-router-dom";

function App() {
  // I will put footer, topnavbar here
  return (
    <>
      <nav>Nav here</nav>
      <Outlet />
      <footer>Footer here</footer>
    </>
  );
}

export default App;

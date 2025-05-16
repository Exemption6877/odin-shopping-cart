import App from "./App";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";
import Cart from "./Cart/Cart";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;

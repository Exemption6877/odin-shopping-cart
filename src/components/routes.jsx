import App from "./App";
import Shop from "./Shop/Shop";
import Home from "./Home/Home";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "shop", element: <Shop /> },
    ],
  },
];

export default routes;

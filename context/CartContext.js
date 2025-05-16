import { createContext } from "react";

const CartContext = createContext({
  selected: [],
  setSelected: () => {},
});
export default CartContext;

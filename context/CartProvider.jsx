import { useState } from "react";
import CartContext from "./CartContext";

export function CartProvider({ children }) {
  const [data, setData] = useState([]);

  return (
    <CartContext.Provider value={{ data, setData }}>
      {children}
    </CartContext.Provider>
  );
}

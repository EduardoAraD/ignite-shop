import { useContext } from "react";

import { ShoppingContext } from "../context/shopppingContext";

export function useShopping() {
  return useContext(ShoppingContext)
}

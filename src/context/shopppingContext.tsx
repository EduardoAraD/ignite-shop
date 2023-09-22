import { ReactNode, createContext, useState } from "react";

interface ShoppingContextProps {
  listProduct: ProductItem[];
  addProductByList: (product: ProductItem) => void;
  removeProductByList: (priceId: string) => void;
  clearShopList: () => void;
}

interface ShoppingProviderProps {
  children: ReactNode
}

export const ShoppingContext = createContext({} as ShoppingContextProps);

export function ShoppingProvider({ children }: ShoppingProviderProps) {
  const [listProduct, setListProduct] = useState<ProductItem[]>([])

  function addProductByList(product: ProductItem) {
    if(product) {
      setListProduct(state => [...state, product])
    }
  }

  function removeProductByList(idProduct: string) {
    setListProduct(state => state.filter(product => product.id !== idProduct))
  }

  function clearShopList() {
    setListProduct([]);
  }

  return (
    <ShoppingContext.Provider value={{
      listProduct,
      addProductByList,
      removeProductByList,
      clearShopList,
    }}>
      {children}
    </ShoppingContext.Provider>
  )
}

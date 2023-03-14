import { createContext, ReactNode, useState } from "react";

export interface ProductType {
  id: string, 
  name: string,
  imageUrl: string,
  price: number,
}

interface ProductContextType{
  newProductBag: ProductType[]
  creatNewProductBag: (product: ProductType) => void 
}

interface ProductContetexProviderProps {
  children: ReactNode
}
export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContetexProviderProps) {

  const [newProductBag, setNewProductBag] = useState<ProductType[]>([])

  function creatNewProductBag(Product: ProductType) {

    const orderAlreadyExist = newProductBag.findIndex((productBag) => {
      return productBag.id === Product.id
    })

    if (orderAlreadyExist >= 0) {
      setNewProductBag((state) =>
        state.map((item) => {
          if (Product.id === item.id) {
            return {
              ...item,
              // quantity: item.quantity + coffe.quantity,
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setNewProductBag((state) => [...state, Product])
    }
  }

  return(
    <ProductContext.Provider value={{creatNewProductBag,newProductBag}}>
      {children}
    </ProductContext.Provider>
  )

}

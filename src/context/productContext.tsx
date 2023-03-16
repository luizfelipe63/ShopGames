import axios from "axios";
import { createContext, ReactNode, useState } from "react";

export interface ProductType {
  id: string, 
  name: string,
  imageUrl: string,
  price: number,
  numberPrice: number,
  description?: string,
  defaultPriceId?: string
}

interface ProductContextType{
  newProductBag: ProductType[]
  QuantityItems: number
  ItemsValue: number
  creatNewProductBag: (product: ProductType) => void 
  DeleteProductBag: (id: string) => void
}

interface ProductContetexProviderProps {
  children: ReactNode
}
export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContetexProviderProps) {

  const [newProductBag, setNewProductBag] = useState<ProductType[]>([])
 

  const QuantityItems = newProductBag.length

  
  const ItemsValue = newProductBag.reduce((total, valorAtual) => {
    return (total + valorAtual.numberPrice)
  }, 0)

  

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

  function DeleteProductBag(id: string) {
    const ProductBagWhithoutDeleteOne = newProductBag.filter((product) => {
      return product.id !== id
    })

    setNewProductBag(ProductBagWhithoutDeleteOne)
  }

  return(
    <ProductContext.Provider value={{
      creatNewProductBag, 
      DeleteProductBag,
      newProductBag,
      QuantityItems,
      ItemsValue
      }}>
      {children}
    </ProductContext.Provider>
  )

}

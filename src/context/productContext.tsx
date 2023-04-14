import { createContext, ReactNode, useState } from 'react'

export interface ProductType {
  id: number
  name: string
  imageUrl: string
  Price: number
  realeased: string
  description: string
  numberPrice: number
}

interface ProductContextType {
  newProductBag: ProductType[]
  QuantityItems: number
  ItemsValue: number
  creatNewProductBag: (product: ProductType) => void
  DeleteProductBag: (id: number) => void
}

interface ProductContetexProviderProps {
  children: ReactNode
}
export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({
  children,
}: ProductContetexProviderProps) {
  const [newProductBag, setNewProductBag] = useState<ProductType[]>([])

  const QuantityItems = newProductBag.length

  const ItemsValue = newProductBag.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function creatNewProductBag(games: ProductType) {
    const orderAlreadyExist = newProductBag.findIndex((productBag) => {
      return productBag.id === games.id
    })

    if (orderAlreadyExist >= 0) {
      setNewProductBag((state) =>
        state.map((item) => {
          if (games.id === item.id) {
            return {
              ...item,
            }
          } else {
            return item
          }
        }),
      )
    } else {
      setNewProductBag((state) => [...state, games])
    }
  }

  function DeleteProductBag(id: number) {
    const ProductBagWhithoutDeleteOne = newProductBag.filter((product) => {
      return product.id !== id
    })

    setNewProductBag(ProductBagWhithoutDeleteOne)
  }

  return (
    <ProductContext.Provider
      value={{
        newProductBag,
        QuantityItems,
        ItemsValue,
        creatNewProductBag,
        DeleteProductBag,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

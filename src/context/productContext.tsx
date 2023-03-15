import axios from "axios";
import { createContext, ReactNode, useState } from "react";

export interface ProductType {
  id: string, 
  name: string,
  imageUrl: string,
  price: string,
  description?: string,
  defaultPriceId?: string
}

interface ProductContextType{
  newProductBag: ProductType[]
  QuantityItems: number
  creatNewProductBag: (product: ProductType) => void 
  BuyProduct: () => void
  DeleteProductBag: (id: string) => void
}

interface ProductContetexProviderProps {
  children: ReactNode
}
export const ProductContext = createContext({} as ProductContextType)

export function ProductContextProvider({ children }: ProductContetexProviderProps) {

  const [newProductBag, setNewProductBag] = useState<ProductType[]>([])
  const [isCreatCheckoutSession, setIsCreatCheckoutSession] = useState(false)

  const QuantityItems = newProductBag.length

  async function BuyProduct(){

    const pricesId = newProductBag.map((product: ProductType) => {
      return {
        price: product.defaultPriceId,
        // quantity: product.quantity,
      };
    });

    try{
      setIsCreatCheckoutSession(true)

      const reponse = await axios.post('/api/checkout', {
        pricesId
      })

      const {checkoutUrl} = reponse.data

      window.location.href = checkoutUrl
    }catch(error){
      setIsCreatCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

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

  function DeleteProductBag(id: string) {
    const ProductBagWhithoutDeleteOne = newProductBag.filter((product) => {
      return product.id !== id
    })

    setNewProductBag(ProductBagWhithoutDeleteOne)
  }

  return(
    <ProductContext.Provider value={{
      creatNewProductBag, 
      BuyProduct,
      DeleteProductBag,
      newProductBag,
      QuantityItems
      }}>
      {children}
    </ProductContext.Provider>
  )

}

import { useContext } from "react";
import { ProductContext, ProductType } from "../../context/productContext";
import { Card, CardContainer, CardDescription } from "./styles";

interface ProductBagProps{
  ProductBag: ProductType
}

export function ProductBag({ProductBag}: ProductBagProps){

  const { DeleteProductBag } = useContext(ProductContext)

  function handleDeleteProductBag(){
    DeleteProductBag(ProductBag.id)
  }

  
  return(
    <CardContainer>
      <Card 
      css={{
          backgroundImg: ProductBag.imageUrl, 
          backgroundPosition: 'top center', 
          backgroundSize:"cover"
      }}>
        
      </Card>
      <CardDescription>
        <span>{ProductBag.name}</span>
        <span>{ProductBag.price}</span>
        <button onClick={handleDeleteProductBag}>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
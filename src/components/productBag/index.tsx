import { useContext } from "react";
import { ProductContext, ProductType } from "../../context/productContext";
import { Card, CardContainer, CardDescription } from "./styles";
import Image from "next/image";

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
            backgroundPosition: 'center', 
            backgroundSize:"cover"
        }}>
      </Card>
      <CardDescription>
        <span>{ProductBag.name}</span>
        <span>
          { new Intl.NumberFormat('pt-BR',{
            style: 'currency',
            currency: 'BRL',
            }).format(ProductBag.numberPrice)}
        </span>
        <button onClick={handleDeleteProductBag}>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
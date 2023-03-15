import Image from "next/image";
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
      <Card>
        <Image src={ProductBag.imageUrl} alt="" width={90} height={90}/>
      </Card>
      <CardDescription>
        <span>{ProductBag.name}</span>
        <strong>{ProductBag.price}</strong>
        <button onClick={handleDeleteProductBag}>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
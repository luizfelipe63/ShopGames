import Image from "next/image";
import { ProductType } from "../../context/productContext";
import { Card, CardContainer, CardDescription } from "./styles";

interface ProductBagProps{
  ProductBag: ProductType
}

export function ProductBag({ProductBag}: ProductBagProps){

  
  return(
    <CardContainer>
      <Card>
        <Image src={ProductBag.imageUrl} alt="" width={90} height={90}/>
      </Card>
      <CardDescription>
        <span>{ProductBag.name}</span>
        <strong>{ProductBag.price}</strong>
        <button>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
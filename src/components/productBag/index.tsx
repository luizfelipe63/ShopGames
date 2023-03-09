import Image from "next/image";
import camiseta from '../../assets/camisetas/1.png'
import { Card, CardContainer, CardDescription } from "./styles";

export function ProductBag(){
  return(
    <CardContainer>
      <Card>
        <Image src={camiseta} alt="" width={90} height={90}/>
      </Card>
      <CardDescription>
        <span>Camiseta Beyond the Limits</span>
        <strong>79,90</strong>
        <button>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
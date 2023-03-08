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
        <p>Camiseta Beyond the Limits</p>
        <span>79,90</span>
        <button>Remover</button>
      </CardDescription>
    </CardContainer>
  )
}
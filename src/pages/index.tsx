import Image from "next/image";
import { HomeContainer, Products } from "../styles/pages/home";
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'


export default function Home() {
  return (
    <HomeContainer>
      <Products>
        <Image src={camiseta1} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products>
        <Image src={camiseta2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}

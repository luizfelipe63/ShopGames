import { Container, LogoGames, NavgationContent,} from "./styles";
import Image from 'next/image'
import Logo from '../../assets/Logo-games.svg'
import { ChartBar, Crown, Handbag, Trophy } from 'phosphor-react'
import { ShoopingBag } from '../../components/shoopingBag'
import { useContext } from 'react'
import { ProductContext } from "../../context/productContext";
import Link from "next/link";

export function Navigation() {
  const {QuantityItems} = useContext(ProductContext)
  
  return (
      <Container>
        <LogoGames>
          <Image src={Logo} alt="" width={130}/>
        </LogoGames>
        <NavgationContent>
          <Link href={'/'}>
            <h2>Home</h2>
          </Link>
          <h3>Top</h3>
          <button>
            <div>
              <Trophy size={24}/>
            </div>
            Best of the year
          </button>
          <button>
            <div>
              <ChartBar size={24}/>
            </div>
            Popular in 2022
          </button>
          <button>
            <div>
              <Crown size={24}/>
            </div>
            All time 250
          </button>
        </NavgationContent>
        <footer>
          <span>Criado pro <a href="">Luiz Felipe</a></span>
          <span>Dados da <a href="">API Rawg</a></span>
        </footer>
      </Container>
  )
}
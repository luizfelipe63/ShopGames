import {
  Container,
  Genres,
  LogoGames,
  MenuButton,
  NavgationContent,
} from './styles'
import Image from 'next/image'
import Logo from '../../assets/Logo-games.svg'
import { ChartBar, Crown, List, Trophy, X } from 'phosphor-react'
import Link from 'next/link'
import { useState } from 'react'

export function Navigation() {
  const [isMenuExpanded, setIsMenuExpanded] = useState(false)

  return (
    <Container>
      <Link href={'/'}>
        <LogoGames>
          <Image src={Logo} alt="" width={130} />
        </LogoGames>
      </Link>
      <MenuButton
        onClick={() => {
          setIsMenuExpanded(!isMenuExpanded)
        }}
      >
        {isMenuExpanded ? <X size={24} /> : <List size={24} />}
      </MenuButton>
      <NavgationContent Responsive={isMenuExpanded ? 'mobile' : null}>
        <Link href={'/'}>
          <h2>Home</h2>
        </Link>
        <h3>Top</h3>
        <Genres>
          <button>
            <div>
              <Trophy size={24} />
            </div>
            Melhor do ano
          </button>
          <button>
            <div>
              <ChartBar size={24} />
            </div>
            Popular em 2022
          </button>
          <button>
            <div>
              <Crown size={24} />
            </div>
            Os 250 melhores
          </button>
        </Genres>
      </NavgationContent>
      <footer>
        <span>
          Criado pro{' '}
          <a
            href="https://github.com/luizfelipe63"
            target={'_blank'}
            rel="noreferrer"
          >
            Luiz Felipe
          </a>
        </span>
        <span>
          Dados da{' '}
          <a href="https://rawg.io/" target={'_blank'} rel="noreferrer">
            API Rawg
          </a>
        </span>
      </footer>
    </Container>
  )
}

import { GetStaticProps } from 'next'
import {
  BgImgProduct,
  HeaderContent,
  HomeContainer,
  HomeContent,
  LoadPresetation,
  Products,
} from '../styles/pages/home'
import { RawgAPI } from '../lib/axios'

import Head from 'next/head'
import { Plus } from 'phosphor-react'
import { useContext } from 'react'
import { ProductContext, ProductType } from '../context/productContext'

import Link from 'next/link'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/autoplay'
import 'swiper/css'

interface HomeProps {
  games: ProductType[]
}

export default function Home({ games }: HomeProps) {
  const { creatNewProductBag } = useContext(ProductContext)

  const handleCreatProductBag = (game: ProductType) => {
    creatNewProductBag({ ...game })
  }

  return (
    <>
      <Head>
        <title>Home | ShopGames</title>
      </Head>
      <HeaderContent>
        <Swiper
          modules={[Autoplay]}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop
          className="swiper-container"
        >
          {games.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <LoadPresetation
                  css={{
                    backgroundImg: item.imageUrl,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <h3>{item.name}</h3>
                </LoadPresetation>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </HeaderContent>
      <HomeContainer>
        <h1>Os Melhores</h1>
        <HomeContent>
          {games.map((item) => {
            return (
              <Products key={item.id}>
                <Link href={`/games/${item.id}`} prefetch={false}>
                  <BgImgProduct
                    css={{
                      backgroundImg: item.imageUrl,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                  ></BgImgProduct>
                </Link>

                <footer>
                  <div>
                    <button onClick={() => handleCreatProductBag(item)}>
                      Adicionar jogo
                      <Plus />
                    </button>
                    <span>
                      {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(item.numberPrice)}
                    </span>
                  </div>
                  <Link href={`/games/${item.id}`} prefetch={false}>
                    <h2>{item.name}</h2>
                  </Link>
                </footer>
              </Products>
            )
          })}
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const key = process.env.RAWG_KEY

  const response = await RawgAPI.get(`games?key=${key}`)

  const reponseResults = response.data.results

  const games = reponseResults.map((game) => {
    return {
      id: game.id,
      imageUrl: game.background_image,
      name: game.name,
      numberPrice: Math.floor(Math.random() * 15 + 1),
    }
  })

  return {
    props: {
      games,
    },
    revalidate: 60 * 60 * 2,
  }
}

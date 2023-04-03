import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import { ProductContext, ProductType } from '../../context/productContext'
import { RawgAPI } from '../../lib/axios'
import { 
  About,
  GameContent, 
  ImageProducts, 
  ProductsContainer, 
  ProductsDetails, 
  SwiperContainer 
} from '../../styles/pages/products'

import SwiperCore, { Autoplay, Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide,  } from 'swiper/react';


import 'swiper/css';
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "swiper/css/autoplay";
import { css } from '../../styles'

interface ProductsProps {
  gameResult:{
    id: string
    name: string
    imageUrl: string
    description: string,
  }, 
  genres:{
    name: string
  }[],
  platforms:{
    name: string
  }[],
  developers:{
    name: string
  }[],
  Screenshots:{
    Screechot: string
  }[]
}

export default function Product({gameResult, genres, platforms, developers, Screenshots}: ProductsProps) {
  SwiperCore.use([Autoplay]);
 

  const { creatNewProductBag } = useContext(ProductContext)

  // const handleCreatProductBag = (product: ProductsProps) => {
  //   creatNewProductBag({...product})
  // }
  
  const {isFallback} = useRouter()

  if(isFallback){
    return(
      <p>Loading...</p>
    )
  }


  return (
    <>
    <Head>
        <title>{gameResult.name} | ShopGames</title>
        
    </Head>
    <ProductsContainer>
      <h1>{gameResult.name}</h1>
      <GameContent>
        <SwiperContainer>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{clickable: true}}
            navigation={{hideOnClick: true }}
            slidesPerView={1}
            autoplay={{
                  delay: 2500,
                  pauseOnMouseEnter: true,
                  disableOnInteraction: false
                }}
            loop
            className='swiper-container'
          >
            
              {Screenshots.map(image => {
                return (
                  <SwiperSlide  key={image.Screechot}>
                  <ImageProducts css={{
                    backgroundImg: image.Screechot, 
                    backgroundPosition: 'center', 
                    backgroundSize: 'cover',
                    }}>
                  </ImageProducts>
                  </SwiperSlide>
                )
              })}
            
          </Swiper>
        </SwiperContainer>
        <ProductsDetails>
          <div>
            <h3>Plataforma</h3>
            <p>{platforms.map((g) => g.name).join(', ')}</p>
          </div>
          <div>
            <h3>Gênero</h3>
            <p>{genres.map((g) => g.name).join(', ')}</p>
          </div>
          <div>
            <h3>Desenvolvedores</h3>
            <p>{developers.map((g) => g.name).join(', ')}</p>
          </div>
          <button>Colocar na sacola</button>
        </ProductsDetails>
      </GameContent>
      <About>
            <h2>About</h2>
            {gameResult.description.split('$').map((p, index) => (
            <div key={index}>
              <p>
                {p}
              </p>
              <button>more</button>
            </div>
          ))}
      </About>
    </ProductsContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      {
        params : { id: '3498' }
      }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const key = process.env.RAWG_KEY

  const productId = params.id

  const [infoGame, screenshotResponse] = await Promise.all([
    RawgAPI.get(`games/${productId}?key=${key}`),
    RawgAPI.get(`games/${productId}/screenshots?key=${key}`)

  ])


  const gameResult = infoGame.data

  const Screenshots = screenshotResponse.data.results.map(image => {
    return {
      Screechot: image.image
    }
  })


  const genres = infoGame.data.genres.map(genre => {
    return {
      name: genre.name
    }
  })

  const platforms = infoGame.data.platforms.map(platform => {
    return {
      name: platform.platform.name
    }
  })

  const developers = infoGame.data.developers.map(developer => {
    return {
      name: developer.name
    }
  })

  return{
    props:{
      gameResult:{
        imageUrl: gameResult.background_image,
        description: gameResult.description_raw,
        name: gameResult.name,
        id: gameResult.id
      }, 
      genres,
      platforms, 
      developers,
      Screenshots
    },
    revalidate: 60 * 60 * 1
  }
}
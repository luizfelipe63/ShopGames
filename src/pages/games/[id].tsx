import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useContext, useState } from 'react'
import Stripe from 'stripe'
import { ProductContext, ProductType } from '../../context/productContext'
import { api } from '../../lib/axios'
import { stripe } from '../../lib/stripe'
import { GameContent, ImageProducts, ProductsContainer, ProductsDetails } from '../../styles/pages/products'


interface ProductsProps {
  gameResult:{
    id: string
    // alternative_names: number[]
    name: string
    imageUrl: string
    description: string
  }, 
  genres:{
    name: string
  }[],
  platforms:{
    name: string
  }[],
  developers:{
    name: string
  }[]
}

export default function Product({gameResult, genres, platforms, developers}: ProductsProps) {

  const { creatNewProductBag } = useContext(ProductContext)

  // const handleCreatProductBag = () => {
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
      <GameContent>
        <h1>{gameResult.name}</h1>
        <ImageProducts css={{
          backgroundImg: gameResult.imageUrl,
          backgroundPosition: 'center', 
          backgroundSize:"cover"
          }}>
        
        </ImageProducts>
        <div>
          <h2>About</h2>
          {gameResult.description.split('$').map((p, index) => (
          <p key={index}>{p}</p>
        ))}
        </div>
      </GameContent>
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


  const response = await api.get(`games/${productId}?key=${key}`)

  const gameResult = response.data

  const genres = response.data.genres.map(genre => {
    return {
      name: genre.name
    }
  })

  const platforms = response.data.platforms.map(platform => {
    return {
      name: platform.platform.name
    }
  })

  const developers = response.data.developers.map(developer => {
    return {
      name: developer.name
    }
  })

  return{
    props:{
      gameResult:{
        // alternative_names: gameResult.alternative_names[0],
        imageUrl: gameResult.background_image,
        description: gameResult.description_raw,
        name: gameResult.name,
        id: gameResult.id
      }, 
      genres,
      platforms, 
      developers
    },
    revalidate: 60 * 60 * 1
  }
}
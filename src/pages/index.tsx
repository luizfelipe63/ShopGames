import Image from "next/image";
import { GetStaticProps } from "next";
import { BackgroundPresetation, BgImgProduct, HomeContainer, HomeContent, Products } from "../styles/pages/home";
import { api } from "../lib/axios";



import Head from "next/head";
import { Plus } from "phosphor-react";
import { useContext } from "react";
import { ProductContext, ProductType } from "../context/productContext";


import bgbattifild from '../assets/battifild.jpg'

interface HomeProps {
  games:{
    id: number,
    imageUrl: string,
    name:string
  }[]
  
}

export default function Home({games}: HomeProps) {

  console.log(games)

  const {creatNewProductBag} = useContext(ProductContext)

  const handleCreatProductBag = (product: ProductType) => {
    creatNewProductBag({...product})
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
    <HomeContainer>
      <header>
        <BackgroundPresetation 
        css={{
          backgroundImg: bgbattifild.src, 
          backgroundPosition: 'top center', 
          backgroundSize:"cover"
        }}>
        </BackgroundPresetation>
      </header>
        <h1>New and trending</h1>
        <HomeContent>
        {games.map(item => {
          return(
            <Products key={item.id}>
            <BgImgProduct css={{
              backgroundImg: item.imageUrl, 
              backgroundPosition: 'center', 
              backgroundSize:"cover"
              }}>
            </BgImgProduct>
            <footer>
              <div>
                <button>
                  Add to cart
                  <Plus/>
                </button>
                <span>R$ 29,90</span>
              </div>
              <h2>{item.name}</h2>
            </footer>
          </Products>
          )
        })}
        </HomeContent>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const key = process.env.RAWG_KEY

  const response = await api.get(`games?key=${key}`)

  const reponseResults = response.data.results

  console.log(reponseResults)



  const games = reponseResults.map(product => {

    return{
      id: product.id,
      imageUrl: product.background_image,
      name: product.name, 
    }
  })

  return{
    props: {
      games
    },
    revalidate: 60 * 60 * 2
  }
}
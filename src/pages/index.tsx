import Image from "next/image";
import { GetStaticProps } from "next";
import { BackgroundPresetation, BgImgProduct, HomeContainer, HomeContent, Products } from "../styles/pages/home";
import { RawgAPI } from "../lib/axios";



import Head from "next/head";
import { Plus } from "phosphor-react";
import { useContext } from "react";
import { ProductContext, ProductType } from "../context/productContext";


import bgbattifild from '../assets/battifild.jpg'
import Link from "next/link";

interface HomeProps {
  games: ProductType[]
  
}

export default function Home({games}: HomeProps) {


  const {creatNewProductBag} = useContext(ProductContext)

  const handleCreatProductBag = (game: ProductType) => {
    creatNewProductBag({...game})
  }

  return (
    <>
      <Head>
        <title>Home | ShopGames</title>
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
          <Products
           key={item.id}
           >
            <Link  
                href={`/games/${item.id}`}
                prefetch={false}
              >
              <BgImgProduct css={{
                backgroundImg: item.imageUrl, 
                backgroundPosition: 'center', 
                backgroundSize:"cover"
                }}>
              </BgImgProduct>
            </Link>
            
            <footer>
              <div>
                <button onClick={() => handleCreatProductBag(item)}>
                  Add to cart
                  <Plus/>
                </button>
                <span>{item.price}</span>
              </div>
              <Link  
                href={`/games/${item.id}`}
                prefetch={false}
              >
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

export const getStaticProps: GetStaticProps = async() => {
  const key = process.env.RAWG_KEY

  const response = await RawgAPI.get(`games?key=${key}`)

  const reponseResults = response.data.results

  const games = reponseResults.map(game => {

    return{
      id: game.id,
      imageUrl: game.background_image,
      name: game.name, 
      price: 29.90
    }
  })

  return{
    props: {
      games
    },
    revalidate: 60 * 60 * 2
  }
}
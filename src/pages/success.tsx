import { GetServerSideProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { RawgAPI } from "../lib/axios";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageContent, SuccessContainer } from "../styles/pages/success";

import logoSuccess from '../assets/logo-game.svg'
import fifa18 from '../assets/fifa18.jpeg'
import batti from '../assets/battifild.jpg'



interface successProps{
  customerName: string
  Game:{
    name: string,
    imageUrl: string
  }
}

export default function Success({customerName, Game}: successProps ){

  const router = useRouter()
  const { id } = router.query
  
  return (
    <>
    
    <Head>
        <title>Compra efetuda | ShopGames</title>
        
        <meta name="robots" content="noindex" />
    </Head>

    <SuccessContainer>
      <Image src={logoSuccess} alt=""/>
      <ImageContainer>
        <ImageContent css={{
          backgroundImg: fifa18.src,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        
        </ImageContent>
        <ImageContent css={{
          backgroundImg: batti.src,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        
        </ImageContent>
      </ImageContainer>
      <h2>Compra efetuada!</h2>
      <p>
        Uhuul <strong>{customerName}</strong>, 
        sua compra dos seus 3 jogos já estão na sua biblioteca. 
      </p>

      <Link href='/'>
        Voltar à home
      </Link>
    </SuccessContainer>
    </>
  )
} 


export const getServerSideProps: GetServerSideProps = async ({query}) => {

  if(!query.session_id){
    return{
      redirect:{
        permanent: false,
        destination: '/'
      }
    }
  }

  const {id} = query

  const key = process.env.RAWG_KEY


 const Response =  await RawgAPI.get(`games/${id}?key=${key}`)

 const Game = Response.data 

 console.log(Game)

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product

  console.log(session.line_items.data)
  

  return{
    props:{
      customerName,
      Game:{
        name: Game.name,
        imageUrl: Game.background_image
      },
    }
  }
}
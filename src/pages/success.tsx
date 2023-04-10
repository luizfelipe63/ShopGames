import { GetServerSideProps, GetStaticPaths } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImageContent, SuccessContainer } from "../styles/pages/success";

import logoSuccess from '../assets/logo-game.svg'


interface successProps{
  customerName: string,
  QuantityOfProducts: number
  products: {
    name: string
    imageUrl
  }[]
}

export default function Success({customerName, products, QuantityOfProducts}: successProps ){

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
        {products.map(item => { 
          return(
            <ImageContent 
              key={item.name} 
              css={{
                backgroundImg: item.imageUrl, 
                backgroundPosition: 'center',
                backgroundSize: 'cover'
              }}>

            </ImageContent>
          )
        })}
       
      </ImageContainer>
      <h2>Compra efetuada!</h2>
      <p>
        Uhuul <strong>{customerName}</strong>, 
        sua compra dos seus {QuantityOfProducts} jogos já estão na sua biblioteca. 
      </p>

      <Link href='/'>
        Voltar à home
      </Link>
    </SuccessContainer>
    </>
  )
} 


export const getServerSideProps: GetServerSideProps<any, {id: string}> = async ({query}) => {

  if(!query.session_id){
    return{
      redirect:{
        permanent: false,
        destination: '/'
      }
    }
  }


  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const QuantityOfProducts = session.line_items.data.length

  const customerName = session.customer_details.name
  const products = session.line_items.data.map(item => {
    const product = item.price.product as Stripe.Product;

    return ({
      name: product.name,
      imageUrl: product.images[0]
    })
  })

  

  return{
    props:{
      customerName,
      products,
      QuantityOfProducts
    }
  }
}
import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ImageProducts, ProductsContainer, ProductsDetails } from '../../styles/pages/products'


interface ProductsProps {
  product:{
    id: string, 
    name: string,
    imageUrl: string,
    price: string, 
    description: string,
    defaultPriceId: string
  }
}

export default function Product({product}: ProductsProps) {

  const [isCreatCheckoutSession, setIsCreatCheckoutSession] = useState(false)

  async function handleBuyProduct(){
    try{
      setIsCreatCheckoutSession(true)

      const reponse = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      const {checkoutUrl} = reponse.data

      window.location.href = checkoutUrl
    }catch(error){
      setIsCreatCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
    console.log(product.defaultPriceId)
  }

  const {isFallback} = useRouter()

  if(isFallback){
    return(
      <p>Loading...</p>
    )
  }


  return (
    <>
    <Head>
        <title>{product.name} | Ignite Shop</title>
        
    </Head>
    <ProductsContainer>
      <ImageProducts>
        <Image src={product.imageUrl} width={520} height={480} alt=''/>
      </ImageProducts>
      <ProductsDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button disabled={isCreatCheckoutSession} onClick={handleBuyProduct}>Comprar agora</button>
      </ProductsDetails>
    </ProductsContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return{
    paths: [
      {
        params : { id: 'prod_NMFWtWMptgD1uf' }
      }
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId =  String(params.id)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  
  const price = product.default_price as Stripe.Price

  return{
    props:{
      product:{
        id: product.id,
        imageUrl: product.images[0],
        name: product.name, 
        price: new Intl.NumberFormat('pt-BR',{
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1
  }
}
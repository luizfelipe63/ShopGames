import Image from "next/image";
import { GetStaticProps } from "next";
import { HomeContainer, Products } from "../styles/pages/home";
import { stripe } from "../lib/stripe";


import 'keen-slider/keen-slider.min.css'
import {useKeenSlider} from 'keen-slider/react'


import Stripe from "stripe";
import Head from "next/head";
import { Handbag } from "phosphor-react";
import { useContext } from "react";
import { ProductContext, ProductType } from "../context/productContext";

interface HomeProps {
  products:{
    id: string, 
    name: string,
    imageUrl: string,
    price: number,
  }[]
  
}

// interface Product {
//   Product: ProductType[]
// }

export default function Home({products}: HomeProps) {

  const {creatNewProductBag} = useContext(ProductContext)

  const handleCreatProductBag = (product: ProductType) => {
    creatNewProductBag({...product})
  }

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

    <HomeContainer ref={sliderRef} className='KeenSlider'>
      {products.map(product => {
        return(
          <Products 
            href={`/product/${product.id}`} 
            key={product.id} 
            className="keen-slider__slide"
            prefetch={false}
          >
            <Image src={product.imageUrl} alt='' width={520} height={480}/>
            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
              </div>
              <button onClick={() => handleCreatProductBag(product)}>
                <Handbag size={32} weight='bold' />
              </button>
            </footer>
          </Products>
        )
      })}
    </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const reponse = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = reponse.data.map(product => {

    const price = product.default_price as Stripe.Price

    return{
      id: product.id,
      imageUrl: product.images[0],
      name: product.name, 
      price: new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100),
    }
  })


  return{
    props: {
      products
    },
    revalidate: 60 * 60 * 2
  }
}
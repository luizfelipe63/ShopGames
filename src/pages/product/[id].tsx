import { GetStaticProps } from 'next'
import Image from 'next/image'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ImageProducts, ProductsContainer, ProductsDetails } from '../../styles/pages/products'


interface ProductsProps {
  products:{
    id: string, 
    name: string,
    imageUrl: string,
    price: string, 
    descripton: string
  }
}

export default function Product({products}: ProductsProps) {


  return (
    <ProductsContainer>
      <ImageProducts>
        <Image src={products.imageUrl} width={520} height={480} alt=''/>
      </ImageProducts>
      <ProductsDetails>
        <h1>{products.name}</h1>
        <span>{products.price}</span>
        <p>{products.descripton}</p>
        <button>Comprar agora</button>
      </ProductsDetails>
    </ProductsContainer>
  )
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
        description: product.description
      }
    },
    revalidate: 60 * 60 * 1
  }
}
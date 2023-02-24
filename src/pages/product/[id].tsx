import Image from 'next/image'
import {useRouter} from 'next/router'
import { ImageProducts, ProductsContainer, ProductsDetails } from '../../styles/pages/products'

export default function Product() {
  const {query} = useRouter()

  return (
    <ProductsContainer>
      <ImageProducts>
        {/* <Image/> */}
      </ImageProducts>
      <ProductsDetails>
        <h1>Camiseta X</h1>
        <span>79,90</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, esse obcaecati ipsa officia quae, totam vero ducimus eius veritatis recusandae unde error eum blanditiis, eveniet itaque soluta voluptate sit possimus.</p>
        <button>Comprar agora</button>
      </ProductsDetails>
    </ProductsContainer>
  )
}
import Image from "next/image";
import { HomeContainer, Products } from "../styles/pages/home";
import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'

import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'
import {useKeenSlider} from 'keen-slider/react'


export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <HomeContainer ref={sliderRef} className='KeenSlider'>
      <Products className="keen-slider__slide">
        <Image src={camiseta1} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>

      <Products className="keen-slider__slide">
        <Image src={camiseta2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <Image src={camiseta2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
      <Products className="keen-slider__slide">
        <Image src={camiseta2} alt='' width={520} height={480}/>
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Products>
    </HomeContainer>
  )
}

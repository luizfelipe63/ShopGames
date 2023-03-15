import { CardButton, Header } from "./styles";
import Image from 'next/image'
import Logo from '../../assets/Logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import { Handbag } from 'phosphor-react'
import { ShoopingBag } from '../../components/shoopingBag'
import { useContext } from 'react'
import { ProductContext } from "../../context/productContext";

export function Navigation() {
  const {QuantityItems} = useContext(ProductContext)
  
  return (
    <Header>
      <Image src={Logo} alt="" />
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <CardButton>
            <span>{QuantityItems}</span>
            <Handbag size={24} />
          </CardButton>
        </Dialog.Trigger>
        <ShoopingBag />
      </Dialog.Root>
    </Header>
  )
}
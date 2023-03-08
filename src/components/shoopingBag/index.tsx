import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ProductBag } from '../productBag'
import { CheckoutButton, CloseButton, Content, Overlay, QuantityOfItems, Title, TotalValue } from './styles'


export function ShoopingBag(){
  return(
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <Title>
          Sacola de compras
        </Title>
        <CloseButton>
          <X weight='bold' size={24}/>
        </CloseButton>
        <div>
          <ProductBag/>
          <ProductBag/>
          <ProductBag/>
        </div>
        <div>
          <QuantityOfItems>
            <span>Quantidades</span>
            <span>3 itens</span>
          </QuantityOfItems>
          <TotalValue>
            <span>Valor total</span>
            <span>R$ 270,00</span>
          </TotalValue>
          <CheckoutButton>Finalizar compra</CheckoutButton>
        </div>
      </Content>
    </Dialog.Portal>
  )
}
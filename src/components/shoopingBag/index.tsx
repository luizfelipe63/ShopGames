import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { ProductBag } from '../productBag'
import { Content, Overlay } from './styles'


export function ShoopingBag(){
  return(
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <Dialog.Title>
          Sacola de compras
        </Dialog.Title>
        <Dialog.Close>
          <X/>
        </Dialog.Close>
        <ProductBag/>
        <div>
          <span>Quantidades</span>
          <span>3 itens</span>
        </div>
        <div>
          <span>Valor total</span>
          <span>R$ 270,00</span>
        </div>
        <button>Finalizar compra</button>
      </Content>
    </Dialog.Portal>
  )
}
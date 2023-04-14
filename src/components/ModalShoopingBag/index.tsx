import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import { X } from 'phosphor-react'
import { useContext } from 'react'
import { ProductContext } from '../../context/productContext'
import { ProductBag } from '../productBag'
import {
  CheckoutButton,
  CloseButton,
  Content,
  ContentInfos,
  ContentProduct,
  Overlay,
  QuantityOfItems,
  Title,
  TotalValue,
} from './styles'

export function ShoopingBag() {
  const { newProductBag, QuantityItems, ItemsValue } =
    useContext(ProductContext)

  const FormatPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(ItemsValue)

  async function handleCheckout() {
    try {
      const response = await axios.post('/api/checkout', {
        products: newProductBag,
      })
      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      alert('Falha ao redirecionar ao checkout')
    }
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <Title>Sacola de compras</Title>
        <ContentProduct>
          {newProductBag.map((item) => {
            return <ProductBag key={item.id} ProductBag={item} />
          })}
        </ContentProduct>
        <ContentInfos>
          <QuantityOfItems>
            <span>Quantidades</span>
            <span>{QuantityItems} itens</span>
          </QuantityOfItems>
          <TotalValue>
            <strong>Valor total</strong>
            <strong>{FormatPrice}</strong>
          </TotalValue>
          <CheckoutButton onClick={handleCheckout}>
            Finalizar compra
          </CheckoutButton>
        </ContentInfos>
      </Content>
    </Dialog.Portal>
  )
}

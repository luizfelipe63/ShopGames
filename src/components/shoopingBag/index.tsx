import * as Dialog from '@radix-ui/react-dialog'
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
  TotalValue 
} from './styles'




export function ShoopingBag(){

  const {newProductBag, BuyProduct, QuantityItems} = useContext(ProductContext)

  async function handleBuyProduct(){
    BuyProduct()
  }

  return(
    <Dialog.Portal>
      <Overlay/>
      <Content>
        <CloseButton>
          <X weight='bold' size={24}/>
        </CloseButton>
        <Title>
          Sacola de compras
        </Title>
       
        <ContentProduct>
         {newProductBag.map(item => {
          return <ProductBag key={item.id} ProductBag={item}/>
         })}
        </ContentProduct>
        <ContentInfos>
          <QuantityOfItems>
            <span>Quantidades</span>
            <span>{QuantityItems} itens</span>
          </QuantityOfItems>
          <TotalValue>
            <strong>Valor total</strong>
            <strong>R$ 270,00</strong>
          </TotalValue>
          <CheckoutButton onClick={handleBuyProduct}>Finalizar compra</CheckoutButton>
        </ContentInfos>
      </Content>
    </Dialog.Portal>
  )
}
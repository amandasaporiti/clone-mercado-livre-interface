import { MainContainer, Info, HeartIcon, MoreSelled, Price, Delivery, DeliveryIcon, Withdrawal, WithdrawalIcon, BuyNow, ButtonBuyNow, ButtonAddToCar, Row } from './styles'

const InfoProduct = () => {
  return (
    <MainContainer>
      <Info>
        <div>
          <p>Novo</p>
          <p>4216 vendidos</p>
        </div>
      </Info>
      <Row>
        <div>
          <h1>Fritadeira Air Fryer 3,5l</h1>
          <HeartIcon />
        </div>
      </Row>
      <MoreSelled>
        <a href="/#">Mais vendido</a>
      </MoreSelled>
      <Price>
        <div id='total-price'>
          <p className='total-price money'>R$</p>
          <p className='total-price'>365</p>
        </div>
        <div>
          <p className='parcel'><span>em</span> <span>12x</span> <span>R$</span> <span>35</span> <span className='cents'>39</span></p>
        </div>
        <a href="/#">Ver os meios de pagamento</a>
      </Price>
      <Delivery>
        <div>
          <DeliveryIcon />
          <h2>Chegará grátis amanhã</h2>
        </div>
        <a className='link' href="/#">Ver mais formas de entrega</a>
      </Delivery>
      <Withdrawal>
        <div>
          <WithdrawalIcon />
          <h2>Retire grátis a partir de amanhã em uma agência</h2>
        </div>
        <a className='link' href="/#">Ver no mapa</a>
      </Withdrawal>
      <BuyNow>
        <h2>Estoque disponível</h2>
        <h3>Quantidade: <span>1 unidade</span></h3>
      </BuyNow>
      <ButtonBuyNow>Comprar agora</ButtonBuyNow>
      <ButtonAddToCar>Adicionar ao carrinho</ButtonAddToCar>
    </MainContainer>
  )
}

export default InfoProduct
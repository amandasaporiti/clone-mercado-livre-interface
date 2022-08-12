import { MainContainer, Links, Painel, Image, ColumnProduct, Description, Questions, AskSeller, ColumnAbout, Garanty, Devolution, Payments } from './styles'

import MercadoCreditoLogo from '../../assets/mercado-credito.jpg'
import VisaLogo from '../../assets/visa.jpg'
import MasterCardLogo from '../../assets/mastercard.png'
import HiperCardLogo from '../../assets/hipercard.png'
import EloLogo from '../../assets/elo.webp'
import CaixaLogo from '../../assets/caixa.png'
import BoletoLogo from '../../assets/boleto-logo.png'
import InfoSeller from '../../components/InfoSeller'
import InfoProduct from '../../components/InfoProduct'

import ProductImage from '../../assets/fritadeira.webp'

const ItensWrapper = () => {
  return (
    <MainContainer>
      <Links>
        <div>
          <a href="/#" className='back-list'>Voltar a lista</a>
          <a href="/#">Pequenos eletrodomesticos</a>
          <a href="/#">Para a cozinha</a>
          <a href="/#">Preparação de alimentos </a>
          <a href="/#">Fritadeira</a>
        </div>
        <div>
          <a href="/#">Compartilhar</a>
          <a href="/#">Vender um igual</a>
        </div>
      </Links>
      <Painel>
        <ColumnProduct>
          <Image>
            <img src={ProductImage} alt="Air Fryer" />
          </Image>
          <Description>
            <h2>Descrição</h2> <br />
            <p>
              - Frita, assa, grelha, cozinha e esquenta sem o uso do Óleo; <br /><br />
              - Sua alimentação vai ficar muito mais saudável; <br /><br />
              - Pode ser usada do café da manhã ao jantar; <br /><br />
              - É pratica e fácil de usar; <br /><br />
            </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem itaque enim, quibusdam ratione aliquid omnis dolorem temporibus earum doloremque obcaecati provident pariatur architecto illum officiis. Reprehenderit unde recusandae sed eveniet.</p>
          </Description>
          <Questions>
            <h2>Perguntas e respostas</h2>
            <p>Qual informação você precisa?</p>
            <button>Custo e prazo de envio</button>
            <button>Devolução grátis</button>
            <button>Meios de pagamento</button>
            <button>Garantia</button>
            <button>Parcelado no boleto</button>
          </Questions>
          <AskSeller>
            <h2>Pergunte ao vendedor</h2>
            <div>
              <input placeholder='Escreva sua pergunta...' />
              <button>Perguntar</button>
            </div>
          </AskSeller>
        </ColumnProduct>
        <ColumnAbout>
          <InfoProduct />
          <InfoSeller />
          <Devolution>
            <h2>Devolução grátis</h2>
            <p>Você tem 30 dias a partir do recebimento do produto para devolvê-lo, não importa o motivo!</p>
            <a href="/#">Ver mais sobre devoluções</a>
          </Devolution>
          <Garanty>
            <h2>Garantia</h2>
            <h3>Compra Garantida!</h3>
            <p>Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
            <h4>Garantia do vendedor</h4>
            <p>Garantia de fábrica: 12 meses</p>
            <a href="/#">Saiba mais sobre a garantia</a>
          </Garanty>
          <Payments>
            <h2>Meios de pagamento</h2>
            <h3>Até 12x sem cartão</h3>
            <div>
              <img src={MercadoCreditoLogo} alt="logo-mercado-credito" />
            </div>
            <h4>Cartões de crédito</h4>
            <p>Pague em até 12x!</p>
            <div>
              <img src={VisaLogo} alt="logo-cartoes-visa" />
              <img src={MasterCardLogo} alt="logo-cartoes-master-card" />
              <img src={HiperCardLogo} alt="logo-cartoes-hiper" />
              <img src={EloLogo} alt="logo-cartoes-elo" />
            </div>
            <h4>Cartões de Débito</h4>
            <div>
              <img src={CaixaLogo} alt="logo-cartoes-caixa" />
            </div>
            <h4>Boleto bancário</h4>
            <div>
              <img src={BoletoLogo} alt="logo-boleto-bancario" />
            </div>
            <br />
            <a href="/#">Conheça outros meios de pagamento</a>
          </Payments>
        </ColumnAbout>
      </Painel>
    </MainContainer>
  )
}

export default ItensWrapper
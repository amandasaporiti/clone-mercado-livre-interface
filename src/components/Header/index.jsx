import { ContainerHeader, Painel, Column, Input, Links, SendTo, LocationIcon, ListItensMenu, PerfilIcon, NotifcationIcon, ShoppingCardIcon } from './styles'

const Header = () => {
  return (
    <ContainerHeader>
      <Painel>
        <Column>
          <Input>
            <input placeholder="Buscar produtos, marcas e muito mais" type="text" />
          </Input>
        </Column>
        <Column className='column-menu'>
          <SendTo>
            <LocationIcon />
            <div>
              <p className='send-to'>Enviar para Amanda</p>
              <p>Rua professor Oscar...</p>
            </div>
          </SendTo>
          <ListItensMenu>
            <div>
              <ul>
                <li>Categorias</li>
                <li>Ofertas do dia</li>
                <li>Histórico</li>
                <li>Moda</li>
                <li>Vender</li>
                <li>Contato</li>
              </ul>
            </div>
          </ListItensMenu>
          <Links>
            <PerfilIcon />
            <p>Amanda</p>
            <a href="/#">Compras</a>
            <a href="/#" className='link-fav'>Favoritos</a>
            <NotifcationIcon />
            <ShoppingCardIcon />
          </Links>
        </Column>
      </Painel>
    </ContainerHeader>
  )
}
export default Header
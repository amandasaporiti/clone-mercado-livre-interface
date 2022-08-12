import { MainContainer, Tittle, Location, LocationIcon, Platinum, MedalIcon } from './styles'

const InfoSeller = () => {
  return (
    <MainContainer>
      <Tittle>
        <h2>Informações sobre o vendedor</h2>
      </Tittle>
      <Location>
        <LocationIcon />
        <div>
          <h3>Localização</h3>
          <p>Curitiba, Paraná</p>
        </div>
      </Location>
      <Platinum>
        <MedalIcon />
        <div>
          <h3>Platinum</h3>
          <p>É um dos melhores do site!</p>
        </div>

      </Platinum>
      <a href="/#">Ver mais dados desse vendedor</a>
    </MainContainer>
  )
}

export default InfoSeller
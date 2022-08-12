import { MainContainer, Wrapper } from "./styles"
import ItensWrapper from "../ItensWrapper"
import Header from "../Header"

const Container = () => {
  return (
    <MainContainer>
      <Header />
      <Wrapper>
        <ItensWrapper />
      </Wrapper>
    </MainContainer>
  )
}

export default Container
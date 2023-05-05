import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import styled from 'styled-components'
import EstiloGlobal from './styles'

const Body = styled.body`
  padding-bottom: 120px;
`
const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

function App() {
  return (
    <>
      <EstiloGlobal />
      <Body>
        <Header />
        <Hero />
        <Container>
          <ListaVagas />
        </Container>
      </Body>
    </>
  )
}

export default App

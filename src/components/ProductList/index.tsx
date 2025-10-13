import Product from '../Product'

import { Container, List, Titulo } from './styles'

type Props = {
  tituloLista: string
  background: 'gray' | 'black'
}

const ProductsList = ({ tituloLista, background }: Props) => (
  <Container>
    <div className="container">
      <Titulo>{tituloLista}</Titulo>
      <List>
        <Product />
        <Product />
        <Product />
        <Product />
      </List>
    </div>
  </Container>
)

export default ProductsList

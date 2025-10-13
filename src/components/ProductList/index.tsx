import Product from '../Product'

import { Container, List, Titulo } from './styles'

export type Props = {
  tituloLista: string
  background: 'gray' | 'black'
}

const ProductsList = ({ tituloLista, background }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{tituloLista}</Titulo>
      <List>
        <Product
          nomeJogo="Spider Man 5"
          categoria="Heroi"
          sistema="PS5"
          descricao="Seja o Spider Man"
          infos={['-10%', '140R$']}
          imagem="//placehold.it/222x250"
        />
        <Product
          nomeJogo="Spider Man 5"
          categoria="Heroi"
          sistema="PS5"
          descricao="Seja o Spider Man"
          infos={['-10%', '140R$']}
          imagem="//placehold.it/222x250"
        />
        <Product
          nomeJogo="Spider Man 5"
          categoria="Heroi"
          sistema="PS5"
          descricao="Seja o Spider Man"
          infos={['-10%', '140R$']}
          imagem="//placehold.it/222x250"
        />
        <Product
          nomeJogo="Spider Man 5"
          categoria="Heroi"
          sistema="PS5"
          descricao="Seja o Spider Man"
          infos={['-10%', '140R$']}
          imagem="//placehold.it/222x250"
        />
      </List>
    </div>
  </Container>
)

export default ProductsList

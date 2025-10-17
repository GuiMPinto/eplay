import Game from '../../models/Game'
import Product from '../Product'

import { Container, List, Titulo } from './styles'

export type Props = {
  tituloLista: string
  background: 'gray' | 'black'
  games: Game[]
}

const ProductsList = ({ tituloLista, background, games }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{tituloLista}</Titulo>
      <List>
        {games.map((jogo) => (
          <Product
            key={jogo.id}
            nomeJogo={jogo.nomeJogo}
            categoria={jogo.categoria}
            sistema={jogo.sistema}
            descricao={jogo.descricao}
            infos={jogo.infos}
            imagem={jogo.imagem}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList

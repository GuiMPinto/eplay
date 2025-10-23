import PedidosPerfil from '../../../models/PedidosPerfil'
import ProdutoPerfil from '../ProdutoPerfil'

import { Container, List, Titulo } from './styles'

export type Props = {
  tituloLista: string
  background: 'branca' | 'rosa'
  perfil: PedidosPerfil[]
}

const ListaPerfil = ({ tituloLista, background, perfil }: Props) => (
  <Container background={background}>
    <div className="container">
      <Titulo>{tituloLista}</Titulo>
      <List>
        {perfil.map((jogo) => (
          <ProdutoPerfil
            key={jogo.id}
            nomeJogo={jogo.nomeJogo}
            descricao={jogo.descricao}
            imagem={jogo.imagem}
            backgroundCart={jogo.backgroundPedido}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ListaPerfil

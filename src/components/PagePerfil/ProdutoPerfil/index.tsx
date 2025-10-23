import Button from '../../Button'
import { Card, Descricao, Titulo } from './styles'

export type PropsProduto = {
  nomeJogo: string
  descricao: string
  imagem: string
  backgroundCart: 'branca' | 'rosa'
}

const ProdutoPerfil = ({
  nomeJogo,
  descricao,
  imagem,
  backgroundCart
}: PropsProduto) => (
  <Card backgroundCart={backgroundCart}>
    <img src={imagem} alt={nomeJogo} />
    <Titulo>{nomeJogo}</Titulo>
    <Descricao>{descricao}</Descricao>

    <Button
      type="link"
      to="/listaPerfil"
      title="Clique para adicionar ao carrinho"
    >
      Adicionar ao Carrinho
    </Button>
  </Card>
)
export default ProdutoPerfil

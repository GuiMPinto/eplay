import Tag from '../Tag'
import { Card, Descricao, Titulo, Infos } from './styles'

type PropsProduto = {
  nomeJogo: string
  categoria: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
}

const Product = ({
  nomeJogo,
  categoria,
  sistema,
  descricao,
  infos,
  imagem
}: PropsProduto) => (
  <Card>
    <img src={imagem} alt={nomeJogo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>

    <Titulo>{nomeJogo}</Titulo>
    <Tag>{categoria}</Tag>
    <Tag>{sistema}</Tag>
    <Descricao>{descricao}</Descricao>
  </Card>
)

export default Product

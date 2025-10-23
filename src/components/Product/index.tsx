import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Saibamais,
  TagItem,
  Nota
} from './styles'

export type PropsProduto = {
  nomeJogo: string
  sistema: string
  descricao: string
  infos: string[]
  imagem: string
  nota: string
  backgroundCart: 'branca' | 'rosa'
}

const Product = ({
  nomeJogo,
  sistema,
  descricao,
  infos,
  imagem,
  nota,
  backgroundCart
}: PropsProduto) => (
  <Card backgroundCart={backgroundCart}>
    <img src={imagem} alt={nomeJogo} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>

    <TagItem>
      <Titulo>{nomeJogo}</Titulo>
      <Nota>
        <Titulo>{nota}</Titulo>
        <img src={estrela} />
      </Nota>
    </TagItem>

    <Descricao>{descricao}</Descricao>
    <Saibamais>{<Tag key={sistema}>{sistema}</Tag>}</Saibamais>
  </Card>
)

export default Product

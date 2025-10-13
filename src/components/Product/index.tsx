import Tag from '../Tag'
import { Card, Descricao, Titulo } from './styles'

const Product = () => (
  <Card>
    <img src="//placehold.it/222x250" />
    <Titulo>Nome do Jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windowns</Tag>
    <Descricao>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quibusdam,
      ut repudiandae, rerum quis nesciunt minima neque doloribus earum, eos
      porro praesentium. Culpa iure voluptas excepturi rerum, fugiat iste
      accusantium?
    </Descricao>
  </Card>
)

export default Product

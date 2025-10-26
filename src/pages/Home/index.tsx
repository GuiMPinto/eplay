import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import sushi from '../../assets/images/sushi.png'
import italiana from '../../assets/images/comida_Italiana.png'

const promocoes: Game[] = [
  {
    id: 1,
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nomeJogo: 'Hioki Sushi',
    sistema: 'Saiba Mais',
    infos: ['Destaque da Semana', 'Semana'],
    imagem: sushi,
    backgroundPedido: 'branca',
    nota: '4.9'
  },
  {
    id: 2,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nomeJogo: 'La Dolce Vita Trattoria',
    sistema: 'Saiba Mais',
    infos: ['Italiana'],
    imagem: italiana,
    backgroundPedido: 'branca',
    nota: '4.6'
  },
  {
    id: 3,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nomeJogo: 'La Dolce Vita Trattoria',
    sistema: 'Saiba Mais',
    infos: ['Italiana'],
    imagem: italiana,
    nota: '4.6',
    backgroundPedido: 'branca'
  },
  {
    id: 4,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nomeJogo: 'La Dolce Vita Trattoria',
    sistema: 'Saiba Mais',
    infos: ['Italiana'],
    imagem: italiana,
    nota: '4.6',
    backgroundPedido: 'branca'
  },
  {
    id: 5,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nomeJogo: 'La Dolce Vita Trattoria',
    sistema: 'Saiba Mais',
    infos: ['Italiana'],
    nota: '4.6',
    imagem: italiana,
    backgroundPedido: 'branca'
  },
  {
    id: 6,
    descricao:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    nomeJogo: 'La Dolce Vita Trattoria',
    sistema: 'Saiba Mais',
    infos: ['Italiana'],
    imagem: italiana,
    nota: '4.6',
    backgroundPedido: 'branca'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} tituloLista=" " background="branca" />
  </>
)

export default Home

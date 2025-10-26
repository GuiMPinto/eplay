import PedidosPerfil from '../../models/PedidosPerfil'
import pizza from '../../assets/images/pizza.jpg'
import ListaPerfil from '../../components/PagePerfil/ListaPerfil'
import BannerPerfil from '../../components/PagePerfil/BannerPernil'
import Folder from '../../components/PagePerfil/Folder'

const menuperfil: PedidosPerfil[] = [
  {
    id: 1,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',
    imagem: pizza,
    backgroundPedido: 'rosa'
  },
  {
    id: 2,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',

    imagem: pizza,
    backgroundPedido: 'rosa'
  },
  {
    id: 3,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',
    imagem: pizza,
    backgroundPedido: 'rosa'
  },
  {
    id: 4,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',
    imagem: pizza,
    backgroundPedido: 'rosa'
  },
  {
    id: 5,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',
    imagem: pizza,
    backgroundPedido: 'rosa'
  },
  {
    id: 6,
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    nomeJogo: 'Pizza Marguerita',
    sistema: 'Windowns',
    imagem: pizza,
    backgroundPedido: 'rosa'
  }
]

const Categories = () => (
  <>
    <BannerPerfil />
    <Folder />
    <ListaPerfil perfil={menuperfil} tituloLista="" background="branca" />
    {/* <ProductsList games={emBreve} tituloLista="Ação" background="rosa" /> */}
  </>
)

export default Categories

import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/sushi.png'
import sushi from '../../assets/images/sushi.png'

const promocoes: Game[] = [
  {
    id: 1,
    categoria: 'Horror',
    descricao:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: sushi
  },
  {
    id: 2,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: sushi
  },
  {
    id: 3,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: sushi
  },
  {
    id: 4,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: sushi
  },

  {
    id: 5,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  },
  {
    id: 6,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  }
]

const Categories = () => (
  <>
    <ProductsList games={promocoes} tituloLista="RPG" background="branco" />
    {/* <ProductsList games={emBreve} tituloLista="Ação" background="rosa" /> */}
    <ProductsList
      games={promocoes}
      tituloLista="Aventura"
      background="branco"
    />
  </>
)

export default Categories

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductList'
import Game from '../../models/Game'

import resident from '../../assets/images/resident.png'

const promocoes: Game[] = [
  {
    id: 1,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  },
  {
    id: 2,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  },
  {
    id: 3,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  },
  {
    id: 4,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  }
]

const emBreve: Game[] = [
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
  },
  {
    id: 7,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  },
  {
    id: 8,
    categoria: 'Horror',
    descricao:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror de tiro em terceira pessoa desenvolvido e publicado pela Capcom.',
    nomeJogo: 'Resident Evil 4',
    sistema: 'Windowns',
    infos: ['10%', 'R$ 250,00'],
    imagem: resident
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} tituloLista="Promoções" background="gray" />
    <ProductsList games={emBreve} tituloLista="Em Breve" background="black" />
  </>
)

export default Home

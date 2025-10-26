import { Imagem, Logo, Texto } from './styles' //.container

import bannerImg from '../../../assets/images/bannerHome.png'
import logo from '../../../assets/images/logo.png'

import { LinkCart } from '../../Header/styles'
import { Link } from 'react-router-dom'

const BannerPerfil = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Texto> Restaurantes</Texto>
      <Link to="../">
        <Logo src={logo} alt="E Food" />
      </Link>
      <LinkCart href="#">0 - produto(s) no Carrinho</LinkCart>
    </div>
  </Imagem>
)

export default BannerPerfil

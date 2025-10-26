import { Imagem, Logo, Texto } from './styles' //.container

import bannerImg from '../../assets/images/bannerHome.png'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Link to="./">
      <Logo src={logo} alt="E Food" />
    </Link>
    <Texto>
      {' '}
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Texto>
    {/* <div className="container">

    </div> */}
  </Imagem>
)

export default Banner

import { Imagem, Logo, Texto } from './styles' //.container

import bannerImg from '../../assets/images/bannerHome.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <Logo src={logo} alt="E Food" />
    <Texto>
      {' '}
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </Texto>
    {/* <div className="container">
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta"
      >
        Aproveitar
      </Button>
    </div> */}
  </Imagem>
)

export default Banner

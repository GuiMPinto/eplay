import { HeaderBar, LinkItem, LinkCart, Links } from './styles'

import carrinho from '../../assets/images/carrinho.svg'

import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div>
      <nav>
        <Links>
          <LinkItem>
            <Link to="./">Home</Link>
          </LinkItem>
          <LinkItem>
            <Link to="/categorias">Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">Novidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#">Promoções</a>
          </LinkItem>
        </Links>
      </nav>
    </div>
    <LinkCart href="#">
      0 - produto(s)
      <img src={carrinho} alt="Carrinho de Compras" />
    </LinkCart>
  </HeaderBar>
)
export default Header

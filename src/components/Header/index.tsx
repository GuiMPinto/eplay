import { HeaderBar, LinkItem, LinkCart, Links } from './styles'

import carrinho from '../../assets/images/carrinho.svg'

import { Link } from 'react-router-dom'

const Header = () => (
  <HeaderBar>
    <div className="container">
      <div>
        <nav>
          <Links>
            <LinkItem>
              <Link to="./">Home</Link>
            </LinkItem>
            <LinkItem>
              <Link to="/listaPerfil">Perfil</Link>
            </LinkItem>
          </Links>
        </nav>
      </div>
      <LinkCart href="#">
        0 - produto(s)
        <img src={carrinho} alt="Carrinho de Compras" />
      </LinkCart>
    </div>
  </HeaderBar>
)
export default Header

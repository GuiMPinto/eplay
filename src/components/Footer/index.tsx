import { Container, FooterSection, Logo, Texto } from './styles'
import logo from '../../assets/images/logo.png'
import redes from '../../assets/images/redes sociais.png'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <Logo src={logo} alt="E Food" />
        <Logo src={redes} alt="Redes Sociais" />
        <Texto>
          {' '}
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade
          <br />
          dos produtos é toda do estabelecimento contratado.{' '}
        </Texto>
      </FooterSection>
    </div>
  </Container>
)
export default Footer

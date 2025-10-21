import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.rosaClaro};
  color: ${cores.rosa}
  padding: 32px 0;
  font-size: 14px;
`
export const Logo = styled.img`
  display: block;
  padding-top: 40px;
  margin: 0 auto;
`

export const Texto = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 10px;
  text-align: center;
  padding-top: 56px;
  color: ${cores.rosa};
`

export const FooterSection = styled.div`
  height: 296px;
`

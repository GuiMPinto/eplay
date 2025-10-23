import styled from 'styled-components'

import { TagContainer } from '../../Tag/styles'
import { cores } from '../../../styles'
import { LinkCart } from '../../Header/styles'

/*
São combinados o CSS destes elementos para que a tag verde com a frase ' Destaque do dia '
dentro do banner(compoente 'Imagem') fique no canto superior deste.

  .container {
    position: relative;
    padding-top: 340px;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

*/
export const Imagem = styled.div`
  width: 100%;
  display: flex;
  height: 184px;
  background-repeat: no-repeat;
  background-size: cover;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }

  ${LinkCart} {
    text-decoration: none;
    color: ${cores.rosa};
    font-size: 16px;
    font-weight: bold;
    font-family: Roboto, sans-serif;
  }
`

export const Logo = styled.img`
  margin: 0 auto;
`
export const Texto = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: ${cores.rosa};
  font-weight: bold;
`

export const Titulo = styled.div`
  font-size: 16px;
  font-weigth: bold;
`
export const Precos = styled.div`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

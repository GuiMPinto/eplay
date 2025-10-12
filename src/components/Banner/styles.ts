import styled from 'styled-components'
import { TagContainer } from '../Tag/styles'
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
  height: 560px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  font-weight: bold;

  .container {
    position: relative;
    padding-top: 340px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`
export const Titulo = styled.div`
  font-size: 36px;
  max-width: 450px;
`
export const Precos = styled.div`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`

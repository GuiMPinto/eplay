import styled from 'styled-components'
import { cores } from '../../../styles'
import { PropsProduto } from './index'
import { ButtonContainer, ButtonLink } from '../../Button/styles'

export const Card = styled.div<
  Omit<PropsProduto, 'nomeJogo' | 'descricao' | 'infos' | 'imagem'>
>`
  background-color: ${cores.rosa};
  color: ${cores.branca};
  width: 320px;
  height: 376px;
  position: relative;
  margin-bottom: 32px;
  margin-right: 40px;
  border: 5px solid ${cores.rosa};

  ${ButtonContainer} {
    position: absolute;
    bottom: 4px;
    width: 100%;
    text-align: center;
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }

  ${ButtonLink} {
    position: absolute;
    bottom: 4px;
    width: 100%;
    text-align: center;
    background-color: ${cores.branca};
    color: ${cores.rosa};
  }
  img {
    width: 100%;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 8px;
  padding-left: 8px;
  margin-bottom: 8px;
  background-color: transparent;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding-left: 8px;
`

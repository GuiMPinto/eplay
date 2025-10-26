import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { PropsProduto } from './index'
import { ButtonContainer, ButtonLink } from '../../components/Button/styles'

export const Card = styled.div<
  Omit<
    PropsProduto,
    'nomeJogo' | 'sistema' | 'descricao' | 'infos' | 'imagem' | 'nota'
  >
>`
  background-color: ${(props) =>
    props.backgroundCart === 'branca' ? cores.branca : cores.rosa};
  color: ${(props) =>
    props.backgroundCart === 'rosa' ? cores.branca : cores.rosa};
  width: 472px;
  height: 408px;
  position: relative;
  margin-bottom: 32px;
  margin-right: 40px;
  border: 2px solid;

  ${TagContainer} {
    background-color: ${(props) =>
      props.backgroundCart === 'branca' ? cores.rosa : cores.branca};
    color: ${(props) =>
      props.backgroundCart === 'rosa' ? cores.rosa : cores.branca};
    margin-left: 8px;
  }

  ${ButtonContainer} {
    background-color: ${(props) =>
      props.backgroundCart === 'branca' ? cores.rosa : cores.branca};
    color: ${(props) =>
      props.backgroundCart === 'rosa' ? cores.rosa : cores.branca};
    margin-left: 8px;
    position: absolute;
    bottom: 8px;
  }

  ${ButtonLink} {
    background-color: ${(props) =>
      props.backgroundCart === 'branca' ? cores.rosa : cores.branca};
    color: ${(props) =>
      props.backgroundCart === 'rosa' ? cores.rosa : cores.branca};
    margin-left: 8px;
    position: absolute;
    bottom: 8px;
  }

  img {
    width: 100%;
  }
`

export const Nota = styled.div`
  img {
    height: 16px;
    width: 16px;
  }

  display: flex;
  align-items: center;
  padding-right: 8px;
`
export const TagItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
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
export const Saibamais = styled.div`
  position: absolute;
  bottom: 8px;
`

import styled from 'styled-components'
import { Props } from './index'
import { cores } from '../../styles'
import { Card } from '../Product/styles'
/*
background-color: ${(props) =>
    props.background === 'branco' ? cores.branca : cores.rosa};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosa' ? cores.rosa : cores.branca};
  }
*/
export const Container = styled.section<Omit<Props, 'tituloLista' | 'games'>>`
  padding: 32px 0;

  background-color: ${cores.branca};
  color: ${cores.rosa};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'rosa' ? cores.rosa : cores.branca};
    border: 3px solid ${cores.rosa};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Titulo = styled.h2`
  font-size: 18px;
  font-weigth: bold;
  margin-bottom: 24px;
`

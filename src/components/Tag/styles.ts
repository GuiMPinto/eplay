import styled from 'styled-components'
//import { cores } from '../../styles'
import { Props } from '.'

export const TagContainer = styled.div<Props>`
  font-size: ${(props) => (props.size === 'big' ? '14px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 16px' : '4px 6px')};
  display: inline-block;
`

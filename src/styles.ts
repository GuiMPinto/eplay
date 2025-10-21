import { createGlobalStyle } from 'styled-components'

// Cosntantes para a paleta de cores.
export const cores = {
  branca: '#fff8f2',
  preta: '#111',
  cinza: '#333',
  cinzaClaro: '#a3a3a3',
  verde: '#10AC84',
  rosa: '#e66767',
  rosaClaro: '#ffebd9'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.branca};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }

`

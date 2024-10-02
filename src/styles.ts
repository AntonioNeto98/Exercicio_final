import { createGlobalStyle } from 'styled-components'

export const Cores = {
  laranja: '#E66767',
  laranjaClaro: '#FFEBD9',
  branco: '#FFFFFF',
}

export const GlobalCss = createGlobalStyle `
  * {
    margin: 0,
    padding: 0,
    box-sizing: border-box,
    font-family: Roboto, sans-serife,
  }

  body {
    background-color: ${Cores.branco}
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
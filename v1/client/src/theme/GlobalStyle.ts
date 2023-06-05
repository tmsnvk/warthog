// css and theming.
import { createGlobalStyle } from 'styled-components';

// ** <GlobalStyle> | global css component ** //
// responsible for setting certain default values for the whole application.
// (1) applies application-wide border-box default settings.
// (2) applies application-wide dimension, font and color default settings.
// (3) applies application-wide link and list default settings.
const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    font-family: ${({ theme }) => theme.fontFamily.main};
    color: ${({ theme }) => theme.color.primaryDark};
    font-size: 62.5%;
    line-height: 1.5;
    background-color: ${({ theme }) => theme.colorBackground.primary};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;

import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }
    button {
      outline: none;
      cursor: pointer;
    }
    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    html {
      font-size: 62.5%; 
      box-sizing: border-box;
      --color-primary: ${props => props.theme.colors.primary};
      --color-dark: ${props => props.theme.colors.dark};
      --color-primary-light: ${props => props.theme.colors.light};
      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 57.5%;
      }
      @media ${props => props.theme.mediaQueries.large} {
          font-size: 55%;
      }
    }
    body {
      font-family: 'Archivo', sans-serif;
      font-weight: 400;
      line-height: 1.6;
      font-size: 1.5rem;
      background-color: var(--color-dark);
      color: #fff;
    }
    
    form,
    input,
    textarea,
    button,
    select,
    a {

      text-decoration: none;
    }

    ul {
      list-style: none;
    }
`;

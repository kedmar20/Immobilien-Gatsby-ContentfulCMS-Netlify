import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {   
    font-size: 1.6rem;  
   
  }

  h1,h2,h3,h4,h5,h6 {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
  }
  
  p{
    font-family: "Montserrat", sans-serif;
    font-weight: 300;
  }
`;
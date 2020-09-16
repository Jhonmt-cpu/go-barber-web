import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    font-size: 60%;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body{
    background: #312E38;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  }

  button{
    cursor: pointer;
  }

  @media(max-width: 1500px){
    :root{
        font-size: 45%;
    }
  }
`;

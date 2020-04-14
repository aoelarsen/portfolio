import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --bright-green: #00CF75;
    --light-green: #008F51;
    --medium-green: #004F2D;
    --racing-green: #004226;
    --dark-green: #00331D ;
    --black: #252525;

    --brightToDark: linear-gradient(var(--bright-green), var(--dark-green))
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Allegreya Sans', sans-serif;
    color: var(--black);
  }

`

export default GlobalStyles

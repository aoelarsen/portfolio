import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  root {
    --bright-green: #00CF75;
    --light-green: #008F51;
    --medium-green: #004F2D;
    --racing-green: #004226;
    --dark-green: #00331D ;
    --black: #252525;    
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyles

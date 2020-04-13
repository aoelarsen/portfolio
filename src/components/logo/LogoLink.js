import { Link } from "gatsby"
import styled from "styled-components"

const LogoLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-align: justify;
  font-size: 1.1rem;

  & strong {
    font-size: 1.3rem;
  }
`

export default LogoLink

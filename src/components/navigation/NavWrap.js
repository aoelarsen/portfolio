import styled from "styled-components"

const NavWrap = styled.nav`
  margin: 0 auto;
  display: flex;
  max-width: 96vw;

  @media screen and (min-width: 900px) {
    width: 70%;
    margin: 0;
    justify-self: end;
  }
`

export default NavWrap

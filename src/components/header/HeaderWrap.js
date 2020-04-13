import styled from "styled-components"

const HeaderWrap = styled.header`
  display: grid;
  grid-template: 2fr 1fr / auto;

  @media screen and (min-width: 660px) {
    grid-template: 1fr / auto 1fr;
  }
`

export default HeaderWrap

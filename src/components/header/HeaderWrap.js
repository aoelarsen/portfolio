import styled from "styled-components"

const HeaderWrap = styled.header`
  width: 100%;
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: auto;

  @media screen and (min-width: 660px) {
    grid-template-rows: 1fr;
    grid-template-columns: max-content auto;
    justify-items: center;
  }
`

export default HeaderWrap

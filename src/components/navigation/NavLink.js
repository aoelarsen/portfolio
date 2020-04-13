import { Link } from "gatsby"
import styled from "styled-components"

const NavLink = styled(Link)`
  padding: 0.5rem;
  color: inherit;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    box-shadow: inset 0px -2px 0px 0px var(--dark-green);
  }
`

export default NavLink
